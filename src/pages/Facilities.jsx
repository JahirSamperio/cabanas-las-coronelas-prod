import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { facilities } from '../data/facilities'
import { contactInfo } from '../data/contactInfo'
import FacilityCard from '../components/FacilityCard'
import LazyImage from '../components/LazyImage'
import { updatePageSEO } from '../utils/seo'
import './Facilities.css'

const Facilities = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Instalaciones y Servicios - Cabañas en Huasca, Hidalgo',
      description: 'Alberca, chapoteadero, juegos infantiles, campo de fútbol, WiFi, Sky TV. Disfruta nuestras instalaciones en Huasca.',
      keywords: 'instalaciones cabañas Hidalgo, alberca Huasca, servicios hospedaje, áreas recreativas',
      path: '/facilities'
    })
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-labelledby="facilities-hero-title">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 id="facilities-hero-title" className="hero-title">
                Instalaciones y <span className="highlight">Servicios</span>
              </h1>
              <p className="hero-subtitle">
                Disfruta de nuestras amplias instalaciones recreativas y servicios diseñados 
                para hacer de tu estancia una experiencia inolvidable en la naturaleza.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <LazyImage
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/ca/90/e0/cabanas-san-isidro.jpg?w=900&h=500&s=1"
            alt="Instalaciones de Cabañas Las Coronelas"
            className="hero-bg"
          />
        </div>
      </section>

      {/* Áreas Recreativas */}
      <section className="section" aria-labelledby="recreational-title">
        <div className="container">
          <h2 id="recreational-title" className="section-title">
            Áreas Recreativas
          </h2>
          <p className="section-subtitle">
            Espacios diseñados para el entretenimiento y la diversión de toda la familia
          </p>
          
          <div className="grid grid-3">
            {facilities.recreational.map((facility, index) => (
              <FacilityCard
                key={index}
                icon={facility.icon}
                title={facility.name}
                description={facility.description}
                details={facility.specifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Generales */}
      <section className="section bg-light" aria-labelledby="general-services-title">
        <div className="container">
          <h2 id="general-services-title" className="section-title">
            Servicios Incluidos
          </h2>
          <p className="section-subtitle">
            Servicios complementarios incluidos en tu estancia
          </p>
          
          <div className="services-list">
            {facilities.generalServices.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-check" aria-hidden="true">✓</div>
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-notes">{service.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="section" aria-labelledby="additional-services-title">
        <div className="container">
          <h2 id="additional-services-title" className="section-title">
            Servicios Adicionales
          </h2>
          <p className="section-subtitle">
            Servicios extra disponibles para complementar tu experiencia
          </p>
          
          <div className="grid grid-2">
            {facilities.additionalServices.map((service, index) => (
              <div key={index} className="additional-service-card card">
                <div className="card-content">
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-text">{service.description}</p>
                  <div className="service-price">
                    {service.cost === null ? (
                      <span className="price-consult">Consultar disponibilidad</span>
                    ) : service.cost === 0 ? (
                      <span className="price-free">Sin costo</span>
                    ) : (
                      <span className="price-amount">${service.cost.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de Contacto */}
      <section className="section cta-section" aria-labelledby="facilities-cta-title">
        <div className="container">
          <div className="cta-content">
            <h2 id="facilities-cta-title" className="cta-title">
              ¿Listo para Disfrutar Nuestras Instalaciones?
            </h2>
            <p className="cta-text">
              Reserva ahora y aprovecha todas nuestras áreas recreativas y servicios. 
              Contáctanos para más información sobre disponibilidad y servicios adicionales.
            </p>
            <div className="cta-actions">
              <Link to="/cabanas" className="btn btn-primary btn-lg">
                Ver Cabañas
              </Link>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, me gustaría información sobre las instalaciones`}
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

export default Facilities
