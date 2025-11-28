/**
 * Property-based tests for WhatsApp link format
 * Feature: cabanas-data-update, Property 16: WhatsApp links have correct format
 * Validates: Requirements 10.2
 */

import { describe, it, expect } from 'vitest'
import fc from 'fast-check'
import { generateWhatsAppLink, generateCabanaWhatsAppLink, generateGeneralWhatsAppLink } from './whatsapp'
import { contactInfo } from '../data'

describe('Property 16: WhatsApp links have correct format', () => {
  it('should generate WhatsApp links with wa.me format', () => {
    fc.assert(
      fc.property(fc.string(), (message) => {
        const link = generateWhatsAppLink(message)
        
        // Must start with https://wa.me/
        return link.startsWith('https://wa.me/')
      }),
      { numRuns: 100 }
    )
  })

  it('should include the correct phone number in all WhatsApp links', () => {
    fc.assert(
      fc.property(fc.string(), (message) => {
        const link = generateWhatsAppLink(message)
        
        // Must include the contact phone number
        return link.includes(contactInfo.whatsapp)
      }),
      { numRuns: 100 }
    )
  })

  it('should properly encode messages in WhatsApp links', () => {
    fc.assert(
      fc.property(fc.string(), (message) => {
        const link = generateWhatsAppLink(message)
        
        // Link should contain text parameter
        if (message.length > 0) {
          return link.includes('?text=')
        }
        return true
      }),
      { numRuns: 100 }
    )
  })

  it('should generate cabin-specific WhatsApp links with cabin name', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }),
        fc.integer({ min: 1, max: 20 }),
        fc.integer({ min: 1, max: 20 }),
        (cabanaName, minCapacity, maxCapacity) => {
          // Ensure min <= max
          const min = Math.min(minCapacity, maxCapacity)
          const max = Math.max(minCapacity, maxCapacity)
          
          const link = generateCabanaWhatsAppLink(cabanaName, {
            minCapacity: min,
            maxCapacity: max
          })
          
          // Must be a valid wa.me link
          const isValidFormat = link.startsWith('https://wa.me/')
          
          // Must include the cabin name (URL encoded)
          const encodedCabanaName = encodeURIComponent(cabanaName)
          const includesCabanaName = link.includes(encodedCabanaName)
          
          return isValidFormat && includesCabanaName
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should generate general inquiry links with correct format', () => {
    fc.assert(
      fc.property(fc.constant(true), () => {
        const link = generateGeneralWhatsAppLink()
        
        // Must be a valid wa.me link
        const isValidFormat = link.startsWith('https://wa.me/')
        
        // Must include phone number
        const includesPhone = link.includes(contactInfo.whatsapp)
        
        // Must have a message
        const hasMessage = link.includes('?text=')
        
        return isValidFormat && includesPhone && hasMessage
      }),
      { numRuns: 100 }
    )
  })

  it('should handle special characters in messages correctly', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => s.includes('&') || s.includes('?') || s.includes('#')),
        (message) => {
          const link = generateWhatsAppLink(message)
          
          // Link should be properly formatted even with special characters
          const isValidFormat = link.startsWith('https://wa.me/')
          
          // Should not have unencoded special characters in the message part
          const urlParts = link.split('?text=')
          if (urlParts.length > 1) {
            const messagePart = urlParts[1]
            // These characters should be encoded
            const hasUnencoded = messagePart.includes('&') && !messagePart.includes('%26')
            return isValidFormat && !hasUnencoded
          }
          
          return isValidFormat
        }
      ),
      { numRuns: 100 }
    )
  })
})
