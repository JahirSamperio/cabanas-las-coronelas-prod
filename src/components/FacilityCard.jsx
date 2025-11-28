import { 
  FaSwimmingPool, 
  FaChild, 
  FaGamepad, 
  FaFutbol, 
  FaTree, 
  FaFire, 
  FaCampground, 
  FaUmbrella, 
  FaLandmark 
} from 'react-icons/fa'
import './FacilityCard.css'

const iconMap = {
  FaSwimmingPool: FaSwimmingPool,
  FaChild: FaChild,
  FaGamepad: FaGamepad,
  FaFutbol: FaFutbol,
  FaTree: FaTree,
  FaFire: FaFire,
  FaCampground: FaCampground,
  FaUmbrella: FaUmbrella,
  FaLandmark: FaLandmark
}

const FacilityCard = ({ icon, title, description, details, cost }) => {
  const IconComponent = iconMap[icon] || FaTree
  
  return (
    <article className="card facility-card">
      <div className="facility-icon-wrapper" aria-hidden="true">
        <IconComponent className="facility-icon" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        
        {details && (
          <p className="facility-details">{details}</p>
        )}
        
        {cost !== undefined && cost !== null && (
          <div className="facility-cost" aria-label={`Costo: ${cost === 0 ? 'Sin costo' : `$${cost} pesos`}`}>
            {cost === 0 ? (
              <span className="cost-free">Sin costo</span>
            ) : (
              <span className="cost-amount">${cost.toLocaleString()}</span>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default FacilityCard
