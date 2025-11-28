import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Navegación principal">
          <Link to="/" className="logo" aria-label={`${siteConfig.name} - Inicio`}>
            <span className="logo-text">{siteConfig.name}</span>
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label="Abrir menú de navegación"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul 
            id="main-menu" 
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
            role="menubar"
          >
            <li role="none">
              <Link 
                to="/" 
                className="nav-link" 
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/cabanas" 
                className="nav-link" 
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Cabañas
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/facilities" 
                className="nav-link" 
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Instalaciones
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/policies" 
                className="nav-link" 
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Políticas
              </Link>
            </li>
            <li role="none">
              <a 
                href="#contacto" 
                className="nav-link" 
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
            <li role="none">
              <Link 
                to="/cabanas" 
                className="btn btn-primary nav-cta" 
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header