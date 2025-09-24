import React, { useState } from 'react'

// SVG Icons for testing methods
const LCIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <circle cx="8" cy="8" r="2"/>
    <path d="M14 8l-2 2-2-2"/>
  </svg>
)

const GCIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M6 8h12"/>
    <path d="M6 12h8"/>
    <path d="M6 16h4"/>
  </svg>
)

const UHPLCIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M6 8h12"/>
    <path d="M6 12h12"/>
    <path d="M6 16h8"/>
    <circle cx="18" cy="8" r="2"/>
  </svg>
)

const ImmunoassayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12l2 2 4-4"/>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
  </svg>
)

const LimitationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
)

const DollarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const AlertTriangleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const TestTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2v6l-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l-2-2V2"/>
    <path d="M9 2h6"/>
    <path d="M9 8h6"/>
  </svg>
)

// Simple UI icons
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
)

// Domain-specific icons
const BullseyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1"/>
  </svg>
)

const RadarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 12l6-3"/>
    <path d="M12 3v9H3"/>
  </svg>
)

const StethoscopeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3v5a5 5 0 0 0 10 0V3"/>
    <circle cx="18" cy="17" r="3"/>
    <path d="M13 14v2a4 4 0 0 0 4 4"/>
  </svg>
)

const GavelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4l6 6"/>
    <path d="M1 21l12-12"/>
    <rect x="12" y="2" width="6" height="4" transform="rotate(45 12 2)"/>
    <path d="M7 19h8"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z"/>
  </svg>
)

const GaugeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13a8 8 0 1 0-16 0"/>
    <path d="M12 13l4-4"/>
  </svg>
)

const QuestionIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.5 9a3 3 0 1 1 4.5 2.6c-.7.4-1 1-1 1.9"/>
    <line x1="12" y1="17" x2="12" y2="17"/>
  </svg>
)

const IntersectIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="12" r="5"/>
    <circle cx="15" cy="12" r="5"/>
  </svg>
)

// Icon selector by keyword
const getItemIcon = (type, label) => {
  const t = (label || '').toLowerCase()
  if (type === 'advantages') {
    if (t.includes('sensitivity') || t.includes('rapid') || t.includes('fast')) return <RadarIcon />
    if (t.includes('specificity') || t.includes('resolution')) return <BullseyeIcon />
    return <CheckIcon />
  }
  if (type === 'applications') {
    if (t.includes('clinical') || t.includes('diagnostics') || t.includes('poc') || t.includes('screening')) return <StethoscopeIcon />
    if (t.includes('forensic') || t.includes('legal')) return <GavelIcon />
    if (t.includes('workplace') || t.includes('compliance')) return <ShieldIcon />
    if (t.includes('throughput') || t.includes('high‑throughput')) return <GaugeIcon />
    return <BriefcaseIcon />
  }
  if (type === 'limitations') {
    if (t.includes('cost')) return <DollarIcon />
    if (t.includes('hardware')) return <DollarIcon />
    if (t.includes('matrix')) return <TestTubeIcon />
    if (t.includes('cross')) return <IntersectIcon />
    if (t.includes('novel')) return <QuestionIcon />
    if (t.includes('pressure') || t.includes('fast')) return <GaugeIcon />
    if (t.includes('derivat')) return <TestTubeIcon />
    if (t.includes('non‑volatile') || t.includes('non-volatile')) return <AlertTriangleIcon />
    return <AlertTriangleIcon />
  }
  return <CheckIcon />
}

const TestingMethods = () => {
  const [activeTab, setActiveTab] = useState(0)

  const testingMethods = [
    {
      id: 'lc-ms-ms',
      name: 'LC-MS/MS',
      fullName: 'Liquid Chromatography-Tandem Mass Spectrometry',
      icon: <LCIcon />,
      description: 'LC-MS/MS is considered the gold standard for opioid analysis, providing both screening and quantitative confirmation capabilities. This method offers exceptional sensitivity and specificity for detecting opioid compounds and their metabolites.',
      advantages: [ 'High sensitivity', 'High specificity' ],
      applications: [ 'Clinical', 'Forensic' ],
      limitations: [
        'Costly hardware',
        'Matrix effects'
      ]
    },
    {
      id: 'gc-ms',
      name: 'GC-MS',
      fullName: 'Gas Chromatography-Mass Spectrometry',
      icon: <GCIcon />,
      description: 'GC-MS serves as a highly specific confirmatory method, particularly mandated in forensic and workplace settings. This technique provides excellent separation and identification of volatile and semi-volatile compounds.',
      advantages: [ 'High specificity', 'Accurate' ],
      applications: [ 'Forensic', 'Workplace' ],
      limitations: [
        'Non‑volatile limits',
        'Derivatization'
      ]
    },
    {
      id: 'uhplc',
      name: 'UHPLC',
      fullName: 'Ultra-High Performance Liquid Chromatography',
      icon: <UHPLCIcon />,
      description: 'UHPLC represents a significant advancement in analytical chemistry for opioid detection. This technology combines enhanced separation efficiency, improved sensitivity, and faster analysis times compared to conventional HPLC methods.',
      advantages: [ 'Fast', 'High resolution' ],
      applications: [ 'High‑throughput', 'Diagnostics' ],
      limitations: [
        'High pressure',
        'Costly'
      ]
    },
    {
      id: 'immunoassay',
      name: 'Immunoassays',
      fullName: 'Immunoassay Screening',
      icon: <ImmunoassayIcon />,
      description: 'Immunoassays are used for initial screening with specific cutoff levels (e.g., 3,000 ng/mL for clinical testing), though they require confirmation by more specific methods like GC-MS. These tests provide rapid preliminary results.',
      advantages: [ 'Rapid', 'Low cost' ],
      applications: [ 'Screening', 'POC' ],
      limitations: [
        'Cross‑reactivity',
        'Misses novelties'
      ]
    }
  ]

  return (
    <section className="testing-methods-section">
      <div className="testing-methods-container">
        <div className="section-header">
          <h2>Current Testing Methods & Limitations</h2>
          <p>Comprehensive overview of laboratory-based opioid detection techniques and their constraints</p>
        </div>

        <div className="testing-methods-content">
          <div className="methods-tabs">
            <div className="tab-navigation">
              {testingMethods.map((method, index) => (
                <button
                  key={method.id}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="tab-icon">{method.icon}</div>
                  <div className="tab-label">
                    <span className="tab-name">{method.name}</span>
                    <span className="tab-full-name">{method.fullName}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="tab-content">
              <div className="method-details">
                <div className="method-header">
                  <div className="method-icon">
                    {testingMethods[activeTab].icon}
                  </div>
                  <div className="method-title">
                    <h3>{testingMethods[activeTab].fullName}</h3>
                    <p className="method-description">{testingMethods[activeTab].description}</p>
                  </div>
                </div>

                <div className="method-info-grid">
                  <div className="info-card">
                    <h4>Key Advantages</h4>
                    <ul>
                      {testingMethods[activeTab].advantages.map((advantage, index) => (
                        <li key={index} className="bullet-with-icon"><span className="li-icon">{getItemIcon('advantages', advantage)}</span>{advantage}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-card">
                    <h4>Primary Applications</h4>
                    <ul>
                      {testingMethods[activeTab].applications.map((application, index) => (
                        <li key={index} className="bullet-with-icon"><span className="li-icon">{getItemIcon('applications', application)}</span>{application}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-card">
                    <h4>Limitations</h4>
                    <ul>
                      {testingMethods[activeTab].limitations.map((lim, index) => (
                        <li key={index} className="bullet-with-icon"><span className="li-icon">{getItemIcon('limitations', lim)}</span>{lim}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestingMethods


