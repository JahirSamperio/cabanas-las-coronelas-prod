/**
 * Servicios adicionales disponibles en Cabañas Las Coronelas
 */
export const additionalServices = {
  grilling: {
    firewood: {
      name: 'Carga de leña',
      price: 200,
      currency: 'MXN',
      description: 'Leña para chimenea y asadores'
    },
    mobileGrills: {
      name: 'Asadores móviles',
      price: 100,
      currency: 'MXN',
      description: 'Asadores portátiles para uso en áreas designadas'
    },
    fixedGrills: {
      name: 'Asadores fijos',
      price: 0,
      currency: 'MXN',
      description: 'Uso gratuito de asadores instalados en áreas comunes'
    }
  },
  earlyAccess: {
    name: 'Acceso temprano a áreas comunes',
    price: 0,
    currency: 'MXN',
    description: 'Uso de alberca, asadores y áreas comunes antes del check-in',
    note: 'Disponible llegando antes de la 1:00 PM en fechas normales'
  }
}

export const serviceCategories = {
  grilling: 'Asadores y Leña',
  earlyAccess: 'Acceso Temprano'
}