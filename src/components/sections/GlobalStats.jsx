import React from 'react'

const GlobalStats = () => {
  return (
    <section className="global-stats">
      <div className="global-stats-container">
        <div className="global-stats-header">
          <h2>Global Drug Abuse Crisis</h2>
          <p>Data from WHO, UNODC, and other international health organizations</p>
        </div>
        
        <div className="global-stats-grid">
          <div className="global-stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#0891b2" strokeWidth="2" fill="none"/>
                <path d="M16 24 L20 28 L32 16" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>269 Million</h3>
              <p>People worldwide used drugs in 2020 (UNODC)</p>
              <span className="stat-source">Source: UN World Drug Report 2022</span>
            </div>
          </div>

          <div className="global-stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#ef4444" strokeWidth="2" fill="none"/>
                <path d="M24 8 L24 24 M24 24 L32 32 M24 24 L16 32" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>500,000+</h3>
              <p>Drug-related deaths annually worldwide (WHO)</p>
              <span className="stat-source">Source: WHO Global Health Observatory</span>
            </div>
          </div>

          <div className="global-stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="4" stroke="#0891b2" strokeWidth="2" fill="none"/>
                <path d="M16 20 L20 24 L32 12" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>35.6 Million</h3>
              <p>People suffer from drug use disorders (UNODC)</p>
              <span className="stat-source">Source: UN World Drug Report 2022</span>
            </div>
          </div>

          <div className="global-stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#f59e0b" strokeWidth="2" fill="none"/>
                <path d="M24 8 C30 8 35 13 35 19 C35 25 30 30 24 30 C18 30 13 25 13 19 C13 13 18 8 24 8 Z" stroke="#f59e0b" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="19" r="3" fill="#f59e0b"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>13%</h3>
              <p>Increase in drug use over the past decade (WHO)</p>
              <span className="stat-source">Source: WHO Global Health Estimates</span>
            </div>
          </div>

          <div className="global-stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="8" width="24" height="32" rx="4" stroke="#0891b2" strokeWidth="2" fill="none"/>
                <path d="M20 16 L28 16 M20 20 L28 20 M20 24 L28 24" stroke="#0891b2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>1 in 7</h3>
              <p>People aged 15-64 used drugs in 2020 (UNODC)</p>
              <span className="stat-source">Source: UN World Drug Report 2022</span>
            </div>
          </div>

          <div className="global-stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#ef4444" strokeWidth="2" fill="none"/>
                <path d="M24 8 L24 24 M24 24 L32 32 M24 24 L16 32" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="24" cy="8" r="2" fill="#ef4444"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>75%</h3>
              <p>Of drug-related deaths are preventable (WHO)</p>
              <span className="stat-source">Source: WHO Global Health Observatory</span>
            </div>
          </div>
        </div>

        <div className="global-stats-highlight">
          <div className="highlight-content">
            <h3>Economic Impact</h3>
            <div className="highlight-stats">
              <div className="highlight-stat">
                <span className="highlight-number">$193 Billion</span>
                <span className="highlight-label">Annual global cost of drug abuse</span>
              </div>
              <div className="highlight-stat">
                <span className="highlight-number">2.3%</span>
                <span className="highlight-label">Of global GDP lost to drug abuse</span>
              </div>
            </div>
            <p className="highlight-source">Source: UNODC Economic Impact Study 2021</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalStats


