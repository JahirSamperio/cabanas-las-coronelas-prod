import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaMountain, FaStar, FaLeaf } from 'react-icons/fa'
import { cabanas } from '../data/cabanas'
import CabanaCard from '../components/CabanaCard'
import LazyImage from '../components/LazyImage'
import LocationMap from '../components/LocationMap'
import { updatePageSEO, generateLodgingSchema, injectSchemaMarkup } from '../utils/seo'
import './Home.css'

const Home = () => {
  const featuredCabanas = cabanas.slice(0, 3)

  useEffect(() => {
    // Update SEO meta tags
    updatePageSEO({
      title: 'Cabañas Las Coronelas - Hospedaje en Huasca, Hidalgo',
      description: 'Renta de cabañas en Huasca, Hidalgo. 14 cabañas con alberca, chimenea, WiFi. Desde $1,300/noche. ¡Reserva ahora!',
      keywords: 'cabañas Huasca, cabañas Huasca, hospedaje Hidalgo, alojamiento naturaleza',
      path: '/'
    })

    // Inject Schema Markup
    const schema = generateLodgingSchema({
      images: featuredCabanas.map(c => c.images[0]).filter(Boolean)
    })
    injectSchemaMarkup(schema)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 id="hero-title" className="hero-title">
                Cabañas en <span className="highlight">Huasca de Ocampo</span><br/>
                – Hospedaje en la Naturaleza
              </h1>
              <p className="hero-subtitle">
                Cabañas en Huasca de Ocampo con chimenea, cocina equipada y vistas al bosque. 
                <strong>El mejor hospedaje en el primer Pueblo Mágico de México.</strong>
              </p>
              <div className="hero-actions">
                <Link to="/cabanas" className="btn btn-primary btn-lg">
                  Descubre Tu Cabaña Ideal
                </Link>
                <a href="#beneficios" className="btn btn-secondary btn-lg">
                  ¿Por Qué Huasca?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <LazyImage
            src="https://enews.mx/foto/noticias/noticias_20210823025405_1625.jpg"
            alt="Cabaña de madera rodeada de naturaleza al amanecer"
            className="hero-bg"
          />
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="section" aria-labelledby="beneficios-title">
        <div className="container">
          <h2 id="beneficios-title" className="section-title">
            ¿Por Qué Elegir Cabañas Las Coronelas?
          </h2>
          <p className="section-subtitle">
            Ofrecemos experiencias únicas que combinan comodidad, naturaleza y aventura
          </p>
          
          <div className="grid grid-3 benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"><FaMountain /></div>
              <h3 className="benefit-title">Ubicaciones Privilegiadas</h3>
              <p className="benefit-text">
                Ubicadas en Huasca de Ocampo, primer Pueblo Mágico de México, 
                con vistas panorámicas a bosques, lagos y montañas.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"><FaStar /></div>
              <h3 className="benefit-title">Comodidades Premium</h3>
              <p className="benefit-text">
                Todas nuestras cabañas incluyen amenidades de lujo: WiFi, 
                cocinas equipadas, chimeneas y espacios diseñados para el descanso.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true"><FaLeaf /></div>
              <h3 className="benefit-title">Experiencias Auténticas</h3>
              <p className="benefit-text">
                Actividades guiadas, gastronomía local y conexión real con la 
                naturaleza para crear recuerdos inolvidables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabañas Destacadas */}
      <section className="section bg-light" aria-labelledby="destacadas-title">
        <div className="container">
          <h2 id="destacadas-title" className="section-title">
            Cabañas Destacadas
          </h2>
          <p className="section-subtitle">
            Descubre nuestras cabañas más populares y encuentra tu refugio ideal
          </p>
          
          <div className="grid grid-3">
            {featuredCabanas.map(cabana => (
              <CabanaCard key={cabana.id} cabana={cabana} />
            ))}
          </div>
          
          <div className="section-cta">
            <Link to="/cabanas" className="btn btn-primary btn-lg">
              Ver Todas las Cabañas
            </Link>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <LocationMap />

      {/* CTA Final */}
      <section className="section cta-section" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-content">
            <h2 id="cta-title" className="cta-title">
              ¿Listo para Tu Próxima Aventura?
            </h2>
            <p className="cta-text">
              Reserva ahora y vive una experiencia única en la naturaleza. 
              Nuestro equipo está listo para hacer de tu estadía algo memorable.
            </p>
            <div className="cta-actions">
              <Link to="/cabanas" className="btn btn-primary btn-lg">
                Reservar Cabaña
              </Link>
              <a href="tel:+525551234567" className="btn btn-secondary btn-lg">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
