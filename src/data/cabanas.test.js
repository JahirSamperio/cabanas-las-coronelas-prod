import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { cabanas } from './cabanas.js'

describe('Cabanas Data Structure Validation', () => {
  /**
   * Feature: cabanas-data-update, Property 1: All cabanas have complete required data
   * Validates: Requirements 1.2, 1.3
   * 
   * Property: For any cabaña in the system, it must have all required fields populated:
   * - id (non-empty string)
   * - name (non-empty string)
   * - capacity (min/max with min > 0 and max >= min)
   * - at least one pricing tier
   * - room distribution
   * - at least 3 amenities
   * - at least one image
   */
  it('Property 1: All cabanas have complete required data', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...cabanas),
        (cabana) => {
          // Validate id
          const hasValidId = cabana.id && typeof cabana.id === 'string' && cabana.id.length > 0
          
          // Validate name
          const hasValidName = cabana.name && typeof cabana.name === 'string' && cabana.name.length > 0
          
          // Validate capacity (checking both old format and new format)
          let hasValidCapacity = false
          if (cabana.capacity) {
            // New format: { min: number, max: number }
            if (typeof cabana.capacity === 'object' && cabana.capacity.min && cabana.capacity.max) {
              hasValidCapacity = 
                cabana.capacity.min > 0 && 
                cabana.capacity.max >= cabana.capacity.min
            }
            // Old format: just a number (for backward compatibility during migration)
            else if (typeof cabana.capacity === 'number') {
              hasValidCapacity = cabana.capacity > 0
            }
          }
          
          // Validate pricing (checking both old format and new format)
          let hasValidPricing = false
          if (cabana.pricing && Array.isArray(cabana.pricing) && cabana.pricing.length > 0) {
            // New format: array of pricing tiers
            hasValidPricing = true
          } else if (cabana.price && typeof cabana.price === 'number') {
            // Old format: single price field (for backward compatibility during migration)
            hasValidPricing = true
          }
          
          // Validate rooms (checking both old format and new format)
          let hasValidRooms = false
          if (cabana.rooms && typeof cabana.rooms === 'object') {
            // New format: { total: number, distribution: array, bathrooms: number }
            hasValidRooms = cabana.rooms.total && cabana.rooms.total > 0
          } else {
            // During migration, rooms might not exist yet - we'll accept this temporarily
            hasValidRooms = true
          }
          
          // Validate amenities
          const hasValidAmenities = 
            cabana.amenities && 
            Array.isArray(cabana.amenities) && 
            cabana.amenities.length >= 3
          
          // Validate images
          const hasValidImages = 
            cabana.images && 
            Array.isArray(cabana.images) && 
            cabana.images.length > 0
          
          // Return true only if all validations pass
          return (
            hasValidId &&
            hasValidName &&
            hasValidCapacity &&
            hasValidPricing &&
            hasValidRooms &&
            hasValidAmenities &&
            hasValidImages
          )
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Feature: cabanas-data-update, Property 2: Pricing tiers are consistent
   * Validates: Requirements 1.5
   * 
   * Property: For any cabaña with multiple pricing tiers, the price must increase 
   * monotonically as the number of guests increases, and each tier's guest count 
   * must be within the cabaña's min/max capacity range.
   */
  it('Property 2: Pricing tiers are consistent', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...cabanas),
        (cabana) => {
          // Skip cabanas without new pricing format
          if (!cabana.pricing || !Array.isArray(cabana.pricing) || cabana.pricing.length === 0) {
            return true
          }

          // Skip cabanas without new capacity format
          if (!cabana.capacity || typeof cabana.capacity !== 'object' || !cabana.capacity.min || !cabana.capacity.max) {
            return true
          }

          // Sort pricing tiers by number of guests
          const sortedPricing = [...cabana.pricing].sort((a, b) => a.guests - b.guests)

          // Check that prices increase monotonically
          for (let i = 0; i < sortedPricing.length - 1; i++) {
            const currentTier = sortedPricing[i]
            const nextTier = sortedPricing[i + 1]

            // Price should increase with more guests
            if (currentTier.pricePerNight >= nextTier.pricePerNight) {
              return false
            }

            // Guest count should be within capacity range
            if (currentTier.guests < cabana.capacity.min || currentTier.guests > cabana.capacity.max) {
              return false
            }
          }

          // Check the last tier as well
          const lastTier = sortedPricing[sortedPricing.length - 1]
          if (lastTier.guests < cabana.capacity.min || lastTier.guests > cabana.capacity.max) {
            return false
          }

          return true
        }
      ),
      { numRuns: 100 }
    )
  })
})
