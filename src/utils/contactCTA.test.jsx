/**
 * Property-based tests for contact CTA presence
 * Feature: cabanas-data-update, Property 15: Contact CTAs are present on all pages
 * Validates: Requirements 10.1
 */

import React from 'react'
import { describe, it, expect } from 'vitest'
import fc from 'fast-check'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

describe('Property 15: Contact CTAs are present on all pages', () => {
  it('should have at least one contact CTA in Header or Footer', () => {
    fc.assert(
      fc.property(fc.constant(true), () => {
        // Render Header
        const { container: headerContainer } = render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        )
        
        // Render Footer
        const { container: footerContainer } = render(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        )
        
        // Check for contact CTAs in Header
        const headerLinks = headerContainer.querySelectorAll('a[href*="tel:"], a[href*="wa.me"], a[href*="whatsapp"], a[href*="mailto:"]')
        
        // Check for contact CTAs in Footer
        const footerLinks = footerContainer.querySelectorAll('a[href*="tel:"], a[href*="wa.me"], a[href*="whatsapp"], a[href*="mailto:"]')
        
        // At least one contact CTA should be present
        const totalContactCTAs = headerLinks.length + footerLinks.length
        
        return totalContactCTAs > 0
      }),
      { numRuns: 100 }
    )
  })

  it('should have phone contact link in Footer', () => {
    fc.assert(
      fc.property(fc.constant(true), () => {
        const { container } = render(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        )
        
        const phoneLinks = container.querySelectorAll('a[href^="tel:"]')
        return phoneLinks.length > 0
      }),
      { numRuns: 100 }
    )
  })

  it('should have WhatsApp contact link in Footer', () => {
    fc.assert(
      fc.property(fc.constant(true), () => {
        const { container } = render(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        )
        
        const whatsappLinks = container.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')
        return whatsappLinks.length > 0
      }),
      { numRuns: 100 }
    )
  })

  it('should have email contact link in Footer', () => {
    fc.assert(
      fc.property(fc.constant(true), () => {
        const { container } = render(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        )
        
        const emailLinks = container.querySelectorAll('a[href^="mailto:"]')
        return emailLinks.length > 0
      }),
      { numRuns: 100 }
    )
  })
})
