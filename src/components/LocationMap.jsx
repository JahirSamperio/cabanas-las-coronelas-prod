import { contactInfo } from '../data'
import './LocationMap.css'

const LocationMap = () => {
  const { coordinates, address } = contactInfo

  return (
    <section className="location-section" aria-labelledby="location-title">
      <div className="container">
        <h2 id="location-title" className="section-title">
          Nuestra Ubicación
        </h2>
        <p className="section-subtitle">
          A solo 4 minutos del centro de Huasca de Ocampo, primer Pueblo Mágico de México
        </p>
        
        <div className="location-content">
          <div className="location-info">
            <div className="address-card">
              <h3 className="address-title">Dirección</h3>
              <p className="address-text">
                {address.street}<br/>
                {address.city}, {address.state}<br/>
                C.P. {address.zipCode}
              </p>
              <p className="location-highlight">
                📍 A solo 4 minutos del centro de Huasca
              </p>
              
              <div className="contact-details">
                <p>
                  <strong>Teléfono:</strong> 
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong> 
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, me gustaría obtener información sobre las cabañas disponibles`}
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7488.318793195944!2d-98.57061507553114!3d20.21069635526089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10156b8e7d897%3A0x628b0e751aca15c0!2sCaba%C3%B1as%20Las%20Coronelas!5e0!3m2!1ses-419!2smx!4v1764166892938!5m2!1ses-419!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabañas Las Coronelas en Huasca de Ocampo"
            ></iframe>
            <div className="map-link">
              <a 
                href={contactInfo.social?.googleMaps || 'https://maps.app.goo.gl/ELe8ZxMYbnAExtDRA'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap