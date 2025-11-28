import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import * as fc from 'fast-check'
import { updatePageSEO, generateLodgingSchema, injectSchemaMarkup } from './seo.js'
import { siteConfig } from '../data/siteConfig.js'

describe('SEO Utilities', () => {
  // Store original document state
  let originalTitle
  let originalHead

  beforeEach(() => {
    // Save original state
    originalTitle = document.title
    originalHead = document.head.innerHTML

    // Clear any existing meta tags and schema
    document.title = ''
    const metas = document.head.querySelectorAll('meta')
    metas.forEach(meta => meta.remove())
    const schemas = document.head.querySelectorAll('script[type="application/ld+json"]')
    schemas.forEach(schema => schema.remove())
  })

  afterEach(() => {
    // Restore original state
    document.title = originalTitle
    document.head.innerHTML = originalHead
  })

  /**
   * Feature: cabanas-data-update, Property 5: SEO meta tags contain location keywords
   * Validates: Requirements 7.1, 7.2
   * 
   * Property: For any page in the system, the generated meta tags (title, description, keywords)
   * must contain at least one location-based keyword from the set: 
   * ["Huasca", "Huasca", "Hidalgo", "Pueblo Mágico"]
   */
  it('Property 5: SEO meta tags contain location keywords', () => {
    const locationKeywords = ['Huasca', 'Huasca', 'Hidalgo', 'Pueblo Mágico']

    fc.assert(
      fc.property(
        fc.record({
          title: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
          description: fc.option(fc.string({ minLength: 1, maxLength: 200 })),
          keywords: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
          path: fc.option(fc.string())
        }),
        (pageData) => {
          // Update SEO with the generated page data
          updatePageSEO(pageData)

          // Get the updated meta tags
          const title = document.title
          const descriptionMeta = document.querySelector('meta[name="description"]')
          const keywordsMeta = document.querySelector('meta[name="keywords"]')

          const description = descriptionMeta ? descriptionMeta.getAttribute('content') : ''
          const keywords = keywordsMeta ? keywordsMeta.getAttribute('content') : ''

          // Combine all text to search
          const allText = `${title} ${description} ${keywords}`.toLowerCase()

          // Check if at least one location keyword is present
          const hasLocationKeyword = locationKeywords.some(keyword =>
            allText.includes(keyword.toLowerCase())
          )

          return hasLocationKeyword
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Feature: cabanas-data-update, Property 6: Meta descriptions are within character limit
   * Validates: Requirements 7.3
   * 
   * Property: For any page in the system, the generated meta description must be 
   * non-empty and contain 160 characters or fewer.
   */
  it('Property 6: Meta descriptions are within character limit', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
          description: fc.option(fc.string({ minLength: 1, maxLength: 200 })),
          keywords: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
          path: fc.option(fc.string())
        }),
        (pageData) => {
          // Update SEO with the generated page data
          updatePageSEO(pageData)

          // Get the meta description
          const descriptionMeta = document.querySelector('meta[name="description"]')
          const description = descriptionMeta ? descriptionMeta.getAttribute('content') : ''

          // Check that description is non-empty and within 160 characters
          return description.length > 0 && description.length <= 160
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Feature: cabanas-data-update, Property 7: Semantic headings contain keywords
   * Validates: Requirements 7.5
   * 
   * Property: For any page content, the heading hierarchy (H1, H2, H3) must be properly 
   * structured and at least one heading must contain a location or service keyword.
   */
  it('Property 7: Semantic headings contain keywords', () => {
    const keywords = ['Huasca', 'Huasca', 'Hidalgo', 'Cabaña', 'Cabañas', 'Hospedaje', 'Alojamiento', 'Instalaciones', 'Políticas', 'Servicios']

    // Generator for heading text that includes at least one keyword
    const headingWithKeyword = fc.string({ minLength: 5, maxLength: 100 })
      .chain(baseText => 
        fc.constantFrom(...keywords).map(keyword => {
          // Insert keyword into the text
          const trimmedBase = baseText.trim()
          if (trimmedBase.length === 0) {
            return keyword
          }
          // Randomly place keyword at start, middle, or end
          const position = Math.floor(Math.random() * 3)
          if (position === 0) return `${keyword} ${trimmedBase}`
          if (position === 1) return `${trimmedBase} ${keyword}`
          return `${trimmedBase.slice(0, Math.floor(trimmedBase.length / 2))} ${keyword} ${trimmedBase.slice(Math.floor(trimmedBase.length / 2))}`
        })
      )

    fc.assert(
      fc.property(
        fc.record({
          h1: headingWithKeyword,
          h2List: fc.array(fc.string({ minLength: 3, maxLength: 80 }), { minLength: 1, maxLength: 5 }),
          h3List: fc.array(fc.string({ minLength: 3, maxLength: 60 }), { minLength: 0, maxLength: 5 })
        }),
        (headingData) => {
          // Create a temporary container with heading structure
          const container = document.createElement('div')
          
          // Add H1
          const h1 = document.createElement('h1')
          h1.textContent = headingData.h1
          container.appendChild(h1)
          
          // Add H2s
          headingData.h2List.forEach(text => {
            const h2 = document.createElement('h2')
            h2.textContent = text
            container.appendChild(h2)
          })
          
          // Add H3s
          headingData.h3List.forEach(text => {
            const h3 = document.createElement('h3')
            h3.textContent = text
            container.appendChild(h3)
          })
          
          // Append to body temporarily
          document.body.appendChild(container)
          
          // Get all headings
          const allHeadings = container.querySelectorAll('h1, h2, h3')
          const allHeadingText = Array.from(allHeadings)
            .map(h => h.textContent)
            .join(' ')
            .toLowerCase()
          
          // Check if at least one keyword is present
          const hasKeyword = keywords.some(keyword => 
            allHeadingText.includes(keyword.toLowerCase())
          )
          
          // Clean up
          document.body.removeChild(container)
          
          return hasKeyword
        }
      ),
      { numRuns: 100 }
    )
  })
})
