/**
 * @typedef {Object} CheckInOutTimes
 * @property {string} checkIn - Hora de check-in (formato "HH:MM AM/PM")
 * @property {string} checkOut - Hora de check-out (formato "HH:MM AM/PM")
 * @property {string} [earlyArrival] - Información sobre llegada temprana (opcional)
 */

/**
 * @typedef {Object} CheckInOutPolicy
 * @property {CheckInOutTimes} normal - Horarios para fechas normales
 * @property {CheckInOutTimes} vacation - Horarios para fechas vacacionales
 */

/**
 * @typedef {Object} BreakfastPolicy
 * @property {string} schedule - Horario del desayuno (formato "HH:MM AM - HH:MM AM")
 * @property {string[]} instructions - Instrucciones adicionales
 */

/**
 * @typedef {Object} DiscountPolicy
 * @property {boolean} weekday - Si hay descuentos entre semana
 * @property {boolean} multiNight - Si hay descuentos por múltiples noches
 * @property {string[]} restrictions - Restricciones aplicables
 */

/**
 * @typedef {Object} RuleItem
 * @property {string} rule - Texto de la regla
 * @property {string} [penalty] - Penalización por incumplimiento (opcional)
 */

/**
 * @typedef {Object} RuleCategory
 * @property {string} category - Categoría de las reglas (ej: "General", "Música", "Alberca")
 * @property {RuleItem[]} items - Lista de reglas en esta categoría
 */

/**
 * @typedef {Object} PetFriendlyPolicy
 * @property {boolean} allowed - Si se permiten mascotas
 * @property {Object} costs - Costos por tamaño de mascota
 * @property {number} costs.small - Costo para razas pequeñas
 * @property {number} costs.large - Costo para razas grandes
 * @property {number} deposit - Depósito de seguridad
 * @property {string[]} depositConditions - Condiciones para devolución del depósito
 * @property {string[]} rules - Reglas para mascotas
 */

/**
 * @typedef {Object} Policies
 * @property {CheckInOutPolicy} checkInOut - Políticas de check-in y check-out
 * @property {BreakfastPolicy} breakfast - Políticas de desayuno
 * @property {DiscountPolicy} discounts - Políticas de descuentos
 * @property {RuleCategory[]} rules - Reglamento organizado por categorías
 * @property {PetFriendlyPolicy} petFriendly - Políticas para mascotas
 */

/** @type {Policies} */
export const policies = {
  checkInOut: {
    normal: {
      checkIn: '1:00 PM',
      checkOut: '12:00 PM',
      earlyArrival: 'Si llega antes de la 1:00 PM puede usar alberca, asadores y áreas comunes'
    },
    vacation: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM'
    }
  },
  breakfast: {
    schedule: '9:00 AM - 11:00 AM',
    instructions: [
      'Desayuno incluido en fines de semana y días festivos',
      'Servido en el desayunador principal',
      'Menú variado con opciones para toda la familia'
    ]
  },
  discounts: {
    weekday: true,
    multiNight: true,
    restrictions: [
      'Sin reservación anticipada la cabaña se entrega inmediatamente solo si está disponible',
      'Los descuentos no aplican en temporada alta ni días festivos',
      'Consultar disponibilidad y tarifas especiales'
    ]
  },
  rules: [
    {
      category: 'General',
      items: [
        {
          rule: 'Prohibido fumar dentro de las cabañas',
          penalty: 'Cargo adicional por limpieza'
        },
        {
          rule: 'Mantener las instalaciones limpias y en buen estado',
          penalty: 'Cargo por daños o deterioro'
        },
        {
          rule: 'Respetar las áreas comunes y el mobiliario',
          penalty: 'Penalización extra por daños'
        },
        {
          rule: 'Daños, deterioro o manchas difíciles tendrán penalización extra'
        }
      ]
    },
    {
      category: 'Música y Ruido',
      items: [
        {
          rule: 'Volumen moderado de música hasta las 10:00 PM'
        },
        {
          rule: 'Prohibida la música después de las 10:00 PM',
          penalty: 'Llamado de atención'
        },
        {
          rule: 'Horario de silencio de 10:00 PM a 9:00 AM'
        }
      ]
    },
    {
      category: 'Alberca',
      items: [
        {
          rule: 'No se permite ingerir alimentos o bebidas dentro de la alberca'
        },
        {
          rule: 'No se permite llevar alimentos o bebidas al área de la alberca'
        },
        {
          rule: 'Los niños deben estar supervisados por un adulto en todo momento'
        },
        {
          rule: 'Ducharse antes de entrar a la alberca'
        }
      ]
    },
    {
      category: 'Seguridad',
      items: [
        {
          rule: 'Reportar cualquier incidente o accidente al personal'
        },
        {
          rule: 'No dejar objetos de valor sin supervisión'
        },
        {
          rule: 'Seguir las indicaciones del personal en todo momento'
        }
      ]
    }
  ],
  petFriendly: {
    allowed: true,
    costs: {
      small: 150,
      large: 250
    },
    deposit: 200,
    depositConditions: [
      'El depósito se devuelve después del chequeo de la cabaña',
      'No se devuelve si hay objetos rotos',
      'No se devuelve si hay excremento en la cabaña',
      'No se devuelve si hay mobiliario deteriorado'
    ],
    rules: [
      'Prohibido dejar mascotas confinadas solas en la cabaña',
      'Las mascotas deben traer su propio mobiliario (cama, platos, juguetes)',
      'Las mascotas no pueden usar el mobiliario de la cabaña',
      'Recoger los desechos de las mascotas inmediatamente',
      'Mantener a las mascotas con correa en áreas comunes',
      'El dueño es responsable de cualquier daño causado por su mascota'
    ]
  }
}
