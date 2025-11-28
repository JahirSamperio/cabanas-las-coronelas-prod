import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cabanas from './pages/Cabanas'
import CabanaDetail from './pages/CabanaDetail'
import Facilities from './pages/Facilities'
import Policies from './pages/Policies'

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="error-fallback">
    <h2>Algo salió mal</h2>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary} className="btn btn-primary">
      Intentar de nuevo
    </button>
  </div>
)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanas" element={<Cabanas />} />
          <Route path="/cabanas/:id" element={<CabanaDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

export default App