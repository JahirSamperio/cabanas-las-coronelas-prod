# Design Document

## Overview

Este diseño especifica la actualización completa de la aplicación web de Cabañas Las Coronelas para reemplazar los datos de ejemplo con información real del negocio. La solución mantiene la arquitectura React existente mientras actualiza el modelo de datos, mejora el SEO, optimiza el rendimiento, y añade nuevas vistas para políticas, instalaciones y menú de desayuno.

**Objetivos principales:**
- Actualizar datos de 4 cabañas ficticias a 14 cabañas reales con información precisa
- Implementar SEO optimizado para búsquedas locales ("Cabañas en Huasca")
- Añadir secciones informativas: instalaciones, políticas, reglamento, menú, pet-friendly
- Mantener y mejorar rendimiento con lazy loading y optimización de imágenes
- Preservar diseño UI/UX existente mientras se mejora la usabilidad

## Architecture

### Arquitectura Actual (Mantener)

```
cabanas-las-coronelas/
├── src/
│   ├── components/       # Componentes reutilizables (mantener)
│   ├── pages/           # Páginas principales (actualizar)
│   ├── data/            # Datos estáticos (ACTUALIZAR)
│   ├── utils/           # Utilidades (mejorar SEO)
│   └── hooks/           # Custom hooks (mantener)
├── public/              # Assets estáticos
└── docs/                # Documentación
```

### Cambios Arquitectónicos

1. **Modelo de Datos Expandido**: Actualizar `src/data/cabanas.js` con estructura más completa
2. **Nuevos Archivos de Datos**: 
   - `src/data/facilities.js` - Instalaciones y áreas comunes
   - `src/data/policies.js` - Políticas, reglamento, check-in/out
   - `src/data/menu.js` - Menú de desayuno
3. **Nuevas Páginas**:
   - `src/pages/Facilities.jsx` - Instalaciones y servicios
   - `src/pages/Policies.jsx` - Políticas y reglamento
4. **Mejoras SEO**: Expandir `src/utils/seo.js` con Schema Markup

## Components and Interfaces

### Componentes Existentes (Actualizar)

#### CabanaCard
```javascript
// Actualizar para mostrar múltiples tarifas
interface CabanaCardProps {
  cabana: {
    id: string
    name: string
    capacity: { min: number, max: number }
    priceFrom: number  // Precio mínimo
    images: string[]
    shortDescription: string
    featured?: boolean
  }
}
```

#### Header
```javascript
// Añadir nuevos enlaces de navegación
const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/cabanas', label: 'Cabañas' },
  { path: '/facilities', label: 'Instalaciones' },  // NUEVO
  { path: '/policies', label: 'Políticas' },        // NUEVO
  { path: '/contact', label: 'Contacto' }
]
```

### Nuevos Componentes

#### FacilityCard
```javascript
interface FacilityCardProps {
  icon: ReactNode
  title: string
  description: string
  details?: string[]
  cost?: string
}

// Ejemplo de uso
<FacilityCard
  icon={<FaSwimmingPool />}
  title="Alberca"
  description="Alberca de 1.20 a 1.70 m de profundidad"
  details={["Agua a temperatura ambiente", "Horario: 9 AM - 8 PM"]}
/>
```

#### PolicySection
```javascript
interface PolicySectionProps {
  title: string
  icon?: ReactNode
  rules: Array<{
    title: string
    description: string
    highlight?: boolean
  }>
}
```

#### PricingTable
```javascript
interface PricingTableProps {
  cabanaName: string
  pricing: Array<{
    capacity: number
    price: number
    includes: string[]
  }>
  notes?: string[]
}
```

#### MenuCard
```javascript
interface MenuCardProps {
  category: 'platillos' | 'frutas' | 'bebidas'
  items: Array<{
    name: string
    description?: string
    image?: string
  }>
}
```

## Data Models

### Cabaña Model (Actualizado)

```javascript
interface Cabana {
  id: string                    // kebab-case identifier
  name: string                  // Nombre oficial
  capacity: {
    min: number                 // Capacidad mínima
    max: number                 // Capacidad máxima
  }
  pricing: Array<{
    guests: number              // Número de personas
    pricePerNight: number       // Precio por noche
    includes: string[]          // Qué incluye (ej: "Desayuno")
  }>
  rooms: {
    total: number               // Total de recámaras
    distribution: Array<{
      type: string              // "King Size", "Matrimonial", "Individual"
      quantity: number
    }>
    bathrooms: number           // Número de baños completos
  }
  amenities: string[]           // Lista de amenidades
  services: string[]            // Servicios incluidos
  notes: string[]               // Notas importantes
  images: string[]              // URLs de imágenes
  shortDescription: string      // Descripción corta (SEO)
  description: string           // Descripción completa
  featured?: boolean            // Si es destacada
  location: string              // "Huasca, Hidalgo"
}
```

### Facilities Model (Nuevo)

```javascript
interface Facilities {
  recreational: Array<{
    name: string
    description: string
    specifications?: string
    icon: string
  }>
  generalServices: Array<{
    name: string
    included: boolean
    notes?: string
  }>
  additionalServices: Array<{
    name: string
    cost: number
    description?: string
  }>
}
```

### Policies Model (Nuevo)

```javascript
interface Policies {
  checkInOut: {
    normal: {
      checkIn: string           // "1:00 PM"
      checkOut: string          // "12:00 PM"
      earlyArrival: string
    }
    vacation: {
      checkIn: string           // "3:00 PM"
      checkOut: string          // "12:00 PM"
    }
  }
  breakfast: {
    schedule: string            // "9:00 AM - 11:00 AM"
    instructions: string[]
  }
  discounts: {
    weekday: boolean
    multiNight: boolean
    restrictions: string[]
  }
  rules: Array<{
    category: string            // "General", "Música", "Alberca", etc.
    items: Array<{
      rule: string
      penalty?: string
    }>
  }>
  petFriendly: {
    allowed: boolean
    costs: {
      small: number             // $150
      large: number             // $250
    }
    deposit: number             // $200
    depositConditions: string[]
    rules: string[]
  }
}
```

### Menu Model (Nuevo)

```javascript
interface BreakfastMenu {
  schedule: string
  mainDishes: Array<{
    name: string
    description: string
    accompaniments: string[]
    category?: string           // "Niños", "Adultos"
  }>
  sides: {
    fruits: string[]
    bread: string
    extras: string[]
  }
  beverages: string[]
  notes: string[]
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: All cabanas have complete required data
*For any* cabaña in the system, it must have all required fields populated: id, name, capacity (min/max), at least one pricing tier, room distribution, at least 3 amenities, and at least one image.
**Validates: Requirements 1.2, 1.3**

### Property 2: Pricing tiers are consistent
*For any* cabaña with multiple pricing tiers, the price must increase monotonically as the number of guests increases, and each tier's guest count must be within the cabaña's min/max capacity range.
**Validates: Requirements 1.5**

### Property 3: Menu items have descriptions
*For any* menu item displayed in the breakfast menu, it must have a non-empty description or accompaniments list to provide complete information.
**Validates: Requirements 4.2**

### Property 4: Pet-friendly rules are complete
*For any* pet policy display, it must include at least 3 key rules from the required set (no confinement, owner responsibility, bring own furniture, no use of cabin furniture).
**Validates: Requirements 6.4**

### Property 5: SEO meta tags contain location keywords
*For any* page in the system, the generated meta tags (title, description, keywords) must contain at least one location-based keyword from the set: ["Huasca", "Huasca", "Hidalgo", "Pueblo Mágico"].
**Validates: Requirements 7.1, 7.2**

### Property 6: Meta descriptions are within character limit
*For any* page in the system, the generated meta description must be non-empty and contain 160 characters or fewer.
**Validates: Requirements 7.3**

### Property 7: Semantic headings contain keywords
*For any* page content, the heading hierarchy (H1, H2, H3) must be properly structured and at least one heading must contain a location or service keyword.
**Validates: Requirements 7.5**

### Property 8: Images implement lazy loading
*For any* image component rendered in the application, it must use the LazyImage component or have loading="lazy" attribute to ensure performance optimization.
**Validates: Requirements 8.1**

### Property 9: Images use optimized formats
*For any* image in the system, it must use an optimized format (WebP, JPEG with quality ≤ 85%) or have appropriate srcset for responsive loading.
**Validates: Requirements 8.2**

### Property 10: Responsive design maintains readability
*For any* viewport width (mobile: 320-767px, tablet: 768-1023px, desktop: 1024px+), body text must maintain minimum font size of 14px and headings must scale appropriately.
**Validates: Requirements 8.3**

### Property 11: Filter results match filter criteria
*For any* combination of filters applied on the cabanas page (capacity, price range), all displayed results must satisfy ALL active filter conditions.
**Validates: Requirements 9.1**

### Property 12: Cabana cards display consistent information
*For any* cabaña card displayed in the catalog, it must show all required elements: image, name, capacity, price, and at least 2 key amenities in a consistent format.
**Validates: Requirements 9.2**

### Property 13: Cabana detail pages have required sections
*For any* cabaña detail page, it must contain all required sections: description, rooms/beds, amenities, pricing table, and policies, each with appropriate heading.
**Validates: Requirements 9.4**

### Property 14: Color contrast meets accessibility standards
*For any* text element on any page, the color contrast ratio between text and background must be at least 4.5:1 for normal text and 3:1 for large text (WCAG AA).
**Validates: Requirements 9.5**

### Property 15: Contact CTAs are present on all pages
*For any* page in the application, there must be at least one visible call-to-action for contact (WhatsApp, phone, or contact form) in the header or footer.
**Validates: Requirements 10.1**

### Property 16: WhatsApp links have correct format
*For any* WhatsApp contact link, it must use the correct format (wa.me or api.whatsapp.com) and include a pre-filled message parameter when on a cabin detail page.
**Validates: Requirements 10.2**

### Property 17: Cabin detail pages have prominent booking CTA
*For any* cabaña detail page, there must be at least one prominent call-to-action button for booking/inquiry (e.g., "Reservar Ahora", "Consultar Disponibilidad") visible above the fold or in a sticky position.
**Validates: Requirements 10.4**

## Error Handling

### Data Validation Errors

```javascript
// Validar datos de cabañas al cargar
const validateCabanaData = (cabana) => {
  const errors = []
  
  if (!cabana.id || !cabana.name) {
    errors.push('Missing required fields: id or name')
  }
  
  if (!cabana.capacity?.min || !cabana.capacity?.max) {
    errors.push('Invalid capacity configuration')
  }
  
  if (!cabana.pricing || cabana.pricing.length === 0) {
    errors.push('At least one pricing tier required')
  }
  
  if (!cabana.images || cabana.images.length === 0) {
    errors.push('At least one image required')
  }
  
  if (errors.length > 0) {
    console.error(`Validation errors for ${cabana.name}:`, errors)
    return false
  }
  
  return true
}
```

### Image Loading Errors

```javascript
// Fallback para imágenes que no cargan
const handleImageError = (event) => {
  event.target.src = '/images/placeholder-cabin.jpg'
  event.target.alt = 'Imagen no disponible'
}
```

### SEO Errors

```javascript
// Validar que meta tags se actualicen correctamente
const validateSEOUpdate = (pageData) => {
  try {
    updatePageSEO(pageData)
    
    // Verificar que se aplicaron
    const title = document.title
    const description = document.querySelector('meta[name="description"]')?.content
    
    if (!title || !description) {
      throw new Error('SEO tags not properly updated')
    }
  } catch (error) {
    console.error('SEO update failed:', error)
    // Usar valores por defecto
    updatePageSEO({})
  }
}
```

### Filter Errors

```javascript
// Manejar casos donde filtros no devuelven resultados
const handleEmptyResults = (filters) => {
  return {
    message: 'No se encontraron cabañas con los filtros seleccionados',
    suggestion: 'Intenta ajustar los filtros o limpiarlos',
    action: 'clearFilters'
  }
}
```

## Testing Strategy

### Unit Testing

**Framework**: Vitest (compatible con Vite)

**Áreas de cobertura**:

1. **Data Validation**
   - Validar estructura de cada cabaña
   - Verificar que pricing tiers sean consistentes
   - Validar campos requeridos

2. **Filter Logic**
   - Filtro por capacidad devuelve resultados correctos
   - Filtro por precio funciona con rangos
   - Combinación de filtros funciona correctamente
   - Ordenamiento funciona para cada opción

3. **SEO Utilities**
   - Meta tags se generan correctamente
   - Keywords incluyen términos de ubicación
   - Schema markup tiene estructura válida

4. **Component Rendering**
   - CabanaCard muestra información correcta
   - PricingTable renderiza todas las tarifas
   - PolicySection muestra reglas completas

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuración**: Mínimo 100 iteraciones por propiedad

**Propiedades a testear**:

1. **Property 1: All cabanas have complete required data**
   ```javascript
   // Tag: Feature: cabanas-data-update, Property 1: All cabanas have complete required data
   fc.assert(
     fc.property(fc.constantFrom(...cabanas), (cabana) => {
       return (
         cabana.id && cabana.id.length > 0 &&
         cabana.name && cabana.name.length > 0 &&
         cabana.capacity && cabana.capacity.min > 0 && cabana.capacity.max >= cabana.capacity.min &&
         cabana.pricing && cabana.pricing.length > 0 &&
         cabana.rooms && cabana.rooms.total > 0 &&
         cabana.amenities && cabana.amenities.length >= 3 &&
         cabana.images && cabana.images.length > 0
       )
     }),
     { numRuns: 100 }
   )
   ```

2. **Property 2: Pricing tiers are consistent**
   ```javascript
   // Tag: Feature: cabanas-data-update, Property 2: Pricing tiers are consistent
   fc.assert(
     fc.property(fc.constantFrom(...cabanas), (cabana) => {
       const pricing = cabana.pricing.sort((a, b) => a.guests - b.guests)
       
       for (let i = 0; i < pricing.length - 1; i++) {
         // Precio debe aumentar con más huéspedes
         if (pricing[i].pricePerNight >= pricing[i + 1].pricePerNight) {
           return false
         }
         // Huéspedes deben estar en rango de capacidad
         if (pricing[i].guests < cabana.capacity.min || 
             pricing[i].guests > cabana.capacity.max) {
           return false
         }
       }
       return true
     }),
     { numRuns: 100 }
   )
   ```

3. **Property 3: SEO meta tags contain location keywords**
   ```javascript
   // Tag: Feature: cabanas-data-update, Property 3: SEO meta tags contain location keywords
   fc.assert(
     fc.property(
       fc.record({
         title: fc.string(),
         description: fc.string(),
         keywords: fc.string()
       }),
       (pageData) => {
         updatePageSEO(pageData)
         
         const title = document.title
         const description = document.querySelector('meta[name="description"]')?.content || ''
         const keywords = document.querySelector('meta[name="keywords"]')?.content || ''
         
         const locationKeywords = ['Huasca', 'Huasca', 'Hidalgo', 'Pueblo Mágico']
         const allText = `${title} ${description} ${keywords}`.toLowerCase()
         
         return locationKeywords.some(keyword => 
           allText.includes(keyword.toLowerCase())
         )
       }
     ),
     { numRuns: 100 }
   )
   ```

4. **Property 6: Filter results match filter criteria**
   ```javascript
   // Tag: Feature: cabanas-data-update, Property 6: Filter results match filter criteria
   fc.assert(
     fc.property(
       fc.record({
         capacity: fc.option(fc.integer({ min: 2, max: 14 })),
         minPrice: fc.option(fc.integer({ min: 1000, max: 6000 })),
         maxPrice: fc.option(fc.integer({ min: 1000, max: 6000 }))
       }),
       (filters) => {
         const results = filterCabanas(cabanas, filters)
         
         return results.every(cabana => {
           // Verificar capacidad
           if (filters.capacity && cabana.capacity.max < filters.capacity) {
             return false
           }
           
           // Verificar precio
           const minPrice = cabana.pricing[0].pricePerNight
           if (filters.minPrice && minPrice < filters.minPrice) {
             return false
           }
           if (filters.maxPrice && minPrice > filters.maxPrice) {
             return false
           }
           
           return true
         })
       }
     ),
     { numRuns: 100 }
   )
   ```

### Integration Testing

1. **Navigation Flow**
   - Usuario puede navegar de Home → Cabañas → Detalle
   - Filtros actualizan URL y se pueden compartir
   - Botones de contacto abren aplicaciones correctas

2. **SEO Integration**
   - Cada página actualiza meta tags correctamente
   - Schema markup se renderiza en HTML
   - Open Graph tags funcionan para compartir en redes

3. **Responsive Behavior**
   - Layout se adapta en breakpoints
   - Imágenes cargan en tamaño apropiado
   - Navegación móvil funciona correctamente

### Performance Testing

1. **Lighthouse Metrics**
   - Performance score > 90
   - First Contentful Paint < 2s
   - Largest Contentful Paint < 2.5s
   - Cumulative Layout Shift < 0.1

2. **Image Optimization**
   - Todas las imágenes usan lazy loading
   - Imágenes tienen dimensiones apropiadas
   - Formato WebP con fallback

## Implementation Notes

### SEO Implementation Details

#### Meta Tags Structure
```javascript
const seoConfig = {
  home: {
    title: 'Cabañas Las Coronelas - Hospedaje en Huasca de Ocampo, Hidalgo',
    description: 'Renta de cabañas en Huasca, Hidalgo. 14 cabañas con alberca, chimenea, WiFi. Desde $1,300/noche. ¡Reserva ahora!',
    keywords: 'cabañas Huasca, cabañas Huasca, cabañas Hidalgo, hospedaje Huasca, alojamiento Hidalgo, cabañas con alberca'
  },
  cabanas: {
    title: 'Nuestras Cabañas - 14 Opciones en Huasca, Hidalgo',
    description: 'Explora 14 cabañas desde 2 hasta 14 personas. Precios desde $1,300. Alberca, chimenea, WiFi incluido.',
    keywords: 'catálogo cabañas, precios cabañas Hidalgo, cabañas familiares, cabañas parejas'
  }
}
```

#### Schema Markup
```javascript
const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Cabañas Las Coronelas",
  "image": [/* URLs de imágenes */],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Huasca",
    "addressRegion": "Hidalgo",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.6464",
    "longitude": "-98.6547"
  },
  "priceRange": "$1,300 - $6,700",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Alberca" },
    { "@type": "LocationFeatureSpecification", "name": "WiFi gratuito" },
    { "@type": "LocationFeatureSpecification", "name": "Estacionamiento gratuito" }
  ],
  "checkinTime": "13:00",
  "checkoutTime": "12:00"
}
```

### Image Optimization Strategy

1. **Lazy Loading**: Ya implementado con componente LazyImage
2. **Responsive Images**: Usar srcset para diferentes tamaños
3. **Format**: Priorizar WebP con fallback a JPG
4. **Compression**: Optimizar imágenes a 80% calidad
5. **Dimensions**: Definir width/height para evitar layout shift

### Accessibility Considerations

1. **Semantic HTML**: Usar elementos apropiados (nav, main, article, section)
2. **ARIA Labels**: Ya implementados en componentes existentes
3. **Keyboard Navigation**: Asegurar todos los elementos interactivos sean accesibles
4. **Color Contrast**: Mantener ratio mínimo 4.5:1 (WCAG AA)
5. **Focus Indicators**: Visible en todos los elementos interactivos

### Mobile-First Approach

```css
/* Base styles para móvil */
.cabana-card {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .cabana-card {
    width: calc(50% - 1rem);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .cabana-card {
    width: calc(33.333% - 1rem);
  }
}
```

### Data Migration Strategy

1. **Backup**: Guardar datos actuales en `src/data/cabanas.backup.js`
2. **Gradual Update**: Actualizar una cabaña a la vez para verificar
3. **Validation**: Ejecutar tests después de cada actualización
4. **Rollback Plan**: Mantener backup disponible para revertir si es necesario
