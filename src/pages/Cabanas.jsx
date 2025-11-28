import { useState, useEffect } from 'react'
import { cabanas } from '../data'
import { validateCabanas } from '../utils/validation'
import { updatePageSEO } from '../utils/seo'
import CabanaCard from '../components/CabanaCard'
import './Cabanas.css'

const Cabanas = () => {
  const validatedCabanas = validateCabanas(cabanas)
  const [filteredCabanas, setFilteredCabanas] = useState(validatedCabanas)
  const [filters, setFilters] = useState({
    capacity: '',
    priceRange: '',
    sortBy: 'name'
  })

  useEffect(() => {
    try {
      updatePageSEO({
        title: 'Nuestras Cabañas - 14 Opciones en Huasca, Hidalgo',
        description: 'Explora 14 cabañas desde 2 hasta 14 personas. Precios desde $1,300. Alberca, chimenea, WiFi incluido.',
        keywords: 'catálogo cabañas Hidalgo, precios cabañas Huasca, cabañas familiares Huasca, filtros capacidad',
        path: '/cabanas'
      })
    } catch (error) {
      console.error('Error updating SEO:', error)
    }
  }, [])

  useEffect(() => {
    let filtered = [...validatedCabanas]

    // Filtrar por capacidad - check if filter value is within cabin's min/max range
    if (filters.capacity) {
      const capacityValue = parseInt(filters.capacity)
      filtered = filtered.filter(cabana => {
        // Cabin can accommodate the requested capacity if it's within min/max range
        return cabana.capacity.min <= capacityValue && cabana.capacity.max >= capacityValue
      })
    }

    // Filtrar por rango de precio - use priceFrom field (first pricing tier)
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      filtered = filtered.filter(cabana => {
        const priceFrom = cabana.pricing[0]?.pricePerNight || 0
        if (max) {
          return priceFrom >= min && priceFrom <= max
        }
        return priceFrom >= min
      })
    }

    // Ordenar
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low': {
          const priceA = a.pricing[0]?.pricePerNight || 0
          const priceB = b.pricing[0]?.pricePerNight || 0
          return priceA - priceB
        }
        case 'price-high': {
          const priceA = a.pricing[0]?.pricePerNight || 0
          const priceB = b.pricing[0]?.pricePerNight || 0
          return priceB - priceA
        }
        case 'capacity':
          return b.capacity.max - a.capacity.max
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredCabanas(filtered)
  }, [filters, validatedCabanas])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  return (
    <div className="cabanas-page">
      <div className="container">
        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Nuestras Cabañas</h1>
          <p className="page-subtitle">
            Descubre todas nuestras cabañas disponibles y encuentra la perfecta para tu escape en la naturaleza
          </p>
        </header>

        {/* Filtros */}
        <section className="filters-section" aria-labelledby="filters-title">
          <h2 id="filters-title" className="sr-only">Filtros de búsqueda</h2>
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="capacity-filter" className="filter-label">
                Capacidad mínima
              </label>
              <select
                id="capacity-filter"
                value={filters.capacity}
                onChange={(e) => handleFilterChange('capacity', e.target.value)}
                className="filter-select"
              >
                <option value="">Todas</option>
                <option value="2">2+ personas</option>
                <option value="4">4+ personas</option>
                <option value="6">6+ personas</option>
                <option value="8">8+ personas</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="price-filter" className="filter-label">
                Rango de precio
              </label>
              <select
                id="price-filter"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="filter-select"
              >
                <option value="">Todos los precios</option>
                <option value="0-2000">Hasta $2,000</option>
                <option value="2000-2500">$2,000 - $2,500</option>
                <option value="2500-3000">$2,500 - $3,000</option>
                <option value="3000">Más de $3,000</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-filter" className="filter-label">
                Ordenar por
              </label>
              <select
                id="sort-filter"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="filter-select"
              >
                <option value="name">Nombre</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
                <option value="capacity">Capacidad</option>
              </select>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="results-section" aria-labelledby="results-title">
          <h2 id="results-title" className="sr-only">Resultados de cabañas</h2>
          <div className="results-header">
            <p className="results-count">
              {filteredCabanas.length} cabaña{filteredCabanas.length !== 1 ? 's' : ''} encontrada{filteredCabanas.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredCabanas.length > 0 ? (
            <div className="grid grid-3 cabanas-grid">
              {filteredCabanas.map((cabana, index) => (
                <CabanaCard 
                  key={cabana.id} 
                  cabana={cabana} 
                  eager={index < 3}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No se encontraron cabañas</h3>
              <p>Intenta ajustar los filtros para ver más opciones.</p>
              <button 
                onClick={() => setFilters({ capacity: '', priceRange: '', sortBy: 'name' })}
                className="btn btn-primary"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Cabanas
