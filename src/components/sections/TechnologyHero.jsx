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
          {/* Scientific diagram showing aptamer-opioid interaction */}
          <div className="scientific-diagram">
            <div className="diagram-container">
              <div className="diagram-left">
                <div className="aptamer-structure">
                  <div className="aptamer-chain"></div>
                  <div className="aptamer-label">Aptamer</div>
                  <div className="gray-sphere"></div>
                </div>
                <div className="opioid-molecule">
                  <div className="pink-sphere"></div>
                  <div className="opioid-label">synthetic opioid</div>
                </div>
                <div className="interaction-text">Aptamer interacts with the synthetic opioid.</div>
              </div>
              
              <div className="diagram-arrow">
                <div className="arrow-right"></div>
              </div>
              
              <div className="diagram-right">
                <div className="aptamer-coiled">
                  <div className="aptamer-chain-coiled"></div>
                  <div className="green-sphere"></div>
                  <div className="distance-bracket">
                    <div className="bracket-line"></div>
                    <div className="distance-text">&gt;10 nm</div>
                  </div>
                </div>
                <div className="turn-on-text">Turn On state</div>
                <div className="conformational-text">Conformational change in the aptamer structure causes regain in fluorescence.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyHero



