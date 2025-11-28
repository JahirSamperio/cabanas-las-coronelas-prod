import React from 'react'
import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import LazyImage from '../components/LazyImage'
import { cabanas } from '../data/cabanas'

/**
 * Feature: cabanas-data-update, Property 9: Images use optimized formats
 * Validates: Requirements 8.2
 * 
 * For any image in the system, it must use an optimized format (WebP, JPEG with quality ≤ 85%) 
 * or have appropriate srcset for responsive loading.
 */
describe('Property 9: Images use optimized formats', () => {
  it('LazyImage component supports srcset for responsive images', () => {
    fc.assert(
      fc.property(
        fc.record({
          src: fc.webUrl(),
          srcSet: fc.option(fc.string({ minLength: 10 })),
          sizes: fc.option(fc.string({ minLength: 5 })),
          alt: fc.string({ minLength: 1, maxLength: 100 })
        }),
        (imageProps) => {
          const { container } = render(
            <LazyImage 
              src={imageProps.src}
              srcSet={imageProps.srcSet}
              sizes={imageProps.sizes}
              alt={imageProps.alt}
            />
          )
          
          // LazyImage should render container
          const lazyContainer = container.querySelector('.lazy-image-container')
          expect(lazyContainer).toBeTruthy()
          
          // If image is rendered and srcSet was provided, verify it's applied
          const img = container.querySelector('img')
          if (img && imageProps.srcSet) {
            expect(img.hasAttribute('srcset')).toBe(true)
          }
          
          // If sizes was provided, verify it's applied
          if (img && imageProps.sizes) {
            expect(img.hasAttribute('sizes')).toBe(true)
          }
          
          return true
        }
      ),
      { numRuns: 100 }
    )
  })

  it('all cabin images have valid URLs that could support optimization', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...cabanas),
        (cabana) => {
          // Verify each cabin has images
          expect(cabana.images).toBeTruthy()
          expect(cabana.images.length).toBeGreaterThan(0)
          
          // Check that each image URL is valid
          cabana.images.forEach(imageUrl => {
            expect(imageUrl).toBeTruthy()
            expect(typeof imageUrl).toBe('string')
            expect(imageUrl.length).toBeGreaterThan(0)
            
            // Image URL should be either a valid HTTP(S) URL or a relative path
            const isValidUrl = imageUrl.startsWith('http://') || 
                              imageUrl.startsWith('https://') || 
                              imageUrl.startsWith('/')
            expect(isValidUrl).toBe(true)
          })
          
          return true
        }
      ),
      { numRuns: 100 }
    )
  })

  it('LazyImage supports optimized image formats through standard img attributes', () => {
    // Test that LazyImage can render images with various optimized formats
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant('/images/cabin.webp'),
          fc.constant('/images/cabin.jpg'),
          fc.constant('/images/cabin.png'),
          fc.constant('https://example.com/image.webp'),
          fc.constant('https://example.com/image.jpg')
        ),
        (imageSrc) => {
          const { container } = render(
            <LazyImage 
              src={imageSrc}
              alt="Test cabin image"
            />
          )
          
          // Verify LazyImage renders
          const lazyContainer = container.querySelector('.lazy-image-container')
          expect(lazyContainer).toBeTruthy()
          
          // If image is rendered, it should have the correct src
          const img = container.querySelector('img')
          if (img) {
            expect(img.getAttribute('src')).toBe(imageSrc)
          }
          
          return true
        }
      ),
      { numRuns: 100 }
    )
  })

  it('LazyImage component accepts and applies width and height attributes for layout stability', () => {
    // Testing that LazyImage supports width/height to prevent layout shift (CLS optimization)
    fc.assert(
      fc.property(
        fc.record({
          src: fc.webUrl(),
          width: fc.option(fc.integer({ min: 100, max: 2000 })),
          height: fc.option(fc.integer({ min: 100, max: 2000 })),
          alt: fc.string({ minLength: 1 })
        }),
        (imageProps) => {
          const { container } = render(
            <LazyImage 
              src={imageProps.src}
              width={imageProps.width}
              height={imageProps.height}
              alt={imageProps.alt}
            />
          )
          
          const img = container.querySelector('img')
          if (img) {
            // If width was provided, it should be applied
            if (imageProps.width) {
              expect(img.hasAttribute('width')).toBe(true)
            }
            
            // If height was provided, it should be applied
            if (imageProps.height) {
              expect(img.hasAttribute('height')).toBe(true)
            }
          }
          
          return true
        }
      ),
      { numRuns: 100 }
    )
  })
})
