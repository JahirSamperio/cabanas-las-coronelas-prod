import React from 'react'
import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { contactInfo } from '../data'
import LazyImage from './LazyImage'
import './CabanaCard.css'

const CabanaCard = ({ cabana, eager = false }) => {
  if (!cabana) {
    return (
      <article className="card cabana-card">
        <div className="card-content">
          <p>Error: Información de cabaña no disponible</p>
        </div>
      </article>
    )
  }

  const imageUrl = cabana.images?.[0] || '/placeholder-cabin.jpg'
  
  // Get capacity range
  const capacityMin = cabana.capacity?.min || 0
  const capacityMax = cabana.capacity?.max || 0
  const capacityText = `${capacityMin}-${capacityMax} personas`
  
  // Get starting price (lowest price from pricing tiers)
  const priceFrom = cabana.pricing?.[0]?.pricePerNight || 0
  const formattedPrice = priceFrom.toLocaleString()

  return (
    <article className="card cabana-card">
      <LazyImage
        src={imageUrl}
        alt={`Vista exterior de ${cabana.name || 'Cabaña'}`}
        className="card-image"
        eager={eager}
      />
      
      <div className="card-content">
        <header>
          <h3 className="card-title">{cabana.name}</h3>
          <div className="cabana-meta">
            <span className="price" aria-label={`Precio desde ${priceFrom} pesos por noche`}>
              Desde ${formattedPrice}/noche
            </span>
            <span className="capacity" aria-label={`Capacidad: ${capacityText}`}>
              <FaUsers /> {capacityText}
            </span>
          </div>
        </header>
        
        <p className="card-text">{cabana.shortDescription}</p>
        
        <div className="card-actions">
          <Link 
            to={`/cabanas/${cabana.id}`} 
            className="btn btn-primary"
            aria-label={`Ver detalles de ${cabana.name}`}
          >
            Ver Detalles
          </Link>
          <a 
            href={`tel:${contactInfo.phone}`} 
            className="btn btn-secondary"
            aria-label={`Llamar para reservar ${cabana.name}`}
          >
            Llamar
          </a>
        </div>
      </div>
    </article>
  )
}

export default CabanaCard
