import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaUsers, FaCheck, FaConciergeBell, FaBed, FaClock } from 'react-icons/fa'
import { cabanas, contactInfo } from '../data'
import { policies } from '../data/policies'
import { validateCabana } from '../utils/validation'
import { updatePageSEO } from '../utils/seo'
import { generateCabanaWhatsAppLink } from '../utils/whatsapp'
import LazyImage from '../components/LazyImage'
import PricingTable from '../components/PricingTable'
import './CabanaDetail.css'

const CabanaDetail = () => {
  const { id } = useParams()
  const [cabana, setCabana] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    try {
      const foundCabana = cabanas.find(c => c.id === id)
      const validatedCabana = validateCabana(foundCabana)
      setCabana(validatedCabana)

      if (validatedCabana && validatedCabana.id !== 'unknown') {
        updatePageSEO({
          title: `${validatedCabana.name} - Cabaña en Huasca, Hidalgo`,
          description: `${validatedCabana.name}: ${validatedCabana.capacity.min}-${validatedCabana.capacity.max} personas. Desde $${validatedCabana.pricing[0].pricePerNight}/noche. ${validatedCabana.shortDescription || validatedCabana.description.substring(0, 100)}`,
          keywords: `${validatedCabana.name}, cabaña Huasca, hospedaje Hidalgo, ${validatedCabana.capacity.min}-${validatedCabana.capacity.max} personas`,
          path: `/cabanas/${validatedCabana.id}`
        })
      }

      if (validatedCabana && validatedCabana.id !== 'unknown') {
        updatePageSEO({
          title: validatedCabana.name,
          description: validatedCabana.description.substring(0, 160),
          keywords: `${validatedCabana.name}, ${validatedCabana.capacity.min}-${validatedCabana.capacity.max} personas, desde $${validatedCabana.pricing[0].pricePerNight}`,
          path: `/cabanas/${validatedCabana.id}`
        })
      }
    } catch (error) {
      console.error('Error loading cabana details:', error)
      setCabana(null)
    }
  }, [id])

  if (!cabana) {
    return (
      <div className="container">
        <div className="not-found">
          <h1>Cabaña no encontrada</h1>
          <p>La cabaña que buscas no existe o ha sido removida.</p>
          <Link to="/cabanas" className="btn btn-primary">
            Ver Todas las Cabañas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cabana-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="Navegación de migas de pan" className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Inicio</Link>
          <span className="breadcrumb-separator" aria-hidden="true">/</span>
          <Link to="/cabanas" className="breadcrumb-link">Cabañas</Link>
          <span className="breadcrumb-separator" aria-hidden="true">/</span>
          <span className="breadcrumb-current">{cabana.name}</span>
        </nav>

        {/* Header */}
        <header className="detail-header">
          <h1 className="detail-title">{cabana.name}</h1>
          <div className="detail-meta">
            <span className="detail-price" aria-label={`Precio desde ${cabana.pricing[0].pricePerNight} pesos por noche`}>
              Desde ${cabana.pricing[0].pricePerNight.toLocaleString()} / noche
            </span>
            <span className="detail-capacity" aria-label={`Capacidad: ${cabana.capacity.min}-${cabana.capacity.max} personas`}>
              <FaUsers /> {cabana.capacity.min}-{cabana.capacity.max} personas
            </span>
          </div>
        </header>

        {/* Galería */}
        <section className="gallery-section" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="sr-only">Galería de imágenes</h2>
          <div className="gallery">
            <div className="main-image">
              <LazyImage
                src={cabana.images[selectedImage]}
                alt={`${cabana.name} - Imagen ${selectedImage + 1}`}
                className="gallery-main"
              />
            </div>
            <div className="image-thumbnails">
              {cabana.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  aria-label={`Ver imagen ${index + 1} de ${cabana.name}`}
                >
                  <LazyImage
                    src={image}
                    alt={`${cabana.name} - Miniatura ${index + 1}`}
                    className="thumbnail-image"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="detail-content">
          <div className="detail-main">
            {/* Descripción */}
            <section aria-labelledby="description-title">
              <h2 id="description-title" className="content-title">Descripción</h2>
              <p className="description-text">{cabana.description}</p>
            </section>

            {/* Rooms/Beds Distribution */}
            <section aria-labelledby="rooms-title">
              <h2 id="rooms-title" className="content-title">Habitaciones y Camas</h2>
              <div className="rooms-info">
                <div className="rooms-summary">
                  <div className="room-stat">
                    <FaBed className="room-icon" />
                    <span className="room-label">{cabana.rooms.total} {cabana.rooms.total === 1 ? 'Recámara' : 'Recámaras'}</span>
                  </div>
                  <div className="room-stat">
                    <span className="room-label">{cabana.rooms.bathrooms} {cabana.rooms.bathrooms === 1 ? 'Baño' : 'Baños'}</span>
                  </div>
                </div>
                <div className="beds-distribution">
                  <h3 className="distribution-title">Distribución de camas:</h3>
                  <ul className="beds-list">
                    {cabana.rooms.distribution.map((bed, index) => (
                      <li key={index} className="bed-item">
                        {bed.quantity} {bed.quantity === 1 ? 'cama' : 'camas'} {bed.type}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Amenidades */}
            <section aria-labelledby="amenities-title">
              <h2 id="amenities-title" className="content-title">Amenidades</h2>
              <ul className="amenities-list">
                {cabana.amenities.map((amenity, index) => (
                  <li key={index} className="amenity-item">
                    <span className="amenity-icon" aria-hidden="true"><FaCheck /></span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            {/* Servicios */}
            <section aria-labelledby="services-title">
              <h2 id="services-title" className="content-title">Servicios Incluidos</h2>
              <ul className="services-list">
                {cabana.services.map((service, index) => (
                  <li key={index} className="service-item">
                    <span className="service-icon" aria-hidden="true"><FaConciergeBell /></span>
                    {service}
                  </li>
                ))}
              </ul>
            </section>

            {/* Pricing Table */}
            <section aria-labelledby="pricing-title">
              <PricingTable 
                cabanaName={cabana.name}
                pricing={cabana.pricing}
                notes={cabana.notes}
              />
            </section>

            {/* Check-in / Check-out */}
            <section aria-labelledby="checkin-title" className="checkin-section">
              <h2 id="checkin-title" className="content-title">
                <FaClock /> Horarios
              </h2>
              <div className="checkin-grid-detail">
                <div className="checkin-item">
                  <h3 className="checkin-label">Fechas Normales</h3>
                  <div className="checkin-times-detail">
                    <div className="time-row">
                      <span className="time-label-small">Check-in:</span>
                      <span className="time-value-small">{policies.checkInOut.normal.checkIn}</span>
                    </div>
                    <div className="time-row">
                      <span className="time-label-small">Check-out:</span>
                      <span className="time-value-small">{policies.checkInOut.normal.checkOut}</span>
                    </div>
                  </div>
                </div>
                <div className="checkin-item">
                  <h3 className="checkin-label">Fechas Vacacionales</h3>
                  <div className="checkin-times-detail">
                    <div className="time-row">
                      <span className="time-label-small">Check-in:</span>
                      <span className="time-value-small">{policies.checkInOut.vacation.checkIn}</span>
                    </div>
                    <div className="time-row">
                      <span className="time-label-small">Check-out:</span>
                      <span className="time-value-small">{policies.checkInOut.vacation.checkOut}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/policies" className="btn btn-secondary btn-sm">
                Ver Todas las Políticas
              </Link>
            </section>
          </div>

          {/* Sidebar de reserva */}
          <aside className="reservation-sidebar" aria-labelledby="reservation-title">
            <div className="reservation-card">
              <h2 id="reservation-title" className="reservation-title">Reservar Ahora</h2>
              
              <div className="price-display">
                <span className="price-amount">Desde ${cabana.pricing[0].pricePerNight.toLocaleString()}</span>
                <span className="price-period">por noche</span>
              </div>

              <div className="capacity-display">
                <span className="capacity-icon" aria-hidden="true"><FaUsers /></span>
                <span>{cabana.capacity.min}-{cabana.capacity.max} personas</span>
              </div>

              <div className="reservation-actions">
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="btn btn-primary btn-lg reservation-btn"
                  aria-label={`Llamar para reservar ${cabana.name}`}
                >
                  Llamar para Reservar
                </a>
                <a 
                  href={generateCabanaWhatsAppLink(cabana.name, {
                    minCapacity: cabana.capacity.min,
                    maxCapacity: cabana.capacity.max
                  })} 
                  className="btn btn-secondary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contactar por WhatsApp para reservar ${cabana.name}`}
                >
                  WhatsApp
                </a>
              </div>

              <div className="contact-info">
                <p className="contact-text">
                  ¿Tienes preguntas? Contáctanos directamente
                </p>
                <p className="contact-phone">
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Cabañas relacionadas */}
        <section className="related-section" aria-labelledby="related-title">
          <h2 id="related-title" className="section-title">Otras Cabañas</h2>
          <div className="related-cabanas">
            {cabanas
              .filter(c => c.id !== cabana.id)
              .slice(0, 3)
              .map(relatedCabana => (
                <Link 
                  key={relatedCabana.id} 
                  to={`/cabanas/${relatedCabana.id}`}
                  className="related-card"
                >
                  <LazyImage
                    src={relatedCabana.images[0]}
                    alt={`Vista de ${relatedCabana.name}`}
                    className="related-image"
                  />
                  <div className="related-content">
                    <h3 className="related-name">{relatedCabana.name}</h3>
                    <p className="related-price">Desde ${relatedCabana.pricing[0].pricePerNight.toLocaleString()} / noche</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default CabanaDetail
