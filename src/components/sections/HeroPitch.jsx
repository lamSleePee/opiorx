import React from 'react'

const HeroPitch = () => {
  return (
    <section className="hero-pitch">
      <div className="hero-pitch-container">
        <h1 className="hero-title">OpioRx: Real Time Non Invasive Detection of Opioids</h1>
        <p className="hero-subtitle">Transforming opioid detection with breakthrough innovation that saves lives through precision, speed, and intelligence</p>

        <div className="hero-stats">
          <div className="hero-stat-card">
            <div className="hero-stat-value">2-3 min</div>
            <div className="hero-stat-label">Detection Speed</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-value">99%+</div>
            <div className="hero-stat-label">Accuracy</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Analytes</div>
          </div>
        </div>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#" aria-label="Download Pitch Deck">Download Pitch Deck</a>
          <a className="btn btn-outline" href="#" aria-label="Contact us">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default HeroPitch


