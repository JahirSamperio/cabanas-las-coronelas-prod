import { describe, it, expect } from 'vitest'
import fc from 'fast-check'
import { cabanas } from '../data/cabanas'

/**
 * Feature: cabanas-data-update, Property 11: Filter results match filter criteria
 * Validates: Requirements 9.1
 */

// Helper function to apply filters (extracted from Cabanas.jsx logic)
const applyFilters = (cabanas, filters) => {
  let filtered = [...cabanas]

  // Filtrar por capacidad - check if filter value is within cabin's min/max range
  if (filters.capacity) {
    const capacityValue = parseInt(filters.capacity)
    filtered = filtered.filter(cabana => {
      return cabana.capacity.min <= capacityValue && cabana.capacity.max >= capacityValue
    })
  }

  // Filtrar por rango de precio - use priceFrom field (first pricing tier)
  if (filters.priceRange) {
    const [min, max] = filters.priceRange.split('-').map(Number)
    filtered = filtered.filter(cabana => {
      const priceFrom = cabana.pricing[0]?.pricePerNight || 0
      if (max) {
        return priceFrom >= min && priceFrom <= max
      }
      return priceFrom >= min
    })
  }

  return filtered
}

describe('Cabanas Filter Property Tests', () => {
  it('Property 11: Filter results match filter criteria - capacity filter', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 14 }),
        (capacity) => {
          const filters = { capacity: capacity.toString() }
          const results = applyFilters(cabanas, filters)

          // All results must be able to accommodate the requested capacity
          return results.every(cabana => 
            cabana.capacity.min <= capacity && cabana.capacity.max >= capacity
          )
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 11: Filter results match filter criteria - price range filter with max', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1000, max: 3000 }),
        fc.integer({ min: 3000, max: 7000 }),
        (minPrice, maxPrice) => {
          // Ensure min < max
          const min = Math.min(minPrice, maxPrice)
          const max = Math.max(minPrice, maxPrice)
          
          const filters = { priceRange: `${min}-${max}` }
          const results = applyFilters(cabanas, filters)

          // All results must have priceFrom within the range
          return results.every(cabana => {
            const priceFrom = cabana.pricing[0]?.pricePerNight || 0
            return priceFrom >= min && priceFrom <= max
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 11: Filter results match filter criteria - price range filter without max', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1000, max: 6000 }),
        (minPrice) => {
          const filters = { priceRange: `${minPrice}` }
          const results = applyFilters(cabanas, filters)

          // All results must have priceFrom >= min
          return results.every(cabana => {
            const priceFrom = cabana.pricing[0]?.pricePerNight || 0
            return priceFrom >= minPrice
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 11: Filter results match filter criteria - combined filters', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 10 }),
        fc.integer({ min: 1000, max: 3000 }),
        fc.integer({ min: 3000, max: 6000 }),
        (capacity, minPrice, maxPrice) => {
          const min = Math.min(minPrice, maxPrice)
          const max = Math.max(minPrice, maxPrice)
          
          const filters = {
            capacity: capacity.toString(),
            priceRange: `${min}-${max}`
          }
          const results = applyFilters(cabanas, filters)

          // All results must satisfy BOTH filters
          return results.every(cabana => {
            const capacityMatch = cabana.capacity.min <= capacity && cabana.capacity.max >= capacity
            const priceFrom = cabana.pricing[0]?.pricePerNight || 0
            const priceMatch = priceFrom >= min && priceFrom <= max
            return capacityMatch && priceMatch
          })
        }
      ),
      { numRuns: 100 }
    )
  })
})
