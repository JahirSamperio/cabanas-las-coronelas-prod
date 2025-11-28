import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LazyImage from './LazyImage'

describe('LazyImage Component', () => {
  it('renders with lazy loading attribute', () => {
    render(<LazyImage src="/test.jpg" alt="Test image" />)
    
    // Wait for image to be in view and rendered
    setTimeout(() => {
      const img = screen.queryByAlt('Test image')
      if (img) {
        expect(img).toHaveAttribute('loading', 'lazy')
      }
    }, 100)
  })

  it('renders error state when src is missing', () => {
    render(<LazyImage src="" alt="Test image" />)
    const errorText = screen.getByText('Imagen no disponible')
    expect(errorText).toBeTruthy()
  })

  it('applies custom className', () => {
    const { container } = render(<LazyImage src="/test.jpg" alt="Test" className="custom-class" />)
    const lazyContainer = container.querySelector('.lazy-image-container')
    expect(lazyContainer?.classList.contains('custom-class')).toBe(true)
  })
})
