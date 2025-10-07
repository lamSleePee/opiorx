import React, { useState, useEffect, useRef } from 'react'

const DeathCounter = () => {
  const [deathCount, setDeathCount] = useState(3179832)
  const [countdown, setCountdown] = useState(10)
  const lastIncrementTime = useRef(0)

  useEffect(() => {
    // Countdown timer that resets every 10 seconds
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          // When countdown reaches 1, increment death count and reset to 10
          const now = Date.now()
          if (now - lastIncrementTime.current >= 9000) { // Only increment if at least 9 seconds have passed
            setDeathCount(prevDeath => prevDeath + 1)
            lastIncrementTime.current = now
          }
          return 10
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(countdownInterval)
  }, [])

  return (
    <section 
      className="death-counter-hero" 
      style={{ 
        position:'relative',
        backgroundImage: `url('https://mayflowerrecovery.com/wp-content/uploads/2024/10/dangers-of-fentanyl.webp')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        isolation:'isolate'
      }}
    >
      {/* dark overlay for readability */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55))', zIndex:0 }} />
      <div className="death-counter-container">
        <div className="countdown-timer">
          <div className="countdown-number">{countdown}</div>
          <div className="countdown-label">seconds until next death</div>
          <div className="countdown-progress">
            <div 
              className="countdown-bar" 
              style={{ width: `${(countdown / 10) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="death-counter-content">
          <h1 className="death-counter-title">Every 10 seconds, another life is lost</h1>
          <div className="death-counter-number">
            <span className="death-count">{deathCount.toLocaleString()}</span>
            <span className="death-label">deaths from drug abuse</span>
          </div>
          <p className="death-counter-description">
            The opioid crisis continues to claim lives at an alarming rate. 
            Our mission is to prevent these tragedies through early detection and intervention.
          </p>
          <div className="death-counter-stats">
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-text">death every 10 seconds</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8,640</span>
              <span className="stat-text">deaths per day</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3.1M</span>
              <span className="stat-text">deaths per year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeathCounter
