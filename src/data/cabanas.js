export const cabanas = [
  {
    id: 'quinta-valeria',
    name: 'Quinta Valeria',
    capacity: { min: 12, max: 14 },
    pricing: [
      { guests: 12, pricePerNight: 5700, includes: ['Desayuno incluido'] },
      { guests: 14, pricePerNight: 6700, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 4, 
      distribution: [
        { type: 'Matrimonial', quantity: 4 },
        { type: 'King Size', quantity: 1 },
        { type: 'Sofá cama matrimonial', quantity: 1 }
      ], 
      bathrooms: 2 
    },
    amenities: [
      'Sala',
      'Comedor',
      'Cocina con estufa y refrigerador',
      'Horno de microondas',
      'Cantina',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: ['No cuenta con utensilios de cocina (trastes)'],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-valeria/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-valeria/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-valeria/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-valeria/interior3.webp'
    ],
    shortDescription: 'Quinta para 12-14 personas con 4 recámaras, cocina equipada y cantina',
    description: 'Quinta Valeria es ideal para grupos grandes. Cuenta con 4 recámaras (2 con 2 camas matrimoniales c/u, 1 con cama King size y sofá cama matrimonial), cocina con estufa y refrigerador, cantina, y 2 baños completos.',
    featured: true,
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'quinta-adelita',
    name: 'Quinta Adelita',
    capacity: { min: 10, max: 12 },
    pricing: [
      { guests: 10, pricePerNight: 5000, includes: ['Desayuno incluido'] },
      { guests: 12, pricePerNight: 5700, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 3, 
      distribution: [
        { type: 'Matrimonial', quantity: 4 },
        { type: 'King Size', quantity: 1 },
        { type: 'Sofá cama matrimonial', quantity: 1 }
      ], 
      bathrooms: 2 
    },
    amenities: [
      'Sala con sofá cama matrimonial',
      'Comedor',
      'Cocina con estufa y refrigerador',
      'Horno de microondas',
      'Cantina',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: ['No cuenta con utensilios de cocina (trastes)'],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-adelita/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-adelita/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-adelita/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/quinta-adelita/interior3.webp'
    ],
    shortDescription: 'Quinta para 10-12 personas con 3 recámaras, cocina equipada y cantina',
    description: 'Quinta Adelita ofrece amplitud para grupos grandes. Con 3 recámaras (2 con 2 camas matrimoniales, 1 con cama King size), sala con sofá cama matrimonial, cocina equipada, cantina y 2 baños completos.',
    featured: true,
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'san-pedro',
    name: 'San Pedro',
    capacity: { min: 8, max: 8 },
    pricing: [
      { guests: 8, pricePerNight: 4000, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 2, 
      distribution: [
        { type: 'Matrimonial', quantity: 4 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Sala',
      'Comedor',
      'Refrigerador',
      'Horno de microondas',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/san-pedro/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-pedro/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-pedro/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-pedro/interior3.webp'
    ],
    shortDescription: 'Cabaña para 8 personas con 2 recámaras con 2 camas matrimoniales cada una',
    description: 'San Pedro es ideal para grupos de 8 personas. Cuenta con 2 recámaras con 2 camas matrimoniales cada una, sala, comedor, refrigerador y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    capacity: { min: 6, max: 8 },
    pricing: [
      { guests: 6, pricePerNight: 3200, includes: ['Desayuno incluido'] },
      { guests: 8, pricePerNight: 3800, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 2, 
      distribution: [
        { type: 'King Size', quantity: 1 },
        { type: 'Matrimonial', quantity: 2 },
        { type: 'Sofá cama', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Sala con sofá cama',
      'Comedor',
      'Refrigerador',
      'Horno de microondas',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: ['No cuenta con utensilios de cocina (trastes)'],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/san-francisco/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-francisco/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-francisco/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-francisco/interior3.webp'
    ],
    shortDescription: 'Cabaña para 6-8 personas con 2 recámaras y sofá cama',
    description: 'San Francisco es perfecta para familias. Con 2 recámaras (1 con cama King Size, 1 con 2 camas matrimoniales), sala con sofá cama, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'la-rielera',
    name: 'La Rielera',
    capacity: { min: 6, max: 8 },
    pricing: [
      { guests: 6, pricePerNight: 3100, includes: ['Desayuno incluido'] },
      { guests: 8, pricePerNight: 3700, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 2, 
      distribution: [
        { type: 'Matrimonial', quantity: 3 },
        { type: 'Sofá cama', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Sala con sofá cama',
      'Comedor',
      'Refrigerador',
      'Horno de microondas',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/la-rielera/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/la-rielera/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/la-rielera/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/la-rielera/interior3.webp'
    ],
    shortDescription: 'Cabaña para 6-8 personas con 2 recámaras y sofá cama',
    description: 'La Rielera ofrece comodidad para familias. Con 2 recámaras (1 con 2 camas matrimoniales, 1 con 1 cama matrimonial), sala con sofá cama, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'el-jacal-del-meno',
    name: 'El Jacal del Meño',
    capacity: { min: 6, max: 8 },
    pricing: [
      { guests: 6, pricePerNight: 3200, includes: ['Desayuno incluido'] },
      { guests: 8, pricePerNight: 3800, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 2, 
      distribution: [
        { type: 'King Size', quantity: 1 },
        { type: 'Matrimonial', quantity: 2 },
        { type: 'Individual', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Sala',
      'Comedor',
      'Refrigerador',
      'Horno de microondas',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/cabana-jacal-del-meño/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/cabana-jacal-del-meño/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/cabana-jacal-del-meño/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/cabana-jacal-del-meño/interior3.webp'
    ],
    shortDescription: 'Cabaña para 6-8 personas con 2 recámaras y múltiples camas',
    description: 'El Jacal del Meño es ideal para familias. Con 2 recámaras (1 con cama King Size, 1 con 2 camas matrimoniales y 1 cama individual), y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'los-adobes',
    name: 'Los Adobes',
    capacity: { min: 4, max: 6 },
    pricing: [
      { guests: 4, pricePerNight: 2400, includes: ['Desayuno incluido'] },
      { guests: 6, pricePerNight: 3000, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'King Size', quantity: 2 },
        { type: 'Sofá cama matrimonial', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Sofá cama matrimonial',
      'Mesa de centro',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/los-adobes/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/los-adobes/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/los-adobes/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/los-adobes/interior3.webp'
    ],
    shortDescription: 'Cabaña para 4-6 personas con 1 recámara con 2 camas King Size',
    description: 'Los Adobes ofrece comodidad con 1 recámara con 2 camas King Size, sofá cama matrimonial en sala, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'paraiso',
    name: 'Paraíso',
    capacity: { min: 4, max: 4 },
    pricing: [
      { guests: 4, pricePerNight: 2400, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 2, 
      distribution: [
        { type: 'King Size', quantity: 1 },
        { type: 'Matrimonial', quantity: 1 }
      ], 
      bathrooms: 2 
    },
    amenities: [
      'Pasillo intermedio entre habitaciones',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/paraiso/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/paraiso/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/paraiso/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/paraiso/interior3.webp'
    ],
    shortDescription: 'Cabaña para 4 personas con 2 recámaras y 2 baños',
    description: 'Paraíso ofrece privacidad con 2 recámaras (1 con cama King Size, 1 con cama matrimonial), pasillo intermedio entre habitaciones, y 2 baños completos.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'sofia',
    name: 'Sofía',
    capacity: { min: 3, max: 3 },
    pricing: [
      { guests: 3, pricePerNight: 1900, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'Matrimonial', quantity: 1 },
        { type: 'Individual', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Portal con mecedoras y mesa pequeña',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/sofia/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/sofia/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/sofia/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/sofia/interior3.webp'
    ],
    shortDescription: 'Cabaña para 3 personas con 1 recámara',
    description: 'Sofía es acogedora con 1 recámara con 1 cama matrimonial y 1 cama individual, portal con mecedoras, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'la-paloma',
    name: 'La Paloma',
    capacity: { min: 2, max: 2 },
    pricing: [
      { guests: 2, pricePerNight: 1300, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'Matrimonial', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Mesa de centro',
      'Tocador',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/la-paloma/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/la-paloma/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/la-paloma/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/la-paloma/interior3.webp'
    ],
    shortDescription: 'Cabaña para 2 personas con 1 recámara matrimonial',
    description: 'La Paloma es perfecta para parejas. Con 1 recámara con cama matrimonial, mesa de centro, tocador, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'rio-grande',
    name: 'Río Grande',
    capacity: { min: 2, max: 2 },
    pricing: [
      { guests: 2, pricePerNight: 1300, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'Matrimonial', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Mesa de centro',
      'Tocador',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/rio-grande/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/rio-grande/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/rio-grande/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/rio-grande/interior3.webp'
    ],
    shortDescription: 'Cabaña para 2 personas con 1 recámara matrimonial',
    description: 'Río Grande es ideal para parejas. Con 1 recámara con cama matrimonial, mesa de centro, tocador, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'leticia',
    name: 'Leticia',
    capacity: { min: 2, max: 2 },
    pricing: [
      { guests: 2, pricePerNight: 1300, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'Matrimonial', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Recibidor',
      'Mesa de centro',
      'Tocador',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/leticia/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/leticia/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/leticia/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/leticia/interior3.webp'
    ],
    shortDescription: 'Cabaña para 2 personas con recibidor y 1 recámara matrimonial',
    description: 'Leticia ofrece comodidad para parejas. Con recibidor, 1 recámara con cama matrimonial, mesa de centro, tocador, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'san-miguel',
    name: 'San Miguel',
    capacity: { min: 2, max: 2 },
    pricing: [
      { guests: 2, pricePerNight: 1300, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'King Size', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Recibidor',
      'Mesa de centro',
      'Tocador',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/san-miguel/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-miguel/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-miguel/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/san-miguel/interior3.webp'
    ],
    shortDescription: 'Cabaña para 2 personas con recibidor y 1 recámara King Size',
    description: 'San Miguel es perfecta para parejas. Con recibidor, 1 recámara con cama King Size, mesa de centro, tocador, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  },
  {
    id: 'venancio',
    name: 'Venancio',
    capacity: { min: 2, max: 2 },
    pricing: [
      { guests: 2, pricePerNight: 1300, includes: ['Desayuno incluido'] }
    ],
    rooms: { 
      total: 1, 
      distribution: [
        { type: 'Matrimonial', quantity: 1 }
      ], 
      bathrooms: 1 
    },
    amenities: [
      'Recibidor',
      'Mesa de centro',
      'Tocador',
      'Chimenea (leña no incluida)',
      'TV con Sky',
      'WiFi',
      'Baño con agua caliente',
      'Estacionamiento sin costo'
    ],
    services: ['Desayuno incluido', 'Acceso a alberca', 'Acceso a áreas comunes'],
    notes: [],
    images: [
      'https://images.cabanaslascoronelas.com/images/cabanas/venancio/vista-exterior.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/venancio/interior1.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/venancio/interior2.webp',
      'https://images.cabanaslascoronelas.com/images/cabanas/venancio/interior3.webp'
    ],
    shortDescription: 'Cabaña para 2 personas con recibidor y 1 recámara matrimonial',
    description: 'Venancio es ideal para parejas. Con recibidor, 1 recámara con cama matrimonial, mesa de centro, tocador, y 1 baño completo.',
    location: 'Huasca de Ocampo, Hidalgo'
  }
]
