import { FaUtensils, FaAppleAlt, FaCoffee } from 'react-icons/fa'
import './MenuCard.css'

const categoryIcons = {
  platillos: FaUtensils,
  frutas: FaAppleAlt,
  bebidas: FaCoffee
}

const MenuCard = ({ category, items }) => {
  const IconComponent = categoryIcons[category] || FaUtensils
  
  return (
    <article className="card menu-card">
      <div className="menu-icon-wrapper" aria-hidden="true">
        <IconComponent className="menu-icon" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">
          {category === 'platillos' && 'Platillos Principales'}
          {category === 'frutas' && 'Acompañamientos'}
          {category === 'bebidas' && 'Bebidas'}
        </h3>
        
        <ul className="menu-items-list">
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              <h4 className="menu-item-name">{item.name}</h4>
              
              {item.description && (
                <p className="menu-item-description">{item.description}</p>
              )}
              
              {item.accompaniments && item.accompaniments.length > 0 && (
                <div className="menu-item-accompaniments">
                  <span className="accompaniments-label">Incluye:</span>
                  <ul className="accompaniments-list">
                    {item.accompaniments.map((acc, accIndex) => (
                      <li key={accIndex}>{acc}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.category && (
                <span className="menu-item-category">{item.category}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default MenuCard
