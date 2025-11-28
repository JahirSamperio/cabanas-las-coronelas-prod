export const facilities = {
  recreational: [
    {
      name: 'Alberca',
      description: 'Alberca de 1.20 a 1.70 m de profundidad con agua a temperatura ambiente',
      specifications: 'Profundidad: 1.20m - 1.70m',
      icon: 'FaSwimmingPool'
    },
    {
      name: 'Chapoteadero',
      description: 'Área de chapoteadero para niños con profundidad de 50 a 90 cm',
      specifications: 'Profundidad: 50cm - 90cm',
      icon: 'FaChild'
    },
    {
      name: 'Juegos Infantiles',
      description: 'Área de juegos para niños con columpios, resbaladillas y más',
      specifications: 'Área segura y supervisada',
      icon: 'FaGamepad'
    },
    {
      name: 'Campo de Fútbol',
      description: 'Campo de fútbol iluminado para partidos nocturnos',
      specifications: 'Con iluminación nocturna',
      icon: 'FaFutbol'
    },
    {
      name: 'Jardín',
      description: 'Amplio jardín de 1 hectárea rodeado de naturaleza',
      specifications: 'Extensión: 1 hectárea',
      icon: 'FaTree'
    },
    {
      name: 'Asadores',
      description: 'Asadores disponibles para preparar tus alimentos al aire libre',
      specifications: 'Disponibles en áreas comunes',
      icon: 'FaFire'
    },
    {
      name: 'Fogateros',
      description: 'Espacios para fogatas y reuniones nocturnas',
      specifications: 'Uso supervisado',
      icon: 'FaCampground'
    },
    {
      name: 'Palapas',
      description: 'Palapas para reuniones y eventos al aire libre',
      specifications: 'Capacidad variable',
      icon: 'FaUmbrella'
    },
    {
      name: 'Museo de Antigüedades',
      description: 'Museo con colección de antigüedades y objetos históricos',
      specifications: 'Visitas guiadas disponibles',
      icon: 'FaLandmark'
    }
  ],
  generalServices: [
    {
      name: 'Sky',
      included: true,
      notes: 'Televisión por satélite en todas las cabañas'
    },
    {
      name: 'WiFi',
      included: true,
      notes: 'Internet inalámbrico gratuito en todo el complejo'
    },
    {
      name: 'Estacionamiento',
      included: true,
      notes: 'Estacionamiento gratuito y seguro'
    },
    {
      name: 'Desayuno',
      included: true,
      notes: 'Incluido en fines de semana y días festivos (9:00 AM - 11:00 AM)'
    }
  ],
  additionalServices: [
    {
      name: 'Leña',
      cost: 200,
      description: 'Leña para chimenea o fogata'
    },
    {
      name: 'Asador Móvil',
      cost: 100,
      description: 'Asador portátil para uso en tu cabaña'
    },
    {
      name: 'Asador Fijo',
      cost: 0,
      description: 'Uso de asadores fijos en áreas comunes (sin costo)'
    },
    {
      name: 'Palapa Gigante',
      cost: null,
      description: 'Palapa con capacidad para 50 personas (costo extra, consultar disponibilidad)'
    }
  ]
}
