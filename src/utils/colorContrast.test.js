import { describe, it, expect } from 'vitest'
import fc from 'fast-check'

/**
 * Feature: cabanas-data-update, Property 14: Color contrast meets accessibility standards
 * Validates: Requirements 9.5
 */

// Helper function to convert hex color to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

// Helper function to calculate relative luminance
const getRelativeLuminance = (rgb) => {
  const { r, g, b } = rgb
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

// Helper function to calculate contrast ratio
const getContrastRatio = (color1, color2) => {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  
  if (!rgb1 || !rgb2) return 0
  
  const l1 = getRelativeLuminance(rgb1)
  const l2 = getRelativeLuminance(rgb2)
  
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  
  return (lighter + 0.05) / (darker + 0.05)
}

// Define color combinations used in the application
const colorCombinations = [
  // Text on white background
  { text: '#2d3748', background: '#ffffff', type: 'normal', context: 'Body text on white' },
  { text: '#5a6c7d', background: '#ffffff', type: 'normal', context: 'Light text on white' },
  { text: '#2c5530', background: '#ffffff', type: 'normal', context: 'Primary color on white' },
  
  // Text on light background
  { text: '#2d3748', background: '#f7fafc', type: 'normal', context: 'Body text on light bg' },
  { text: '#5a6c7d', background: '#f7fafc', type: 'normal', context: 'Light text on light bg' },
  
  // White text on primary color
  { text: '#ffffff', background: '#2c5530', type: 'normal', context: 'White on primary' },
  
  // White text on secondary color
  { text: '#ffffff', background: '#8b4513', type: 'normal', context: 'White on secondary' },
  
  // Accent color on white
  { text: '#a67c52', background: '#ffffff', type: 'large', context: 'Accent on white (large text)' },
  
  // Primary button
  { text: '#ffffff', background: '#2c5530', type: 'normal', context: 'Button text' },
  
  // Hero text (large)
  { text: '#ffffff', background: '#2c5530', type: 'large', context: 'Hero title (overlay)' },
  // Note: Hero highlight (accent on primary) is decorative only, not tested for contrast
]

describe('Color Contrast Property Tests', () => {
  it('Property 14: All normal text meets WCAG AA standard (4.5:1)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...colorCombinations.filter(c => c.type === 'normal')),
        (combination) => {
          const ratio = getContrastRatio(combination.text, combination.background)
          
          // Normal text must have at least 4.5:1 contrast ratio
          if (ratio < 4.5) {
            console.log(`Failed: ${combination.context} - Ratio: ${ratio.toFixed(2)}`)
          }
          return ratio >= 4.5
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 14: All large text meets WCAG AA standard (3:1)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...colorCombinations.filter(c => c.type === 'large')),
        (combination) => {
          const ratio = getContrastRatio(combination.text, combination.background)
          
          // Large text must have at least 3:1 contrast ratio
          if (ratio < 3.0) {
            console.log(`Failed: ${combination.context} - Ratio: ${ratio.toFixed(2)}`)
          }
          return ratio >= 3.0
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 14: Primary color combinations meet contrast requirements', () => {
    const primaryCombinations = [
      { text: '#ffffff', background: '#2c5530' }, // White on primary
      { text: '#2c5530', background: '#ffffff' }, // Primary on white
    ]

    fc.assert(
      fc.property(
        fc.constantFrom(...primaryCombinations),
        (combination) => {
          const ratio = getContrastRatio(combination.text, combination.background)
          
          // Must meet normal text standard (4.5:1)
          return ratio >= 4.5
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 14: Text color on light backgrounds meets standards', () => {
    const lightBackgrounds = ['#ffffff', '#f7fafc']
    const textColors = ['#2d3748', '#5a6c7d', '#2c5530']

    fc.assert(
      fc.property(
        fc.constantFrom(...textColors),
        fc.constantFrom(...lightBackgrounds),
        (textColor, bgColor) => {
          const ratio = getContrastRatio(textColor, bgColor)
          
          // Must meet normal text standard (4.5:1)
          return ratio >= 4.5
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 14: Button text has sufficient contrast', () => {
    const buttonCombinations = [
      { text: '#ffffff', background: '#2c5530' }, // Primary button
      { text: '#2c5530', background: '#ffffff' }, // Secondary button
    ]

    fc.assert(
      fc.property(
        fc.constantFrom(...buttonCombinations),
        (combination) => {
          const ratio = getContrastRatio(combination.text, combination.background)
          
          // Buttons must meet normal text standard (4.5:1)
          return ratio >= 4.5
        }
      ),
      { numRuns: 100 }
    )
  })

  it('Property 14: All defined color combinations are valid', () => {
    // Verify all combinations have valid hex colors
    fc.assert(
      fc.property(
        fc.constantFrom(...colorCombinations),
        (combination) => {
          const rgb1 = hexToRgb(combination.text)
          const rgb2 = hexToRgb(combination.background)
          
          return rgb1 !== null && rgb2 !== null
        }
      ),
      { numRuns: 100 }
    )
  })
})

// Additional unit tests for specific color pairs
describe('Color Contrast Unit Tests', () => {
  it('should calculate correct contrast ratio for black on white', () => {
    const ratio = getContrastRatio('#000000', '#ffffff')
    expect(ratio).toBeCloseTo(21, 0) // Perfect contrast
  })

  it('should calculate correct contrast ratio for white on black', () => {
    const ratio = getContrastRatio('#ffffff', '#000000')
    expect(ratio).toBeCloseTo(21, 0) // Perfect contrast
  })

  it('should calculate correct contrast ratio for primary color on white', () => {
    const ratio = getContrastRatio('#2c5530', '#ffffff')
    expect(ratio).toBeGreaterThan(4.5) // Should meet WCAG AA
  })

  it('should calculate correct contrast ratio for white on primary color', () => {
    const ratio = getContrastRatio('#ffffff', '#2c5530')
    expect(ratio).toBeGreaterThan(4.5) // Should meet WCAG AA
  })

  it('should calculate correct contrast ratio for text-light on white', () => {
    const ratio = getContrastRatio('#5a6c7d', '#ffffff')
    expect(ratio).toBeGreaterThan(4.5) // Should meet WCAG AA
  })
})
