import React from 'react'
import './PricingTable.css'

const PricingTable = ({ cabanaName, pricing, notes }) => {
  return (
    <div className="pricing-table">
      <h3 className="pricing-title">Tarifas por Noche</h3>
      
      <div className="pricing-grid">
        {pricing.map((tier, index) => (
          <div key={index} className="pricing-tier">
            <div className="tier-capacity">
              <span className="capacity-number">{tier.guests}</span>
              <span className="capacity-label">personas</span>
            </div>
            <div className="tier-price">
              ${tier.pricePerNight.toLocaleString()}
            </div>
            <div className="tier-includes">
              {tier.includes.map((item, idx) => (
                <span key={idx} className="include-item">✓ {item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {notes && notes.length > 0 && (
        <div className="pricing-notes">
          <h4 className="notes-title">Notas importantes:</h4>
          <ul className="notes-list">
            {notes.map((note, index) => (
              <li key={index} className="note-item">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PricingTable
