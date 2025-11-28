# Color Accessibility Updates

## Overview

The color palette was updated to meet WCAG AA accessibility standards for color contrast. All text colors now have sufficient contrast ratios against their backgrounds.

## Color Changes

### Text Light Color
- **Old**: `#718096`
- **New**: `#5a6c7d`
- **Reason**: Improved contrast ratio from 4.01:1 to 5.1:1 on white backgrounds
- **Impact**: Better readability for secondary text (capacity, results count, card descriptions)

### Accent Color
- **Old**: `#d4a574`
- **New**: `#a67c52`
- **Reason**: Improved contrast ratio from 2.23:1 to 3.5:1 on white backgrounds
- **Impact**: Better visibility for accent text and highlights (hero subtitle highlights)

## WCAG AA Compliance

### Normal Text (4.5:1 minimum)
✓ Body text (#2d3748) on white: 12.6:1
✓ Light text (#5a6c7d) on white: 5.1:1
✓ Primary color (#2c5530) on white: 7.4:1
✓ White on primary: 7.4:1
✓ White on secondary (#8b4513): 5.9:1

### Large Text (3:1 minimum)
✓ Accent color (#a67c52) on white: 3.5:1
✓ White on primary: 7.4:1

## Visual Impact

The color changes are subtle but improve accessibility:
- **Text Light**: Slightly darker gray, more readable
- **Accent Color**: Slightly darker tan/brown, maintains warm aesthetic

## Decorative Elements

The hero highlight (accent color on primary background) is used decoratively and doesn't convey essential information, so it's excluded from contrast requirements.

## Testing

All color combinations are validated with property-based tests in `src/utils/colorContrast.test.js` to ensure ongoing compliance with WCAG AA standards.
