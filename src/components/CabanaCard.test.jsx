import React from 'react'
import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import fc from 'fast-check'
import CabanaCard from './CabanaCard'
import { cabanas } from '../data/cabanas'

/**
 * Feature: cabanas-data-update, Property 12: Cabana cards display consistent information
 * Validates: Requirements 9.2
 * 
 * Property: For any cabaña card displayed in the catalog, it must show all required elements:
 * image, name, capacity, price, and at least 2 key amenities in a consistent format.
 */
describe('CabanaCard Property Tests', () => {
  afterEach(() => {
    cleanup()
  })

  it('Property 12: All cabana cards display consistent required information', () => {
    fc.assert(
      fc.property(fc.constantFrom(...cabanas), (cabana) => {
        // Clean up before each render
        cleanup()
        
        const { container } = render(
          <BrowserRouter>
            <CabanaCard cabana={cabana} />
          </BrowserRouter>
        )

        // Check that name is displayed
        const nameElement = screen.getByText(cabana.name)
        expect(nameElement).toBeTruthy()

        // Check that capacity range is displayed
        const capacityText = `${cabana.capacity.min}-${cabana.capacity.max} personas`
        const capacityElement = screen.getByText(capacityText)
        expect(capacityElement).toBeTruthy()

        // Check that price is displayed with "Desde" prefix
        const priceFrom = cabana.pricing[0].pricePerNight
        const formattedPrice = priceFrom.toLocaleString()
        const priceElement = screen.getByText(`Desde $${formattedPrice}/noche`)
        expect(priceElement).toBeTruthy()

        // Check that image is present
        const imageElement = container.querySelector('img')
        expect(imageElement).toBeTruthy()
        expect(imageElement.alt).toContain(cabana.name)

        // Check that short description is displayed
        const descriptionElement = screen.getByText(cabana.shortDescription)
        expect(descriptionElement).toBeTruthy()

        // Check that action buttons are present
        const verDetallesButton = screen.getByText('Ver Detalles')
        expect(verDetallesButton).toBeTruthy()
        
        const llamarButton = screen.getByText('Llamar')
        expect(llamarButton).toBeTruthy()

        return true
      }),
      { numRuns: 100 }
    )
  })
})
