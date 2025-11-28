/**
 * @typedef {Object} MainDish
 * @property {string} name - Nombre del platillo
 * @property {string} description - Descripción del platillo
 * @property {string[]} accompaniments - Acompañamientos incluidos
 * @property {string} [category] - Categoría del platillo (opcional)
 */

/**
 * @typedef {Object} Sides
 * @property {string[]} fruits - Frutas disponibles
 * @property {string} bread - Pan incluido
 * @property {string[]} extras - Extras adicionales
 */

/**
 * @typedef {Object} BreakfastMenu
 * @property {string} schedule - Horario del desayuno (formato "HH:MM AM - HH:MM AM")
 * @property {MainDish[]} mainDishes - Platillos principales
 * @property {Sides} sides - Acompañamientos y extras
 * @property {string[]} beverages - Bebidas disponibles
 * @property {string[]} notes - Notas adicionales
 */

/** @type {BreakfastMenu} */
export const breakfastMenu = {
  schedule: '9:00 AM - 11:00 AM',
  mainDishes: [
    {
      name: 'Huevos al Gusto',
      description: 'Huevos preparados a tu elección',
      accompaniments: [
        'Frijoles refritos',
        'Chilaquiles',
        'Salsa roja o verde',
        'Tortillas'
      ]
    },
    {
      name: 'Chilaquiles Rojos o Verdes',
      description: 'Tradicionales chilaquiles con salsa de tu elección',
      accompaniments: [
        'Crema',
        'Queso fresco',
        'Cebolla',
        'Frijoles refritos'
      ]
    },
    {
      name: 'Molletes',
      description: 'Pan bolillo con frijoles y queso gratinado',
      accompaniments: [
        'Frijoles refritos',
        'Queso gratinado',
        'Pico de gallo',
        'Salsa al gusto'
      ]
    },
    {
      name: 'Hotcakes',
      description: 'Esponjosos hotcakes estilo americano',
      accompaniments: [
        'Miel de maple',
        'Mantequilla',
        'Fruta fresca',
        'Azúcar glass'
      ],
      category: 'Niños'
    }
  ],
  sides: {
    fruits: ['Fruta de temporada con granola'],
    bread: 'Pan de pulque',
    extras: ['Mermelada', 'Mantequilla']
  },
  beverages: [
    'Café',
    'Té',
    'Agua de sabor',
    'Jugo de naranja'
  ],
  notes: [
    'Desayuno incluido en fines de semana y días festivos',
    'Servido en el desayunador principal',
    'Menú sujeto a disponibilidad de temporada'
  ]
}
