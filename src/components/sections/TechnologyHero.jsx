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
          <h1>Advanced Opioid Detection Technology</h1>
          <p>Detect various opioids in saliva with precision biosensor technology. Instant screening for safer pain management and addiction monitoring.</p>
        </div>
      </div>
    </section>
  )
}

export default TechnologyHero



