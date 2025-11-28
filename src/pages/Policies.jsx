import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaClock, FaUtensils, FaExclamationTriangle, FaMusic, FaSwimmingPool, FaShieldAlt } from 'react-icons/fa'
import { policies } from '../data/policies'
import { breakfastMenu } from '../data/menu'
import { contactInfo } from '../data/contactInfo'
import PolicySection from '../components/PolicySection'
import PetFriendlySection from '../components/PetFriendlySection'
import MenuCard from '../components/MenuCard'
import LazyImage from '../components/LazyImage'
import { updatePageSEO } from '../utils/seo'
import './Policies.css'

const Policies = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Políticas y Reglamento - Cabañas en Huasca, Hidalgo',
      description: 'Check-in, check-out, reglamento, políticas pet-friendly. Conoce nuestras políticas para una estancia agradable en Huasca.',
      keywords: 'políticas cabañas Hidalgo, reglamento hospedaje, pet-friendly Huasca, check-in check-out',
      path: '/policies'
    })
  }, [])

  // Map category names to icons
  const categoryIcons = {
    'General': <FaExclamationTriangle />,
    'Música y Ruido': <FaMusic />,
    'Alberca': <FaSwimmingPool />,
    'Seguridad': <FaShieldAlt />
  }

  return (
    <>
      {/* Hero Section - Simplificado */}
      <section className="policies-hero">
        <div className="container">
          <h1 className="policies-main-title">Políticas y Reglamento</h1>
          <p className="policies-main-subtitle">
            Información importante para tu estancia
          </p>
        </div>
      </section>

      {/* Check-in / Check-out */}
      <section className="section" aria-labelledby="checkin-title">
        <div className="container">
          <h2 id="checkin-title" className="section-title">
            <FaClock className="section-icon" aria-hidden="true" />
            Horarios de Check-in y Check-out
          </h2>
          
          <div className="checkin-grid">
            <div className="checkin-card card">
              <div className="card-content">
                <h3 className="card-title">Fechas Normales</h3>
                <div className="checkin-times">
                  <div className="time-item">
                    <span className="time-label">Check-in:</span>
                    <span className="time-value">{policies.checkInOut.normal.checkIn}</span>
                  </div>
                  <div className="time-item">
                    <span className="time-label">Check-out:</span>
                    <span className="time-value">{policies.checkInOut.normal.checkOut}</span>
                  </div>
                </div>
                {policies.checkInOut.normal.earlyArrival && (
                  <p className="checkin-note">
                    <strong>Llegada temprana:</strong> {policies.checkInOut.normal.earlyArrival}
                  </p>
                )}
              </div>
            </div>

            <div className="checkin-card card">
              <div className="card-content">
                <h3 className="card-title">Fechas Vacacionales</h3>
                <div className="checkin-times">
                  <div className="time-item">
                    <span className="time-label">Check-in:</span>
                    <span className="time-value">{policies.checkInOut.vacation.checkIn}</span>
                  </div>
                  <div className="time-item">
                    <span className="time-label">Check-out:</span>
                    <span className="time-value">{policies.checkInOut.vacation.checkOut}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakfast Policy */}
      <section className="section bg-light" aria-labelledby="breakfast-title">
        <div className="container">
          <h2 id="breakfast-title" className="section-title">
            <FaUtensils className="section-icon" aria-hidden="true" />
            Desayuno
          </h2>
          
          <div className="breakfast-card card">
            <div className="card-content">
              <div className="breakfast-schedule">
                <h3 className="breakfast-time">{breakfastMenu.schedule}</h3>
                <p className="breakfast-subtitle">Horario del desayunador</p>
              </div>
              
              <ul className="breakfast-instructions">
                {policies.breakfast.instructions.map((instruction, index) => (
                  <li key={index} className="breakfast-instruction">
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Breakfast Menu */}
          <div className="menu-section">
            <h3 className="menu-section-title">Nuestro Menú</h3>
            <p className="menu-section-subtitle">
              Disfruta de un delicioso desayuno con opciones para toda la familia
            </p>
            
            <div className="menu-grid">
              <MenuCard 
                category="platillos" 
                items={breakfastMenu.mainDishes} 
              />
              
              <div className="menu-sides-beverages">
                <div className="card menu-extras-card">
                  <div className="card-content">
                    <h3 className="card-title">Acompañamientos</h3>
                    <ul className="extras-list">
                      {breakfastMenu.sides.fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                      ))}
                      <li>{breakfastMenu.sides.bread}</li>
                      {breakfastMenu.sides.extras.map((extra, index) => (
                        <li key={`extra-${index}`}>{extra}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card menu-extras-card">
                  <div className="card-content">
                    <h3 className="card-title">Bebidas</h3>
                    <ul className="extras-list">
                      {breakfastMenu.beverages.map((beverage, index) => (
                        <li key={index}>{beverage}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {breakfastMenu.notes.length > 0 && (
              <div className="menu-notes">
                {breakfastMenu.notes.map((note, index) => (
                  <p key={index} className="menu-note">{note}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reglamento */}
      <section className="section" aria-labelledby="rules-title">
        <div className="container">
          <h2 id="rules-title" className="section-title">
            Reglamento Interno
          </h2>
          <p className="section-subtitle">
            Para garantizar una estancia agradable, te pedimos seguir estas normas
          </p>
          
          <div className="rules-container">
            {policies.rules.map((ruleCategory, index) => (
              <PolicySection
                key={index}
                title={ruleCategory.category}
                icon={categoryIcons[ruleCategory.category]}
                rules={ruleCategory.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pet Friendly */}
      <section className="section bg-light" aria-labelledby="pet-friendly-title">
        <div className="container">
          <h2 id="pet-friendly-title" className="section-title">
            Política de Mascotas
          </h2>
          
          <PetFriendlySection petPolicy={policies.petFriendly} />
        </div>
      </section>

      {/* Discounts Info */}
      {(policies.discounts.weekday || policies.discounts.multiNight) && (
        <section className="section" aria-labelledby="discounts-title">
          <div className="container">
            <h2 id="discounts-title" className="section-title">
              Descuentos y Promociones
            </h2>
            
            <div className="discounts-card card">
              <div className="card-content">
                <ul className="discounts-list">
                  {policies.discounts.weekday && (
                    <li>Descuentos disponibles entre semana</li>
                  )}
                  {policies.discounts.multiNight && (
                    <li>Descuentos por estancias de múltiples noches</li>
                  )}
                </ul>
                
                {policies.discounts.restrictions.length > 0 && (
                  <div className="discounts-restrictions">
                    <h4>Restricciones:</h4>
                    <ul>
                      {policies.discounts.restrictions.map((restriction, index) => (
                        <li key={index}>{restriction}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA de Contacto */}
      <section className="section cta-section" aria-labelledby="policies-cta-title">
        <div className="container">
          <div className="cta-content">
            <h2 id="policies-cta-title" className="cta-title">
              ¿Tienes Preguntas sobre Nuestras Políticas?
            </h2>
            <p className="cta-text">
              Estamos aquí para ayudarte. Contáctanos para resolver cualquier duda 
              sobre nuestras políticas, horarios o servicios.
            </p>
            <div className="cta-actions">
              <Link to="/cabanas" className="btn btn-primary btn-lg">
                Ver Cabañas
              </Link>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, tengo preguntas sobre las políticas`}
                className="btn btn-secondary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="btn btn-secondary btn-lg"
                aria-label="Llamar por teléfono"
              >
                <FaPhone /> Llamar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Policies
