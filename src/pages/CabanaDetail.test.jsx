import React from 'react'
import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import fc from 'fast-check'
import CabanaDetail from './CabanaDetail'
import { cabanas } from '../data/cabanas'

/**
 * Feature: cabanas-data-update, Property 13: Cabana detail pages have required sections
 * Validates: Requirements 9.4
 * 
 * Property: For any cabaña detail page, it must contain all required sections:
 * description, rooms/beds, amenities, pricing table, and policies, each with appropriate heading.
 */
describe('CabanaDetail Property Tests', () => {
  afterEach(() => {
    cleanup()
  })

  it('Property 13: Cabana detail pages have all required sections', () => {
    fc.assert(
      fc.property(fc.constantFrom(...cabanas), (cabana) => {
        // Clean up before each render
        cleanup()
        
        // Render with MemoryRouter to simulate the route with the cabana ID
        render(
          <MemoryRouter initialEntries={[`/cabanas/${cabana.id}`]}>
            <Routes>
              <Route path="/cabanas/:id" element={<CabanaDetail />} />
            </Routes>
          </MemoryRouter>
        )

        // Check for Description section
        const descriptionHeading = screen.getByText('Descripción')
        expect(descriptionHeading).toBeTruthy()
        const descriptionText = screen.getByText(cabana.description)
        expect(descriptionText).toBeTruthy()

        // Check for Rooms/Beds section
        const roomsHeading = screen.getByText('Habitaciones y Camas')
        expect(roomsHeading).toBeTruthy()

        // Check for Amenities section
        const amenitiesHeading = screen.getByText('Amenidades')
        expect(amenitiesHeading).toBeTruthy()

        // Check for Services section
        const servicesHeading = screen.getByText('Servicios Incluidos')
        expect(servicesHeading).toBeTruthy()

        // Check for Pricing section (via PricingTable component)
        const pricingHeading = screen.getByText('Tarifas por Noche')
        expect(pricingHeading).toBeTruthy()

        // Check for Policies section
        const policiesHeading = screen.getByText('Políticas')
        expect(policiesHeading).toBeTruthy()

        return true
      }),
      { numRuns: 100 }
    )
  })
})

/**
 * Feature: cabanas-data-update, Property 17: Cabin detail pages have prominent booking CTA
 * Validates: Requirements 10.4
 * 
 * Property: For any cabaña detail page, there must be at least one prominent call-to-action button
 * for booking/inquiry (e.g., "Reservar Ahora", "Consultar Disponibilidad") visible above the fold
 * or in a sticky position.
 */
describe('Property 17: Cabin detail pages have prominent booking CTA', () => {
  afterEach(() => {
    cleanup()
  })

  it('should have prominent booking CTA buttons on all cabin detail pages', () => {
    fc.assert(
      fc.property(fc.constantFrom(...cabanas), (cabana) => {
        // Clean up before each render
        cleanup()
        
        // Render with MemoryRouter to simulate the route with the cabana ID
        const { container } = render(
          <MemoryRouter initialEntries={[`/cabanas/${cabana.id}`]}>
            <Routes>
              <Route path="/cabanas/:id" element={<CabanaDetail />} />
            </Routes>
          </MemoryRouter>
        )

        // Check for booking CTA buttons
        // Look for buttons/links with booking-related text
        const bookingButtons = container.querySelectorAll(
          'a[href*="tel:"], a[href*="wa.me"], button, .btn'
        )

        // Filter for booking-related CTAs
        const bookingCTAs = Array.from(bookingButtons).filter(element => {
          const text = element.textContent.toLowerCase()
          return (
            text.includes('reservar') ||
            text.includes('llamar') ||
            text.includes('whatsapp') ||
            text.includes('consultar') ||
            text.includes('disponibilidad')
          )
        })

        // Must have at least one booking CTA
        expect(bookingCTAs.length).toBeGreaterThan(0)

        // Check that at least one CTA is in the reservation sidebar (prominent position)
        const reservationSidebar = container.querySelector('.reservation-sidebar')
        expect(reservationSidebar).toBeTruthy()

        const sidebarCTAs = reservationSidebar.querySelectorAll('a[href*="tel:"], a[href*="wa.me"]')
        expect(sidebarCTAs.length).toBeGreaterThan(0)

        return true
      }),
      { numRuns: 100 }
    )
  })

  it('should have WhatsApp and phone CTAs in the reservation sidebar', () => {
    fc.assert(
      fc.property(fc.constantFrom(...cabanas), (cabana) => {
        // Clean up before each render
        cleanup()
        
        const { container } = render(
          <MemoryRouter initialEntries={[`/cabanas/${cabana.id}`]}>
            <Routes>
              <Route path="/cabanas/:id" element={<CabanaDetail />} />
            </Routes>
          </MemoryRouter>
        )

        const reservationSidebar = container.querySelector('.reservation-sidebar')
        expect(reservationSidebar).toBeTruthy()

        // Check for phone CTA
        const phoneCTA = reservationSidebar.querySelector('a[href^="tel:"]')
        expect(phoneCTA).toBeTruthy()

        // Check for WhatsApp CTA
        const whatsappCTA = reservationSidebar.querySelector('a[href*="wa.me"]')
        expect(whatsappCTA).toBeTruthy()

        return true
      }),
      { numRuns: 100 }
    )
  })
})
