/**
 * Utility functions for generating WhatsApp links with pre-filled messages
 */

import { contactInfo } from '../data'

/**
 * Generates a WhatsApp link with a pre-filled message
 * @param {string} message - The message to pre-fill
 * @returns {string} - The WhatsApp URL
 */
export const generateWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`
}

/**
 * Generates a WhatsApp link for cabin inquiries
 * @param {string} cabanaName - The name of the cabin
 * @param {Object} options - Additional options
 * @param {number} options.minCapacity - Minimum capacity
 * @param {number} options.maxCapacity - Maximum capacity
 * @returns {string} - The WhatsApp URL
 */
export const generateCabanaWhatsAppLink = (cabanaName, options = {}) => {
  const { minCapacity, maxCapacity } = options
  
  let message = `Hola, me interesa reservar ${cabanaName}`
  
  if (minCapacity && maxCapacity) {
    message += ` para ${minCapacity}-${maxCapacity} personas`
  }
  
  message += '. ¿Podrían darme más información sobre disponibilidad y precios?'
  
  return generateWhatsAppLink(message)
}

/**
 * Generates a general inquiry WhatsApp link
 * @returns {string} - The WhatsApp URL
 */
export const generateGeneralWhatsAppLink = () => {
  const message = 'Hola, me gustaría obtener más información sobre las cabañas.'
  return generateWhatsAppLink(message)
}
