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
          {/* Embed the DeathCounter layout (countdown + stats) beside the video */}
          <div className="death-inline">
            <div className="death-inline-left">
              <div className="countdown-number" style={{margin:0}}>10</div>
              <div className="countdown-label">seconds until next death</div>
              <div className="countdown-progress">
                <div className="countdown-bar" style={{width:'100%'}}/>
              </div>
            </div>
            <div className="death-inline-right">
              <h2 className="death-inline-title">Every 10 seconds, another life is lost</h2>
              <div className="death-inline-count">3,179,855</div>
              <div className="death-inline-sub">deaths from drug abuse</div>
              <div className="death-inline-grid">
                <div className="death-inline-card"><b>1</b><span>death every 10 seconds</span></div>
                <div className="death-inline-card"><b>8,640</b><span>deaths per day</span></div>
                <div className="death-inline-card"><b>3.1M</b><span>deaths per year</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyHero



