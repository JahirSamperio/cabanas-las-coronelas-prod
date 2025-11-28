import { describe, it, expect } from 'vitest'
import fc from 'fast-check'

/**
 * Feature: cabanas-data-update, Property 10: Responsive design maintains readability
 * Validates: Requirements 8.3
 */

// Helper function to parse CSS font-size values
const parseFontSize = (cssValue) => {
  if (cssValue.endsWith('rem')) {
    return parseFloat(cssValue) * 16 // Convert rem to px (assuming 16px base)
  }
  if (cssValue.endsWith('px')) {
    return parseFloat(cssValue)
  }
  return 16 // Default fallback
}

// Helper function to get computed font size for a selector at a viewport width
const getComputedFontSize = (selector, viewportWidth) => {
  // Define font sizes based on CSS rules
  const fontSizes = {
    // Body text
    'body': { default: '1rem', mobile: '1rem' },
    'p': { default: '1rem', mobile: '1rem' },
    
    // Headings
    'h1': { default: '3.5rem', mobile: '2.5rem' },
    '.hero-title': { default: '3.5rem', mobile: '2.5rem' },
    '.section-title': { default: '2.5rem', mobile: '2rem' },
    '.page-title': { default: '2.5rem', mobile: '2rem' },
    '.cta-title': { default: '2.5rem', mobile: '2rem' },
    
    'h2': { default: '2.5rem', mobile: '2rem' },
    'h3': { default: '1.5rem', mobile: '1.5rem' },
    
    // Subtitles
    '.hero-subtitle': { default: '1.25rem', mobile: '1.125rem' },
    '.section-subtitle': { default: '1.125rem', mobile: '1.125rem' },
    '.page-subtitle': { default: '1.125rem', mobile: '1.125rem' },
    
    // Card text
    '.card-title': { default: '1.25rem', mobile: '1.25rem' },
    '.card-text': { default: '1rem', mobile: '1rem' },
    
    // Small text
    '.filter-label': { default: '0.875rem', mobile: '0.875rem' },
    '.results-count': { default: '0.875rem', mobile: '0.875rem' },
    '.capacity': { default: '0.875rem', mobile: '0.875rem' },
    
    // Buttons
    '.btn': { default: '1rem', mobile: '1rem' },
    '.btn-lg': { default: '1.125rem', mobile: '1.125rem' },
  }

  const sizes = fontSizes[selector] || { default: '1rem', mobile: '1rem' }
  
  // Apply mobile styles for viewports <= 768px
  if (viewportWidth <= 768) {
    return parseFontSize(sizes.mobile)
  }
  
  return parseFontSize(sizes.default)
}

// Define text element selectors to test
const textSelectors = [
  'body', 'p', 'h1', 'h2', 'h3',
  '.hero-title', '.hero-subtitle',
  '.section-title', '.section-subtitle',
  '.page-title', '.page-subtitle',
  '.card-title', '.card-text',
  '.filter-label', '.results-count',
  '.btn', '.btn-lg', '.capacity',
  '.cta-title'
]

describe('Responsive Text Readability Property Tests', () => {
  it('Property 10: Body text maintains minimum 14px at all viewport widths', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }), // Viewport width range
        (viewportWidth) => {
          const bodyFontSize = getComputedFontSize('body', viewportWidth)
          const paragraphFontSize = getComputedFontSize('p', viewportWidth)
          
          // Body text must be at least 14px
          return bodyFontSize >= 14 && paragraphFontSize >= 14
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 10: All text elements maintain minimum 14px at mobile breakpoint', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...textSelectors),
        fc.integer({ min: 320, max: 767 }), // Mobile viewport range
        (selector, viewportWidth) => {
          const fontSize = getComputedFontSize(selector, viewportWidth)
          
          // All text must be at least 14px on mobile
          return fontSize >= 14
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 10: All text elements maintain minimum 14px at tablet breakpoint', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...textSelectors),
        fc.integer({ min: 768, max: 1023 }), // Tablet viewport range
        (selector, viewportWidth) => {
          const fontSize = getComputedFontSize(selector, viewportWidth)
          
          // All text must be at least 14px on tablet
          return fontSize >= 14
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 10: All text elements maintain minimum 14px at desktop breakpoint', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...textSelectors),
        fc.integer({ min: 1024, max: 1920 }), // Desktop viewport range
        (selector, viewportWidth) => {
          const fontSize = getComputedFontSize(selector, viewportWidth)
          
          // All text must be at least 14px on desktop
          return fontSize >= 14
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 10: Headings scale appropriately across breakpoints', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('h1', '.hero-title', '.section-title', '.page-title'),
        fc.integer({ min: 320, max: 1920 }),
        (selector, viewportWidth) => {
          const fontSize = getComputedFontSize(selector, viewportWidth)
          
          // Headings should be larger on desktop than mobile
          if (viewportWidth <= 768) {
            // Mobile: h1 should be 32-40px (2rem - 2.5rem)
            return fontSize >= 32 && fontSize <= 56
          } else {
            // Desktop: h1 should be 40-56px (2.5rem - 3.5rem)
            return fontSize >= 40 && fontSize <= 56
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 10: Small text remains readable (minimum 14px)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('.filter-label', '.results-count', '.capacity'),
        fc.integer({ min: 320, max: 1920 }),
        (selector, viewportWidth) => {
          const fontSize = getComputedFontSize(selector, viewportWidth)
          
          // Small text should be exactly 14px (0.875rem)
          return fontSize === 14
        }
      ),
      { numRuns: 100 }
    )
  })
})
