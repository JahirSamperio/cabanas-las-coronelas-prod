import './PolicySection.css'

const PolicySection = ({ title, icon, rules }) => {
  return (
    <section className="policy-section">
      <div className="policy-header">
        {icon && (
          <div className="policy-icon-wrapper" aria-hidden="true">
            {icon}
          </div>
        )}
        <h3 className="policy-title">{title}</h3>
      </div>
      
      <ul className="policy-list" role="list">
        {rules.map((ruleItem, index) => (
          <li 
            key={index} 
            className={`policy-item ${ruleItem.highlight ? 'policy-item-highlight' : ''}`}
          >
            <div className="policy-rule">
              <span className="policy-bullet" aria-hidden="true">•</span>
              <div className="policy-content">
                <p className="policy-text">{ruleItem.title || ruleItem.rule}</p>
                {ruleItem.description && (
                  <p className="policy-description">{ruleItem.description}</p>
                )}
                {ruleItem.penalty && (
                  <p className="policy-penalty">
                    <strong>Penalización:</strong> {ruleItem.penalty}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PolicySection
