# Image Optimization Guide

This document outlines the image optimization strategy for Cabañas Las Coronelas website.

## Overview

All images in the application are optimized for performance using:
- Lazy loading with Intersection Observer
- Responsive images with srcset
- Optimized formats (WebP with fallback)
- Build-time optimization

## LazyImage Component

The `LazyImage` component is used throughout the application to ensure optimal image loading performance.

### Basic Usage

```jsx
import LazyImage from '../components/LazyImage'

<LazyImage
  src="/images/cabin.jpg"
  alt="Beautiful cabin in the woods"
  className="cabin-image"
/>
```

### Responsive Images with srcset

For responsive images that adapt to different screen sizes:

```jsx
<LazyImage
  src="/images/cabin-800.jpg"
  srcSet="/images/cabin-400.jpg 400w, /images/cabin-800.jpg 800w, /images/cabin-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Beautiful cabin"
/>
```

## Image Format Recommendations

### Preferred Format: WebP with JPEG Fallback

WebP provides superior compression while maintaining quality. Always provide a JPEG fallback for older browsers.

**Example structure:**
```
/images/
  cabin-name.webp  (primary)
  cabin-name.jpg   (fallback)
```

### Format Guidelines

1. **WebP**: Use for all new images
   - 25-35% smaller than JPEG at equivalent quality
   - Supported by all modern browsers
   - Quality setting: 80-85%

2. **JPEG**: Use as fallback
   - Quality setting: 80-85%
   - Progressive encoding enabled
   - Optimized with tools like ImageOptim or TinyJPG

3. **PNG**: Only for images requiring transparency
   - Use PNG-8 when possible (256 colors)
   - Optimize with tools like OptiPNG

### Image Dimensions

Provide images at these standard widths:
- **Mobile**: 400px, 600px
- **Tablet**: 800px, 1000px
- **Desktop**: 1200px, 1600px

## Build Configuration

The Vite build process automatically:
- Minifies CSS and JavaScript
- Optimizes asset file names with content hashing
- Inlines small assets (<4KB) as base64
- Separates vendor chunks for better caching

### Configuration Details

See `vite.config.js` for:
- Asset inline limit: 4KB
- Image asset naming: `assets/images/[name]-[hash][extname]`
- CSS and JS minification: enabled
- Vendor chunk splitting: React, React DOM, React Router

## Performance Targets

Based on Requirements 8.1-8.4:

- ✅ All images use lazy loading
- ✅ Images use optimized formats (WebP with fallback)
- ✅ Responsive design maintains readability
- ✅ Build minifies CSS and JavaScript

### Lighthouse Targets

- Performance: > 90
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Image Optimization Workflow

### For New Images

1. **Resize** to appropriate dimensions (see above)
2. **Convert** to WebP format
3. **Create** JPEG fallback
4. **Optimize** both formats
5. **Test** with LazyImage component
6. **Verify** loading performance

### Tools Recommended

- **Squoosh**: https://squoosh.app/ (online, free)
- **ImageOptim**: https://imageoptim.com/ (Mac)
- **TinyPNG**: https://tinypng.com/ (online, free)
- **Sharp**: https://sharp.pixelplumbing.com/ (Node.js library)

## Testing

Property-based tests verify:
- LazyImage always renders with `loading="lazy"`
- All cabin images use LazyImage component
- LazyImage handles various sources correctly

Run tests:
```bash
npm test -- imageOptimization.test.jsx
```

## Browser Support

- **Lazy Loading**: All modern browsers (Chrome 76+, Firefox 75+, Safari 15.4+)
- **WebP**: All modern browsers (Chrome 23+, Firefox 65+, Safari 14+)
- **srcset**: All modern browsers (IE 11+ with polyfill)

## Accessibility

All images must include:
- Descriptive `alt` text
- Appropriate ARIA labels when needed
- Proper contrast ratios for text overlays

## Future Improvements

Potential enhancements:
- Implement blur-up placeholder technique
- Add AVIF format support (next-gen format)
- Implement responsive image CDN
- Add automatic image optimization pipeline
- Consider using `<picture>` element for art direction
