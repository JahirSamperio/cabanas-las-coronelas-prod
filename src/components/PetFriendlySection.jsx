import { FaDog } from 'react-icons/fa'
import './PetFriendlySection.css'

const PetFriendlySection = ({ petPolicy }) => {
  if (!petPolicy.allowed) {
    return null
  }

  return (
    <section className="pet-friendly-section">
      <div className="pet-friendly-header">
        <div className="pet-icon-wrapper" aria-hidden="true">
          <FaDog className="pet-icon" />
        </div>
        <div className="pet-header-content">
          <h3 className="pet-title">Pet Friendly</h3>
          <p className="pet-subtitle">¡Trae a tu mascota contigo!</p>
        </div>
      </div>

      <div className="pet-costs-section">
        <h4 className="pet-section-title">Costos</h4>
        <div className="pet-costs-grid">
          <div className="pet-cost-card">
            <p className="pet-cost-label">Razas Pequeñas</p>
            <p className="pet-cost-amount">${petPolicy.costs.small.toLocaleString()}</p>
          </div>
          <div className="pet-cost-card">
            <p className="pet-cost-label">Razas Grandes</p>
            <p className="pet-cost-amount">${petPolicy.costs.large.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="pet-deposit-section">
        <h4 className="pet-section-title">Depósito de Seguridad</h4>
        <div className="pet-deposit-card">
          <p className="pet-deposit-amount">${petPolicy.deposit.toLocaleString()}</p>
          <p className="pet-deposit-description">por mascota (reembolsable)</p>
        </div>
        
        <div className="pet-deposit-conditions">
          <p className="pet-conditions-title">Condiciones de devolución:</p>
          <ul className="pet-conditions-list">
            {petPolicy.depositConditions.map((condition, index) => (
              <li key={index} className="pet-condition-item">
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pet-rules-section">
        <h4 className="pet-section-title">Reglas para Mascotas</h4>
        <ul className="pet-rules-list" role="list">
          {petPolicy.rules.map((rule, index) => (
            <li key={index} className="pet-rule-item">
              <span className="pet-rule-bullet" aria-hidden="true">🐾</span>
              <span className="pet-rule-text">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PetFriendlySection
