import { siteConfig } from '../data'

export const updatePageSEO = (pageData = {}) => {
  const title = pageData.title 
    ? `${pageData.title} - ${siteConfig.name}`
    : siteConfig.name

  const description = pageData.description || siteConfig.description
  const keywords = pageData.keywords 
    ? `${siteConfig.keywords}, ${pageData.keywords}`
    : siteConfig.keywords

  // Update title
  document.title = title

  // Update meta tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', keywords)
  
  // Update Open Graph
  updateMetaTag('og:title', title, 'property')
  updateMetaTag('og:description', description, 'property')
  updateMetaTag('og:url', `${siteConfig.url}${pageData.path || ''}`, 'property')
  
  // Update Twitter Cards
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
}

const updateMetaTag = (name, content, attribute = 'name') => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, name)
    document.head.appendChild(meta)
  }
  
  meta.setAttribute('content', content)
}

export const generateLodgingSchema = (options = {}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": options.name || siteConfig.name,
    "image": options.images || [],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": options.streetAddress || "Carretera Huasca (atrás de la Secundaria)",
      "addressLocality": options.locality || "Huasca de Ocampo",
      "addressRegion": options.region || "Hidalgo",
      "postalCode": "43500",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": options.latitude || "20.1833",
      "longitude": options.longitude || "-98.5833"
    },
    "priceRange": options.priceRange || "$1,300 - $6,700 MXN",
    "starRating": {
      "@type": "Rating",
      "ratingValue": options.rating || "4.5"
    },
    "amenityFeature": options.amenities || [
      { "@type": "LocationFeatureSpecification", "name": "Alberca" },
      { "@type": "LocationFeatureSpecification", "name": "Chapoteadero" },
      { "@type": "LocationFeatureSpecification", "name": "WiFi gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "Estacionamiento gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "Chimenea" },
      { "@type": "LocationFeatureSpecification", "name": "TV con Sky" },
      { "@type": "LocationFeatureSpecification", "name": "Desayuno incluido" },
      { "@type": "LocationFeatureSpecification", "name": "Pet Friendly" },
      { "@type": "LocationFeatureSpecification", "name": "Campo de fútbol" },
      { "@type": "LocationFeatureSpecification", "name": "Juegos infantiles" },
      { "@type": "LocationFeatureSpecification", "name": "Asadores" },
      { "@type": "LocationFeatureSpecification", "name": "Jardín de 1 hectárea" }
    ],
    "checkinTime": options.checkinTime || "13:00",
    "checkoutTime": options.checkoutTime || "12:00",
    "petsAllowed": true,
    "smokingAllowed": false
  }

  return schema
}

export const injectSchemaMarkup = (schema) => {
  // Remove existing schema if present
  const existingSchema = document.querySelector('script[type="application/ld+json"]')
  if (existingSchema) {
    existingSchema.remove()
  }

  // Create and inject new schema
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}