# Image Optimization Guide

## Current Status
- All images converted to WebP format ✅
- Width/Height attributes added to prevent layout shift ✅
- Lazy loading implemented for below-fold images ✅

## Quick Wins for Further Optimization

### 1. WebP with Fallback
To add WebP support with fallback to JPEG:

```jsx
<picture>
  <source srcSet={trek.image?.replace('.jpg', '.webp')} type="image/webp" />
  <img 
    src={trek.image} 
    alt={trek.name}
    width="400"
    height="160"
    loading="lazy"
  />
</picture>
```

### 2. Responsive Images with srcset
Add different sizes for different viewports:

```jsx
<img
  src={trek.image}
  srcSet={`
    ${trek.image} 1x,
    ${trek.image?.replace('.jpg', '@2x.jpg')} 2x
  `}
  alt={trek.name}
  width="400"
  height="160"
  loading="lazy"
/>
```

### 3. Image Compression Tools
- **TinyPNG/TinyJPG**: Online compression (https://tinypng.com)
- **ImageOptim**: Desktop tool for Mac
- **FFmpeg**: CLI tool for batch conversion to WebP

### 4. Batch Convert Current Images
```bash
# Convert all JPG to WebP (requires ffmpeg)
for img in public/images/treks/**/*.jpg; do
  ffmpeg -i "$img" "${img%.jpg}.webp"
done
```

### 5. Size Targets
- Trek card images: 40-60 KB (currently optimized)
- Hero images: 80-120 KB (currently optimized)
- Gallery images: 100-200 KB (currently optimized)

## Automated Optimization with Vite Plugins
Add to package.json and vite.config:

```bash
npm install --save-dev @vitejs/plugin-image-compress
```

Then update vite.config.ts to use the plugin for automatic compression on build.

## Cache Headers Configuration
✅ vercel.json created - for Vercel deployment
✅ netlify.toml created - for Netlify deployment

### Cache Strategy:
- **Static assets** (JS, CSS, images): 1 year (max-age=31536000)
- **HTML**: 1 hour (max-age=3600) - always revalidated
- **Images**: 1 year if hashed, 1 hour if dynamic

## Monitoring
Use PageSpeed Insights regularly to track:
- LCP (Largest Contentful Paint) - target: <2.5s
- CLS (Cumulative Layout Shift) - target: <0.1
- FID (First Input Delay) - target: <100ms
