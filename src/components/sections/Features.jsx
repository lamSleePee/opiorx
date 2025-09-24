import React from 'react'

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2>OpioRX Detection Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Multi-Opioid Detection</h3>
            <p>Detect various opioids including morphine, oxycodone, fentanyl, and codeine in saliva samples with 99%+ accuracy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>Get detection results in under 60 seconds with real-time biosensor technology for immediate clinical decision making.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Non-Invasive Testing</h3>
            <p>Simple saliva collection eliminates the need for blood draws, making testing more comfortable and accessible.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Quantitative Analysis</h3>
            <p>Measure precise opioid concentrations to determine usage patterns and monitor treatment compliance effectively.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features




