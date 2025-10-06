import React from 'react'

// Simple hero section that shows a themed image banner matching the site's palette
// Place your image at public/insights-hero.jpg (or pass a different src via props)
const InsightsHero = ({ src = '/insights-hero.jpg' }) => {
  return (
    <section className="insights-hero">
      <div className="insights-hero-container">
        <div className="insights-image-wrapper">
          <img src={src} alt="Opio-Rx hero" className="insights-image" />
          <div className="insights-overlay" />
        </div>
      </div>
    </section>
  )
}

export default InsightsHero


