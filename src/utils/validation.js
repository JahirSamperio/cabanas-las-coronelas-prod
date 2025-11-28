export const validateCabana = (cabana) => {
  if (!cabana || typeof cabana !== 'object') {
    return null
  }

  return {
    id: cabana.id || 'unknown',
    name: cabana.name || 'Cabaña sin nombre',
    capacity: cabana.capacity || { min: 1, max: 1 },
    pricing: Array.isArray(cabana.pricing) && cabana.pricing.length > 0
      ? cabana.pricing
      : [{ guests: 1, pricePerNight: 0, includes: [] }],
    rooms: cabana.rooms || { total: 1, distribution: [], bathrooms: 1 },
    shortDescription: cabana.shortDescription || 'Descripción no disponible',
    description: cabana.description || 'Descripción completa no disponible',
    images: Array.isArray(cabana.images) && cabana.images.length > 0 
      ? cabana.images 
      : ['/placeholder-cabin.jpg'],
    amenities: Array.isArray(cabana.amenities) ? cabana.amenities : [],
    services: Array.isArray(cabana.services) ? cabana.services : [],
    notes: Array.isArray(cabana.notes) ? cabana.notes : [],
    location: cabana.location || 'Ubicación no disponible',
    featured: cabana.featured || false
  }
}

export const validateCabanas = (cabanas) => {
  if (!Array.isArray(cabanas)) {
    return []
  }

  return cabanas
    .map(validateCabana)
    .filter(cabana => cabana !== null)
}
