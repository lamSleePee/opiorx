import React from 'react'

const BoltIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const DNAIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4c3 3 7 3 10 0"/>
    <path d="M7 20c3-3 7-3 10 0"/>
    <path d="M7 4v4M17 4v4M7 16v4M17 16v4"/>
  </svg>
)

const RobotIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="12" rx="2"/>
    <circle cx="9" cy="13" r="1.5"/>
    <circle cx="15" cy="13" r="1.5"/>
    <path d="M12 7V4"/>
  </svg>
)

const FlipCard = ({ frontIcon, title, subtitle, items }) => (
  <div className="bi-card">
    <div className="bi-card-inner">
      <div className="bi-card-front">
        <div className="bi-icon">{frontIcon}</div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="bi-card-back">
        <h4>{title.includes('Aptamer') ? 'Technical Advantages' : title.includes('FRET') ? 'Performance Benefits' : 'AI Capabilities'}</h4>
        <ul>
          {items.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
      </div>
    </div>
  </div>
)

const BreakthroughInnovations = () => {
  return (
    <section className="breakthrough-section">
      <div className="breakthrough-container">
        <div className="breakthrough-header">
          <h2>Three Breakthrough Innovations</h2>
          <p>Our proprietary technology stack delivers competitive advantages</p>
        </div>
        <div className="breakthrough-grid">
          <FlipCard
            frontIcon={<DNAIcon />}
            title="Computational Aptamer Mastery"
            subtitle="Algorithmic optimization eliminates SELEX bottlenecks"
            items={[
              'Weeks vs months adaptation',
              'Proprietary algorithms',
              '10x development speed',
              'Affinity optimization',
            ]}
          />
          <FlipCard
            frontIcon={<BoltIcon />}
            title="FRET‑Quantum Enhancement"
            subtitle="Quantitative precision beyond colorimetry"
            items={[
              'Actionable concentration data',
              'High sensitivity & specificity',
              'Real‑time monitoring',
              'Lower detection limits',
            ]}
          />
          <FlipCard
            frontIcon={<RobotIcon />}
            title="AI‑Powered Intelligence"
            subtitle="ML transforms results into insights"
            items={[
              'No specialized training',
              'Predictive analytics',
              'Automated interpretation',
              'Continuous learning',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default BreakthroughInnovations


