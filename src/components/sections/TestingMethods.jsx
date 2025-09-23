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

const TestingMethods = () => {
  const [activeTab, setActiveTab] = useState(0)

  const testingMethods = [
    {
      id: 'lc-ms-ms',
      name: 'LC-MS/MS',
      fullName: 'Liquid Chromatography-Tandem Mass Spectrometry',
      icon: <LCIcon />,
      description: 'LC-MS/MS is considered the gold standard for opioid analysis, providing both screening and quantitative confirmation capabilities. This method offers exceptional sensitivity and specificity for detecting opioid compounds and their metabolites.',
      advantages: [
        'High sensitivity and specificity',
        'Quantitative confirmation capabilities',
        'Suitable for complex biological matrices',
        'Can detect multiple compounds simultaneously'
      ],
      applications: [
        'Clinical toxicology screening',
        'Forensic analysis',
        'Pharmaceutical quality control',
        'Research and development'
      ]
    },
    {
      id: 'gc-ms',
      name: 'GC-MS',
      fullName: 'Gas Chromatography-Mass Spectrometry',
      icon: <GCIcon />,
      description: 'GC-MS serves as a highly specific confirmatory method, particularly mandated in forensic and workplace settings. This technique provides excellent separation and identification of volatile and semi-volatile compounds.',
      advantages: [
        'High specificity and accuracy',
        'Mandated in forensic settings',
        'Excellent compound separation',
        'Established library databases'
      ],
      applications: [
        'Forensic toxicology',
        'Workplace drug testing',
        'Regulatory compliance',
        'Legal proceedings'
      ]
    },
    {
      id: 'uhplc',
      name: 'UHPLC',
      fullName: 'Ultra-High Performance Liquid Chromatography',
      icon: <UHPLCIcon />,
      description: 'UHPLC represents a significant advancement in analytical chemistry for opioid detection. This technology combines enhanced separation efficiency, improved sensitivity, and faster analysis times compared to conventional HPLC methods.',
      advantages: [
        'Enhanced separation efficiency',
        'Improved sensitivity',
        'Faster analysis times',
        'Higher resolution'
      ],
      applications: [
        'High-throughput screening',
        'Research laboratories',
        'Clinical diagnostics',
        'Pharmaceutical analysis'
      ]
    },
    {
      id: 'immunoassay',
      name: 'Immunoassays',
      fullName: 'Immunoassay Screening',
      icon: <ImmunoassayIcon />,
      description: 'Immunoassays are used for initial screening with specific cutoff levels (e.g., 3,000 ng/mL for clinical testing), though they require confirmation by more specific methods like GC-MS. These tests provide rapid preliminary results.',
      advantages: [
        'Rapid screening results',
        'Cost-effective initial testing',
        'High throughput capability',
        'Easy to automate'
      ],
      applications: [
        'Initial screening',
        'Point-of-care testing',
        'High-volume testing',
        'Emergency screening'
      ]
    }
  ]

  const limitations = [
    {
      category: 'Detection Window Constraints',
      icon: <ClockIcon />,
      items: [
        'Most opioids have relatively short detection windows in blood (6-24 hours) and urine (1-3 days for most opioids, longer for methadone)',
        'Synthetic fentanyl analogs may have even shorter detection periods',
        'Hair testing offers longer windows but requires 1-2 weeks for incorporation after use'
      ]
    },
    {
      category: 'Sensitivity and Specificity Issues',
      icon: <AlertTriangleIcon />,
      items: [
        'Some opioids metabolize to the same compounds (codeine and heroin both produce morphine)',
        'Cross-reactivity between structurally similar opioids can cause false positives',
        'Novel synthetic opioids may not be detected by standard screening panels',
        'Low-dose therapeutic use may fall below detection thresholds'
      ]
    },
    {
      category: 'Sample Matrix Limitations',
      icon: <TestTubeIcon />,
      items: [
        'Urine samples can be diluted, substituted, or adulterated',
        'Blood samples require rapid processing and proper storage',
        'Postmortem samples may show redistribution artifacts affecting interpretation',
        'Hair samples can be affected by cosmetic treatments or environmental contamination'
      ]
    },
    {
      category: 'Instrumentation Constraints',
      icon: <LCIcon />,
      items: [
        'GC-MS and LC-MS/MS require expensive equipment and skilled operators',
        'Method validation needed for each new synthetic opioid analog',
        'Quantitative accuracy can be affected by matrix effects',
        'Equipment downtime impacts turnaround times'
      ]
    },
    {
      category: 'Operational Limitations',
      icon: <ClockIcon />,
      items: [
        'Confirmatory testing typically takes 24-72 hours or longer',
        'Batch processing may delay individual results',
        'Complex cases requiring additional testing extend timelines',
        'Emergency situations may not allow adequate testing time'
      ]
    },
    {
      category: 'Cost Considerations',
      icon: <DollarIcon />,
      items: [
        'Comprehensive panels testing multiple opioids are expensive',
        'Confirmatory testing adds significant costs',
        'Specialized testing for novel synthetics requires method development',
        'Quality control and proficiency testing add ongoing expenses'
      ]
    },
    {
      category: 'Interpretive Challenges',
      icon: <AlertTriangleIcon />,
      items: [
        'Individual metabolism differences affect detection and concentration',
        'Tolerance development can alter expected concentration ranges',
        'Drug interactions may affect metabolism and detection',
        'Route of administration impacts detection patterns'
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
                        <li key={index}>{advantage}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-card">
                    <h4>Primary Applications</h4>
                    <ul>
                      {testingMethods[activeTab].applications.map((application, index) => (
                        <li key={index}>{application}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="limitations-section">
            <div className="limitations-header">
              <h3>Laboratory Testing Limitations</h3>
              <p>Key constraints and challenges in current opioid detection methodologies</p>
            </div>

            <div className="limitations-grid">
              {limitations.map((limitation, index) => (
                <div key={index} className="limitation-card">
                  <div className="limitation-header">
                    <div className="limitation-icon">{limitation.icon}</div>
                    <h4>{limitation.category}</h4>
                  </div>
                  <ul className="limitation-items">
                    {limitation.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestingMethods
