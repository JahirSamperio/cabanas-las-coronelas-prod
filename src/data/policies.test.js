import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { policies } from './policies.js'

describe('Policies Data Validation', () => {
  /**
   * Feature: cabanas-data-update, Property 4: Pet-friendly rules are complete
   * Validates: Requirements 6.4
   * 
   * Property: For any pet policy display, it must include at least 3 key rules 
   * from the required set (no confinement, owner responsibility, bring own furniture, 
   * no use of cabin furniture).
   */
  it('Property 4: Pet-friendly rules are complete', () => {
    fc.assert(
      fc.property(
        fc.constant(policies.petFriendly),
        (petPolicy) => {
          // If pets are not allowed, the test passes trivially
          if (!petPolicy.allowed) {
            return true
          }

          // Check that rules array exists and has content
          if (!petPolicy.rules || !Array.isArray(petPolicy.rules)) {
            return false
          }

          // Define the required key rules (case-insensitive matching)
          const requiredRuleKeywords = [
            'confinadas solas', // no confinement alone
            'responsable', // owner responsibility
            'propio mobiliario', // bring own furniture
            'no pueden usar el mobiliario' // no use of cabin furniture
          ]

          // Count how many required rules are present
          let foundRulesCount = 0
          
          for (const keyword of requiredRuleKeywords) {
            const ruleFound = petPolicy.rules.some(rule => 
              rule.toLowerCase().includes(keyword.toLowerCase())
            )
            if (ruleFound) {
              foundRulesCount++
            }
          }

          // Must have at least 3 of the 4 key rules
          return foundRulesCount >= 3
        }
      ),
      { numRuns: 100 }
    )
  })

  // Additional validation tests for completeness
  it('should have valid check-in/check-out times', () => {
    expect(policies.checkInOut.normal.checkIn).toBeTruthy()
    expect(policies.checkInOut.normal.checkOut).toBeTruthy()
    expect(policies.checkInOut.vacation.checkIn).toBeTruthy()
    expect(policies.checkInOut.vacation.checkOut).toBeTruthy()
  })

  it('should have breakfast schedule', () => {
    expect(policies.breakfast.schedule).toBeTruthy()
    expect(policies.breakfast.schedule).toMatch(/\d{1,2}:\d{2}\s*[AP]M/)
  })

  it('should have organized rules by category', () => {
    expect(Array.isArray(policies.rules)).toBe(true)
    expect(policies.rules.length).toBeGreaterThan(0)
    
    policies.rules.forEach(ruleCategory => {
      expect(ruleCategory.category).toBeTruthy()
      expect(Array.isArray(ruleCategory.items)).toBe(true)
      expect(ruleCategory.items.length).toBeGreaterThan(0)
    })
  })

  it('should have complete pet-friendly policy structure', () => {
    expect(policies.petFriendly.allowed).toBe(true)
    expect(policies.petFriendly.costs.small).toBeGreaterThan(0)
    expect(policies.petFriendly.costs.large).toBeGreaterThan(0)
    expect(policies.petFriendly.deposit).toBeGreaterThan(0)
    expect(Array.isArray(policies.petFriendly.depositConditions)).toBe(true)
    expect(policies.petFriendly.depositConditions.length).toBeGreaterThan(0)
    expect(Array.isArray(policies.petFriendly.rules)).toBe(true)
    expect(policies.petFriendly.rules.length).toBeGreaterThan(0)
  })
})
