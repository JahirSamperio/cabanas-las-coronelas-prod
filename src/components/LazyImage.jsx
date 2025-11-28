import React, { useState } from 'react'
import { useLazyImage } from '../hooks/useLazyImage'

const LazyImage = ({ src, alt, className = '', srcSet, sizes, eager = false, ...props }) => {
  const { imgRef, isLoaded, isInView, handleLoad } = useLazyImage()
  const [hasError, setHasError] = useState(false)
  
  // Si eager=true, consideramos que siempre está en vista
  const shouldLoad = eager || isInView

  const handleError = () => {
    setHasError(true)
  }

  if (!src || hasError) {
    return (
      <div ref={imgRef} className={`lazy-image-container ${className}`}>
        <div className="image-error" aria-hidden="true">
          Imagen no disponible
        </div>
      </div>
    )
  }

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {shouldLoad && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt || 'Imagen'}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={eager ? "eager" : "lazy"}
          {...props}
        />
      )}
      {!isLoaded && shouldLoad && !hasError && (
        <div className="image-placeholder" aria-hidden="true">
          Cargando...
        </div>
      )}
    </div>
  )
}

export default LazyImage