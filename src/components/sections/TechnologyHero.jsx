import React from 'react'
// Replaced BioSensor with contained video player

const TechnologyHero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-visual hero-visual-left">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videoPPT.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          {/* OpioRx Pitch Content */}
          <div className="opiorx-pitch">
            <div className="pitch-header">
              <h1 className="pitch-title">
                <span className="title-line">OpioRx: Real Time Non Invasive</span>
                <span className="title-line">Detection of Opioids</span>
              </h1>
              <p className="pitch-description">
                Transforming opioid detection with breakthrough innovation that saves lives through precision, speed, and intelligence
              </p>
            </div>
            
            <div className="pitch-stats">
              <div className="stat-card">
                <div className="stat-number">2-3 min</div>
                <div className="stat-label">Detection Speed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99%+</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Analytes</div>
              </div>
            </div>
            
            <div className="pitch-actions">
              <button className="btn-primary">Download Pitch Deck</button>
              <button className="btn-secondary">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyHero



