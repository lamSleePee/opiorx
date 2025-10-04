import React from 'react'

// Inline SVGs matching the palette
const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="12" cy="12" r="1"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z"/>
  </svg>
)

const ChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <rect x="6" y="12" width="3" height="6"/>
    <rect x="11" y="9" width="3" height="9"/>
    <rect x="16" y="6" width="3" height="12"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
)

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
)

const MolecularIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
    <circle cx="12" cy="12" r="10"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5,12 12,5 19,12"/>
  </svg>
)

const ProjectDescription = () => {
  return (
    <section className="project-description-section">
      <div className="pd-container">
        <header className="pd-header">
          <div className="pd-hero">
            <div className="pd-rotor" aria-hidden="true">
              <svg width="280" height="280" viewBox="0 0 280 280">
                <defs>
                  <linearGradient id="pdRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe"/>
                    <stop offset="100%" stopColor="#0891b2"/>
                  </linearGradient>
                </defs>
                <circle cx="140" cy="140" r="120" fill="none" stroke="url(#pdRing)" strokeWidth="8" strokeLinecap="round" strokeDasharray="12 14"/>
              </svg>
            </div>
            <div className="pd-hero-center">
              <h1 className="pd-title">Project Description</h1>
              <p className="pd-subtitle">Overview of OpioRX goals, scope, and technology stack.</p>
            </div>
          </div>
        </header>

        <div className="pd-card">
          <h3>Mission</h3>
          <p>OpioRX enables rapid, accurate, and accessible detection of opioid exposure using saliva biosensors, paired with real‑time analytics and global context.</p>
        </div>

        <div className="pd-grid">
          <div className="pd-card">
            <div className="pd-card-head">
              <span className="pd-icon"><TargetIcon /></span>
              <h4>Key Features</h4>
            </div>
            <ul className="pd-list">
              <li>Saliva biosensor pipeline</li>
              <li>Interactive global analytics</li>
              <li>Country crisis intelligence</li>
              <li>Clinical decision support</li>
            </ul>
          </div>

          <div className="pd-card">
            <div className="pd-card-head">
              <span className="pd-icon"><ChartIcon /></span>
              <h4>Technology</h4>
            </div>
            <ul className="pd-list">
              <li>React, Vite, Highcharts</li>
              <li>GSAP interactions</li>
              <li>Modular components</li>
              <li>Responsive UI</li>
            </ul>
          </div>

          <div className="pd-card">
            <div className="pd-card-head">
              <span className="pd-icon"><ShieldIcon /></span>
              <h4>Outcomes</h4>
            </div>
            <ul className="pd-list">
              <li>Faster triage</li>
              <li>Actionable insights</li>
              <li>Risk reduction</li>
              <li>Better coverage</li>
            </ul>
          </div>
        </div>

        <div className="pd-why">
          <h3>Why OpioRX</h3>
          <div className="pd-why-grid">
            <div className="pd-why-item">
              <ClockIcon />
              <div>
                <h5>Real‑time</h5>
                <p>From signal to decision in minutes.</p>
              </div>
            </div>
            <div className="pd-why-item">
              <ShieldIcon />
              <div>
                <h5>Reliable</h5>
                <p>Validated methods and robust UI.</p>
              </div>
            </div>
            <div className="pd-why-item">
              <ChartIcon />
              <div>
                <h5>Contextual</h5>
                <p>Global maps and country detail.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DBTL Methodology Section */}
        <div className="dbtl-intro">
          <p>Each DBTL cycle builds upon lessons learned from previous iterations, incorporating both computational insights and experimental validation to achieve optimal aptamer performance for synthetic opioid detection.</p>
        </div>

        {/* DBTL Cycle 1: Initial In Silico Design */}
        <div className="dbtl-cycle">
          <div className="dbtl-header">
            <TargetIcon />
            <h2>DBTL Cycle 1: Initial In Silico Design</h2>
          </div>
          
          <div className="dbtl-grid">
            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">&lt; &gt;</span>
                <h3>Design</h3>
              </div>
              <p>Comprehensive literature review of aptamer sequences targeting fentanyl, oxycodone, tramadol, and methadone. Multiple sequence alignment revealed conserved and variable regions. Secondary structure predictions identified stem-loop motifs and stability patterns.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">✓</span>
                <h3>Test</h3>
              </div>
              <p>Docking results enabled selection of the most promising sequence as lead candidate for novel aptamer design with potential opioid-binding specificity.</p>
              <button className="dbtl-preview-btn">Preview</button>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">🏭</span>
                <h3>Build</h3>
              </div>
              <p>Molecular docking studies using ZDock protocol in BIOVIA Discovery Studio. Simulations provided insights into structural stability and binding affinity of aptamer-opioid interactions.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">📈</span>
                <h3>Learn</h3>
              </div>
              <p>Many predicted interactions were unfavorable due to rigid molecule treatment, causing steric clashes. This highlighted the need for more advanced simulation strategies with ligand flexibility.</p>
            </div>
          </div>

          <div className="dbtl-challenge">
            <h4>Key Challenge Identified:</h4>
            <p>The ZDock algorithm treated opioids as rigid molecules, neglecting ligand flexibility and contributing to steric clashes that reduced binding prediction accuracy.</p>
          </div>
        </div>

        {/* DBTL Cycle 1: Iteration with LibDock */}
        <div className="dbtl-cycle">
          <div className="dbtl-header">
            <LightningIcon />
            <h2>DBTL Cycle 1: Iteration with LibDock</h2>
          </div>
          
          <div className="dbtl-grid">
            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">&lt; &gt;</span>
                <h3>Design</h3>
              </div>
              <p>To overcome steric clashes and unfavorable interactions, various docking protocols were evaluated for improved flexibility and accuracy.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">✓</span>
                <h3>Test</h3>
              </div>
              <p>Molecular docking carried out using LibDock protocol with binding spheres defined based on structural data from secondary structure analysis.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">🏭</span>
                <h3>Build</h3>
              </div>
              <p>LibDock protocol was implemented to dock aptamer sequences against target opioids. Loop regions from secondary structures defined binding spheres, as these regions are crucial for aptamer-target interactions.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">📈</span>
                <h3>Learn</h3>
              </div>
              <p>Torsional angles played pivotal roles in DNA aptamer interactions. Steric clashes were resolved, molecules interacted favorably showing stronger interactions and higher target affinity. Potential aptamer was successfully identified.</p>
            </div>
          </div>

          <div className="dbtl-improvement">
            <h4>Protocol Improvement:</h4>
            <p>The transition from ZDock to LibDock protocol successfully resolved structural conflicts and improved binding predictions through enhanced molecular flexibility modeling.</p>
          </div>
        </div>

        {/* DBTL Cycle 2: Point Mutation Optimization */}
        <div className="dbtl-cycle">
          <div className="dbtl-header">
            <MolecularIcon />
            <h2>DBTL Cycle 2: Point Mutation Optimization</h2>
          </div>
          
          <div className="dbtl-grid">
            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">&lt; &gt;</span>
                <h3>Design</h3>
              </div>
              <p>Aptamer sequences targeting synthetic opioids (fentanyl, methadone, oxycodone, tramadol) were curated from literature. Secondary structure analysis and molecular docking identified candidate sequences with highest affinity and structural stability.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">✓</span>
                <h3>Test</h3>
              </div>
              <p>Each mutated aptamer variant underwent rigorous evaluation through molecular docking and secondary structure prediction to quantify impact on binding affinity and conformational stability.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">🏭</span>
                <h3>Build</h3>
              </div>
              <p>Site-specific point mutations guided by affinity heat maps from docking results. Nucleotide positions with strong binding interactions were selectively mutated to generate variants aimed at enhancing binding characteristics.</p>
            </div>

            <div className="dbtl-card">
              <div className="dbtl-card-header">
                <span className="dbtl-icon">📈</span>
                <h3>Learn</h3>
              </div>
              <p>Point mutations caused notable alterations in aptamer stability (ΔG increased up to 3-fold, diminishing binding). However, select mutations yielded 2-3x binding affinity increase while moderately elevating ΔG (~2x), suggesting optimal stability-affinity balance.</p>
            </div>
          </div>

          <div className="dbtl-metrics">
            <div className="dbtl-metric-card">
              <h4>Performance Metrics</h4>
              <div className="metric-buttons">
                <span className="metric-btn primary">Binding Affinity: <strong>2-3x Improvement</strong></span>
                <span className="metric-btn secondary">Folding Energy: <strong>~2x ΔG Increase</strong></span>
              </div>
            </div>

            <div className="dbtl-metric-card">
              <h4>Advanced Analysis</h4>
              <p>Enhanced variants underwent comparative post-docking analyses against original sequences. Molecular dynamics simulations assessed thermodynamic stability and binding kinetics in explicit aqueous environments.</p>
            </div>
          </div>
        </div>

        {/* Engineering Achievements Summary */}
        <div className="dbtl-achievements">
          <div className="dbtl-header">
            <CheckIcon />
            <h2>Engineering Achievements Summary</h2>
          </div>
          
          <div className="achievement-metrics">
            <div className="achievement-card">
              <span className="achievement-number">3</span>
              <span className="achievement-label">DBTL Cycles Completed</span>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">2-3x</span>
              <span className="achievement-label">Binding Affinity Improvement</span>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">5+</span>
              <span className="achievement-label">Target Opioids Addressed</span>
            </div>
          </div>

          <div className="achievement-details">
            <h4>Key Engineering Accomplishments</h4>
            <div className="achievement-columns">
              <div className="achievement-column">
                <ul>
                  <li>Resolved steric clash issues through protocol optimization</li>
                  <li>Maintained structural stability while enhancing performance</li>
                  <li>Implemented molecular dynamics validation</li>
                </ul>
              </div>
              <div className="achievement-column">
                <ul>
                  <li>Achieved significant binding affinity improvements</li>
                  <li>Developed systematic mutation strategy</li>
                  <li>Created reproducible DBTL methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Engineering Directions */}
        <div className="dbtl-future">
          <div className="dbtl-header">
            <ArrowUpIcon />
            <h2>Future Engineering Directions</h2>
          </div>
          
          <p>Future DBTL cycles will focus on system integration, real-world validation, and scalability. We plan to implement machine learning-guided design optimization and expand to emerging synthetic opioids.</p>
          
          <div className="future-columns">
            <div className="future-column">
              <h4>Next Phase Priorities</h4>
              <ul>
                <li>Integration with FRET-based detection system</li>
                <li>Clinical sample validation studies</li>
                <li>Field deployment optimization</li>
                <li>Cost-effectiveness analysis</li>
              </ul>
            </div>
            <div className="future-column">
              <h4>Advanced Technologies</h4>
              <ul>
                <li>Machine learning-guided aptamer design</li>
                <li>High-throughput virtual screening</li>
                <li>Ensemble docking methodologies</li>
                <li>Automated DBTL pipeline development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription


