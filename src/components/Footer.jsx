import React from 'react'
import { Link } from 'react-router-dom'
import { contactInfo, siteConfig } from '../data'
import { generateGeneralWhatsAppLink } from '../utils/whatsapp'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{siteConfig.name}</h3>
            <p className="footer-text">
              {siteConfig.description}
            </p>
            <p className="footer-location">
              <strong>📍 {siteConfig.location}</strong>
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="contact-info">
              <p>
                <strong>Teléfono:</strong> 
                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                  {contactInfo.phone}
                </a>
              </p>

              <p>
                <strong>WhatsApp:</strong> 
                <a 
                  href={generateGeneralWhatsAppLink()} 
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <strong>Dirección:</strong> {contactInfo.address.street}, {contactInfo.address.city}, 
                {contactInfo.address.state}, {contactInfo.address.zipCode}
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <div className="quick-links">
              <Link to="/" className="footer-link">Inicio</Link>
              <Link to="/cabanas" className="footer-link">Cabañas</Link>
              <Link to="/facilities" className="footer-link">Instalaciones</Link>
              <Link to="/policies" className="footer-link">Políticas</Link>
              <Link to="/contact" className="footer-link">Contacto</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Síguenos</h4>
            <div className="social-links">
              <a 
                href={siteConfig.social.facebook} 
                className="social-link"
                aria-label="Síguenos en Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href={siteConfig.social.instagram} 
                className="social-link"
                aria-label="Síguenos en Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href={generateGeneralWhatsAppLink()} 
                className="social-link"
                aria-label="Contáctanos por WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          </div>
          <div className="footer-links">
            <Link to="/policies" className="footer-link">Políticas</Link>
            <a href="/privacidad" className="footer-link">Privacidad</a>
            <a href="/terminos" className="footer-link">Términos</a>
          </div>
          <div className="developer-credit">
            <p className="dev-text">
              Desarrollado por{' '}
              <a 
                href="https://portafolio-jahirsamperio.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="dev-link"
              >
                Jahir Alberto Samperio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer