import React from 'react'
import BioSensor from '../BioSensor'

const TechnologyHero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-visual">
          <BioSensor />
        </div>
        <div className="hero-content">
          <h1>Advanced Opioid Detection Technology</h1>
          <p>Detect various opioids in saliva with precision biosensor technology. Instant screening for safer pain management and addiction monitoring.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Detection</button>
            <button className="btn-secondary">View Results</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyHero



