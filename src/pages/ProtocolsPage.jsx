import React from 'react'
import { FlaskConical, Microscope, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react'
import './ProtocolsPage.css'

const ProtocolsPage = () => {
  return (
    <div className="protocols-page">
      {/* Hero Section */}
      <div className="protocols-hero">
        <div className="protocols-hero-content">
          <div className="protocols-hero-decoration">
            <div className="protocols-hero-blob protocols-hero-blob-1"></div>
            <div className="protocols-hero-blob protocols-hero-blob-2"></div>
          </div>
          
          <div className="protocols-hero-text">
            <h1 className="protocols-hero-title">Lab Protocols</h1>
            <p className="protocols-hero-description">
              Comprehensive experimental protocols for gold nanoparticle synthesis, 
              FRET-based detection, and analytical optimization for opioid detection.
            </p>
          </div>
        </div>
      </div>

      {/* Protocol Sections */}
      <div className="protocols-content">
        
        {/* Protocol 1: Synthesis of Gold Nanoparticles */}
        <div className="protocol-section">
          <div className="protocol-header">
            <div className="protocol-icon">
              <FlaskConical className="protocol-icon-svg" />
            </div>
            <div className="protocol-title-section">
              <h2 className="protocol-title">Synthesis of Gold Nanoparticles (AuNPs)</h2>
              <p className="protocol-subtitle">Chemical reduction method using sodium borohydride</p>
            </div>
          </div>

          <div className="protocol-steps">
            <div className="protocol-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Solution Preparation</h4>
                <p>Gold nanoparticles were synthesized by chemical reduction of chloroauric acid (HAuCl₄) using sodium borohydride (NaBH₄) as the reducing agent and trisodium citrate as the stabilizing/capping agent.</p>
              </div>
            </div>

            <div className="protocol-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Reaction Setup</h4>
                <p>A 50 mL aqueous solution containing 0.25 mM HAuCl₄ and 0.25 mM trisodium citrate was prepared under continuous magnetic stirring.</p>
              </div>
            </div>

            <div className="protocol-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Reduction Process</h4>
                <p>0.6 mL of freshly prepared, ice-cold 0.1 M NaBH₄ was added dropwise to the solution under vigorous stirring.</p>
              </div>
            </div>

            <div className="protocol-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Visual Confirmation</h4>
                <p>The reaction caused an immediate color change from pale yellow to deep red, indicating AuNP formation.</p>
              </div>
            </div>

            <div className="protocol-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Stabilization</h4>
                <p>The mixture was stirred and kept undisturbed for 15 minutes to ensure complete nanoparticle reduction and stabilization.</p>
              </div>
            </div>
          </div>

          <div className="protocol-characterization">
            <h3 className="characterization-title">Characterization of Synthesized AuNPs</h3>
            <div className="characterization-grid">
              <div className="characterization-item">
                <Microscope className="char-icon" />
                <div className="char-content">
                  <h4>Transmission Electron Microscopy (TEM)</h4>
                  <p>Spherical nanoparticles with an average diameter of 10 ± 2 nm</p>
                </div>
              </div>
              <div className="characterization-item">
                <Target className="char-icon" />
                <div className="char-content">
                  <h4>SEM and TEM Analysis</h4>
                  <p>Uniform dispersion and particle sizes ranging 8–12 nm</p>
                </div>
              </div>
              <div className="characterization-item">
                <Zap className="char-icon" />
                <div className="char-content">
                  <h4>UV–Visible Spectroscopy</h4>
                  <p>Characteristic SPR band at ~520 nm, confirming AuNP formation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Protocol 2: FRET Pair Establishment */}
        <div className="protocol-section">
          <div className="protocol-header">
            <div className="protocol-icon">
              <Zap className="protocol-icon-svg" />
            </div>
            <div className="protocol-title-section">
              <h2 className="protocol-title">Establishment of FRET Pair and Conjugation</h2>
              <p className="protocol-subtitle">FRET-based detection system for fentanyl</p>
            </div>
          </div>

          <div className="protocol-details">
            <div className="protocol-detail-card">
              <h4>FRET Donor: Fluorescein Isothiocyanate (FITC)</h4>
              <ul>
                <li>Excitation: 495 nm</li>
                <li>Emission: ~530 nm</li>
              </ul>
            </div>

            <div className="protocol-detail-card">
              <h4>FRET Acceptor: Graphene Oxide (GO)</h4>
              <ul>
                <li>Spectral absorption overlapping FITC emission</li>
                <li>Enables efficient resonance energy transfer</li>
              </ul>
            </div>

            <div className="protocol-detail-card">
              <h4>Optimization Parameters</h4>
              <ul>
                <li>Donor-to-acceptor ratio: 1:1</li>
                <li>Maximum fluorescence quenching in absence of fentanyl</li>
                <li>Effective complex formation between FITC and GO</li>
              </ul>
            </div>
          </div>

          <div className="protocol-mechanism">
            <h3>FRET-Based Assay for Fentanyl Detection</h3>
            <div className="mechanism-steps">
              <div className="mechanism-step">
                <div className="mechanism-icon">
                  <CheckCircle className="mechanism-icon-svg" />
                </div>
                <div className="mechanism-content">
                  <h4>Detection Principle</h4>
                  <p>The assay detects fentanyl by modulating FRET efficiency between FITC and GO.</p>
                </div>
              </div>

              <ArrowRight className="mechanism-arrow" />

              <div className="mechanism-step">
                <div className="mechanism-icon">
                  <Target className="mechanism-icon-svg" />
                </div>
                <div className="mechanism-content">
                  <h4>Absence of Fentanyl</h4>
                  <p>Efficient energy transfer quenches FITC fluorescence.</p>
                </div>
              </div>

              <ArrowRight className="mechanism-arrow" />

              <div className="mechanism-step">
                <div className="mechanism-icon">
                  <Zap className="mechanism-icon-svg" />
                </div>
                <div className="mechanism-content">
                  <h4>Fentanyl Addition</h4>
                  <p>Target binding disrupts donor–acceptor coupling, leading to fluorescence recovery.</p>
                </div>
              </div>
            </div>

            <div className="assay-parameters">
              <h4>Assay Parameters</h4>
              <ul>
                <li>Excitation wavelength: 495 nm</li>
                <li>Emission monitoring: 530 nm</li>
                <li>Linear fluorescence response with increasing fentanyl concentrations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Protocol 3: Optimization */}
        <div className="protocol-section">
          <div className="protocol-header">
            <div className="protocol-icon">
              <Target className="protocol-icon-svg" />
            </div>
            <div className="protocol-title-section">
              <h2 className="protocol-title">Optimization of Analytical Performance</h2>
              <p className="protocol-subtitle">Parameter optimization for maximum sensitivity</p>
            </div>
          </div>

          <div className="optimization-grid">
            <div className="optimization-card">
              <h4>Concentration Optimization</h4>
              <div className="optimization-details">
                <div className="optimization-item">
                  <span className="param-label">GO concentrations:</span>
                  <span className="param-value">1 to 50 µg/mL</span>
                </div>
                <div className="optimization-item">
                  <span className="param-label">FITC concentrations:</span>
                  <span className="param-value">20 to 100 nM</span>
                </div>
              </div>
            </div>

            <div className="optimization-card">
              <h4>Experimental Setup</h4>
              <div className="optimization-details">
                <div className="optimization-item">
                  <span className="param-label">Plate type:</span>
                  <span className="param-value">Black, flat-bottom 96-well plates</span>
                </div>
                <div className="optimization-item">
                  <span className="param-label">Conditions:</span>
                  <span className="param-value">Controlled buffer conditions</span>
                </div>
              </div>
            </div>

            <div className="optimization-card">
              <h4>Performance Metrics</h4>
              <div className="optimization-details">
                <div className="optimization-item">
                  <span className="param-label">Linearity range:</span>
                  <span className="param-value">5 nmol to 100 nmol</span>
                </div>
                <div className="optimization-item">
                  <span className="param-label">LOD:</span>
                  <span className="param-value">Pathologically relevant saliva concentrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="protocol-summary">
          <div className="summary-header">
            <h2>Summary of Detection Principle</h2>
            <p>Complete overview of the FRET-based detection mechanism</p>
          </div>

          <div className="summary-steps">
            <div className="summary-step">
              <div className="summary-step-number">1</div>
              <div className="summary-step-content">
                <h4>Resonance Energy Transfer</h4>
                <p>Occurs between FITC (donor) and GO (acceptor)</p>
              </div>
            </div>

            <div className="summary-step">
              <div className="summary-step-number">2</div>
              <div className="summary-step-content">
                <h4>No Fentanyl Present</h4>
                <p>High FRET efficiency → strong fluorescence quenching</p>
              </div>
            </div>

            <div className="summary-step">
              <div className="summary-step-number">3</div>
              <div className="summary-step-content">
                <h4>Fentanyl Binding</h4>
                <p>Binding increases donor–acceptor distance → reduced FRET efficiency → fluorescence recovery</p>
              </div>
            </div>

            <div className="summary-step">
              <div className="summary-step-number">4</div>
              <div className="summary-step-content">
                <h4>Quantitative Detection</h4>
                <p>Fluorescence recovery is proportional to fentanyl concentration, enabling quantitative detection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtocolsPage
