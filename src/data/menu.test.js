import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { breakfastMenu } from './menu.js'

describe('Breakfast Menu Data Validation', () => {
  /**
   * Feature: cabanas-data-update, Property 3: Menu items have descriptions
   * Validates: Requirements 4.2
   * 
   * Property: For any menu item displayed in the breakfast menu, it must have 
   * a non-empty description or accompaniments list to provide complete information.
   */
  it('Property 3: Menu items have descriptions', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...breakfastMenu.mainDishes),
        (menuItem) => {
          // A menu item must have either:
          // 1. A non-empty description, OR
          // 2. A non-empty accompaniments list
          
          const hasDescription = 
            menuItem.description && 
            typeof menuItem.description === 'string' && 
            menuItem.description.trim().length > 0
          
          const hasAccompaniments = 
            menuItem.accompaniments && 
            Array.isArray(menuItem.accompaniments) && 
            menuItem.accompaniments.length > 0
          
          // At least one must be true
          return hasDescription || hasAccompaniments
        }
      ),
      { numRuns: 100 }
    )
  })
})
