import React from 'react';
import { 
  Calendar,
  FlaskConical,
  Dna,
  Microscope,
  TestTube,
  FileText,
  Search,
  Target,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Beaker,
  Atom
} from 'lucide-react';
import './SafetyPage.css';

export default function SafetyPage() {
  const experiments = [
    {
      date: "Jan 1, 2025",
      task: "Literature review – collection of aptamer studies for opioids (Fentanyl, Oxycodone, Tramadol, Codeine, Methadone)",
      target: "—",
      icon: BookOpen,
      color: "blue"
    },
    {
      date: "Jan 15, 2025",
      task: "Retrieval and curation of Fentanyl original aptamer sequences (FEN1–FEN8) from literature",
      target: "Fentanyl (Original)",
      icon: Dna,
      color: "red"
    },
    {
      date: "Feb 1, 2025",
      task: "Secondary structure prediction using Mfold/RNAfold; analysis of stem–loop regions, GC%",
      target: "Fentanyl (Original)",
      icon: Microscope,
      color: "red"
    },
    {
      date: "Feb 15, 2025",
      task: "Tertiary structure modelling and optimization using 3dRNA/DNA web server",
      target: "Fentanyl (Original)",
      icon: Atom,
      color: "red"
    },
    {
      date: "Mar 1, 2025",
      task: "Docking setup and baseline docking (LibDock) for FEN1–FEN8",
      target: "Fentanyl (Original)",
      icon: Target,
      color: "red"
    },
    {
      date: "Mar 15, 2025",
      task: "Docking analysis and thermodynamic interpretation (ΔG, LibDock scores, interaction mapping)",
      target: "Fentanyl (Original)",
      icon: Search,
      color: "red"
    },
    {
      date: "Mar 30, 2025",
      task: "Truncation and point-mutation design for best Fentanyl aptamer (FEN8; residues 28–29 etc.)",
      target: "Fentanyl (Mutant Design)",
      icon: Zap,
      color: "orange"
    },
    {
      date: "Apr 15, 2025",
      task: "Docking of mutated Fentanyl aptamers (FEN8_1–FEN8_15); thermodynamic and interaction comparison",
      target: "Fentanyl (Mutated)",
      icon: TestTube,
      color: "orange"
    },
    {
      date: "Apr 30, 2025",
      task: "In-silico modification study — thiol/amine/biotin/FITC modifications at 5′/3′ ends; structural optimization, FRET-pair validation, docking setup",
      target: "Modified Aptamers (primarily Fentanyl)",
      icon: Beaker,
      color: "purple"
    },
    {
      date: "May 15, 2025",
      task: "Retrieval and curation of Oxycodone original aptamer sequences (OM1–OM36)",
      target: "Oxycodone (Original)",
      icon: Dna,
      color: "green"
    },
    {
      date: "May 30, 2025",
      task: "Secondary & tertiary structure prediction for Oxycodone aptamers; identification of lead OM16",
      target: "Oxycodone (Original)",
      icon: Microscope,
      color: "green"
    },
    {
      date: "Jun 15, 2025",
      task: "Mutation and docking analysis of OM16 (mutants OM16_1–OM16_15)",
      target: "Oxycodone (Mutated)",
      icon: TestTube,
      color: "green"
    },
    {
      date: "Jun 30, 2025",
      task: "Retrieval of Tramadol aptamer (TR_OG/APT39); secondary and tertiary structure modelling",
      target: "Tramadol (Original)",
      icon: Dna,
      color: "cyan"
    },
    {
      date: "Jul 15, 2025",
      task: "Docking and mutation study of Tramadol (APT39; residues 40–41; TR1–TR15)",
      target: "Tramadol (Mutated)",
      icon: TestTube,
      color: "cyan"
    },
    {
      date: "Jul 30, 2025",
      task: "Retrieval and structural prediction of Codeine aptamers (FC5, FC45)",
      target: "Codeine (Original)",
      icon: Dna,
      color: "emerald"
    },
    {
      date: "Aug 15, 2025",
      task: "Docking, thermodynamics, and comparative analysis across all targets (ΔG, LibDock, heatmaps, interaction summaries); final documentation",
      target: "Cross-target comparison",
      icon: FileText,
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "safety-blue-bg", border: "safety-blue-border", text: "safety-blue-text", accent: "safety-blue-accent" },
      red: { bg: "safety-red-bg", border: "safety-red-border", text: "safety-red-text", accent: "safety-red-accent" },
      orange: { bg: "safety-orange-bg", border: "safety-orange-border", text: "safety-orange-text", accent: "safety-orange-accent" },
      purple: { bg: "safety-purple-bg", border: "safety-purple-border", text: "safety-purple-text", accent: "safety-purple-accent" },
      green: { bg: "safety-green-bg", border: "safety-green-border", text: "safety-green-text", accent: "safety-green-accent" },
      cyan: { bg: "safety-cyan-bg", border: "safety-cyan-border", text: "safety-cyan-text", accent: "safety-cyan-accent" },
      emerald: { bg: "safety-emerald-bg", border: "safety-emerald-border", text: "safety-emerald-text", accent: "safety-emerald-accent" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="safety-page">
      {/* Hero Section */}
      <section className="safety-hero">
        <div className="safety-hero-bg"></div>
        <div className="safety-hero-decoration">
          <div className="safety-hero-blob safety-hero-blob-1"></div>
          <div className="safety-hero-blob safety-hero-blob-2"></div>
        </div>
        
        <div className="safety-hero-content">
          <div className="safety-badge">
            <Shield className="safety-badge-icon" />
            Laboratory Safety & Protocols
          </div>
          
          <h1 className="safety-hero-title">
            Safety Protocols
          </h1>
          <h2 className="safety-hero-subtitle">
            Comprehensive Laboratory Safety Guidelines
          </h2>
          <p className="safety-hero-description">
            Detailed safety protocols, experimental procedures, and risk management 
            strategies ensuring safe laboratory practices for opioid detection research
          </p>
        </div>
      </section>

      <div className="safety-container">
        {/* Timeline Section */}
        <section className="safety-section">
          <div className="safety-timeline-header">
            <h2 className="safety-timeline-title">
              Experimental Timeline & Safety Protocols
            </h2>
            <p className="safety-timeline-subtitle">
              Comprehensive schedule of laboratory experiments with associated safety measures 
              and target molecule classifications for opioid detection research
            </p>
          </div>

          <div className="safety-timeline">
            {experiments.map((experiment, index) => (
              <div key={index} className={`safety-timeline-item ${getColorClasses(experiment.color).bg} ${getColorClasses(experiment.color).border}`}>
                <div className="safety-timeline-marker">
                  <experiment.icon className={`safety-timeline-icon ${getColorClasses(experiment.color).text}`} />
                </div>
                
                <div className="safety-timeline-content">
                  <div className="safety-timeline-header-item">
                    <div className="safety-timeline-date">
                      <Calendar className="safety-date-icon" />
                      <span className="safety-date-text">{formatDate(experiment.date)}</span>
                    </div>
                    <div className={`safety-timeline-target ${getColorClasses(experiment.color).text}`}>
                      <Target className="safety-target-icon" />
                      <span className="safety-target-text">{experiment.target}</span>
                    </div>
                  </div>
                  
                  <div className="safety-timeline-task">
                    <h3 className="safety-task-title">
                      {experiment.task}
                    </h3>
                  </div>
                  
                  <div className="safety-timeline-footer">
                    <div className="safety-safety-badge">
                      <Shield className="safety-safety-icon" />
                      <span className="safety-safety-text">Safety Protocol Applied</span>
                    </div>
                    <div className="safety-progress-indicator">
                      <CheckCircle className="safety-progress-icon" />
                      <span className="safety-progress-text">Planned</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Guidelines Section */}
        <section className="safety-section">
          <div className="safety-guidelines-header">
            <h2 className="safety-guidelines-title">
              Laboratory Safety Guidelines
            </h2>
            <p className="safety-guidelines-subtitle">
              Essential safety protocols and procedures for handling opioid detection 
              experiments and maintaining laboratory safety standards
            </p>
          </div>

          <div className="safety-guidelines-grid">
            <div className="safety-guideline-card safety-guideline-ppe">
              <div className="safety-guideline-icon">
                <Shield className="safety-guideline-icon-svg" />
              </div>
              <h3 className="safety-guideline-title">Personal Protective Equipment</h3>
              <ul className="safety-guideline-list">
                <li>Lab coats and disposable gloves required at all times</li>
                <li>Safety goggles for chemical handling procedures</li>
                <li>Face shields for high-risk operations</li>
                <li>Closed-toe shoes and long pants mandatory</li>
              </ul>
            </div>

            <div className="safety-guideline-card safety-guideline-chemical">
              <div className="safety-guideline-icon">
                <FlaskConical className="safety-guideline-icon-svg" />
              </div>
              <h3 className="safety-guideline-title">Chemical Safety</h3>
              <ul className="safety-guideline-list">
                <li>Proper storage of opioid standards and reagents</li>
                <li>Chemical compatibility assessment before mixing</li>
                <li>Spill response procedures and cleanup protocols</li>
                <li>Waste disposal according to regulatory guidelines</li>
              </ul>
            </div>

            <div className="safety-guideline-card safety-guideline-equipment">
              <div className="safety-guideline-icon">
                <Microscope className="safety-guideline-icon-svg" />
              </div>
              <h3 className="safety-guideline-title">Equipment Safety</h3>
              <ul className="safety-guideline-list">
                <li>Regular calibration and maintenance schedules</li>
                <li>Proper handling of analytical instruments</li>
                <li>Emergency shutdown procedures for all equipment</li>
                <li>Documentation of equipment usage and incidents</li>
              </ul>
            </div>

            <div className="safety-guideline-card safety-guideline-emergency">
              <div className="safety-guideline-icon">
                <Zap className="safety-guideline-icon-svg" />
              </div>
              <h3 className="safety-guideline-title">Emergency Procedures</h3>
              <ul className="safety-guideline-list">
                <li>Emergency contact numbers and evacuation routes</li>
                <li>First aid procedures for chemical exposure</li>
                <li>Fire safety and suppression equipment locations</li>
                <li>Incident reporting and documentation protocols</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Risk Assessment Section */}
        <section className="safety-section">
          <div className="safety-risk-header">
            <h2 className="safety-risk-title">
              Risk Assessment & Mitigation
            </h2>
            <p className="safety-risk-subtitle">
              Comprehensive risk evaluation and mitigation strategies for opioid 
              detection research activities
            </p>
          </div>

          <div className="safety-risk-grid">
            <div className="safety-risk-category">
              <h3 className="safety-risk-category-title">
                <Shield className="safety-risk-category-icon" />
                Biological Risks
              </h3>
              <div className="safety-risk-items">
                <div className="safety-risk-item">
                  <div className="safety-risk-level safety-risk-low">Low</div>
                  <div className="safety-risk-content">
                    <h4 className="safety-risk-item-title">Aptamer Handling</h4>
                    <p className="safety-risk-item-description">
                      Synthetic DNA/RNA aptamers pose minimal biological risk with proper handling
                    </p>
                  </div>
                </div>
                <div className="safety-risk-item">
                  <div className="safety-risk-level safety-risk-medium">Medium</div>
                  <div className="safety-risk-content">
                    <h4 className="safety-risk-item-title">Sample Contamination</h4>
                    <p className="safety-risk-item-description">
                      Risk of cross-contamination between opioid samples requires strict protocols
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="safety-risk-category">
              <h3 className="safety-risk-category-title">
                <FlaskConical className="safety-risk-category-icon" />
                Chemical Risks
              </h3>
              <div className="safety-risk-items">
                <div className="safety-risk-item">
                  <div className="safety-risk-level safety-risk-high">High</div>
                  <div className="safety-risk-content">
                    <h4 className="safety-risk-item-title">Opioid Standards</h4>
                    <p className="safety-risk-item-description">
                      Highly controlled substances require special handling and documentation
                    </p>
                  </div>
                </div>
                <div className="safety-risk-item">
                  <div className="safety-risk-level safety-risk-medium">Medium</div>
                  <div className="safety-risk-content">
                    <h4 className="safety-risk-item-title">Fluorescent Dyes</h4>
                    <p className="safety-risk-item-description">
                      FRET dyes may cause skin irritation and require protective measures
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="safety-risk-category">
              <h3 className="safety-risk-category-title">
                <Microscope className="safety-risk-category-icon" />
                Equipment Risks
              </h3>
              <div className="safety-risk-items">
                <div className="safety-risk-item">
                  <div className="safety-risk-level safety-risk-low">Low</div>
                  <div className="safety-risk-content">
                    <h4 className="safety-risk-item-title">Optical Instruments</h4>
                    <p className="safety-risk-item-description">
                      Standard laboratory equipment with minimal operational risks
                    </p>
                  </div>
                </div>
                <div className="safety-risk-item">
                  <div className="safety-risk-level safety-risk-medium">Medium</div>
                  <div className="safety-risk-content">
                    <h4 className="safety-risk-item-title">Laser Sources</h4>
                    <p className="safety-risk-item-description">
                      Fluorescence detection may involve laser sources requiring eye protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="safety-section">
          <div className="safety-compliance-card">
            <div className="safety-compliance-header">
              <h2 className="safety-compliance-title">
                <CheckCircle className="safety-compliance-icon" />
                Regulatory Compliance & Documentation
              </h2>
              <p className="safety-compliance-subtitle">
                Ensuring adherence to all applicable safety regulations and maintaining 
                comprehensive documentation for laboratory activities
              </p>
            </div>
            
            <div className="safety-compliance-content">
              <div className="safety-compliance-grid">
                <div className="safety-compliance-item">
                  <FileText className="safety-compliance-item-icon" />
                  <h3 className="safety-compliance-item-title">Documentation</h3>
                  <p className="safety-compliance-item-text">
                    Complete records of all experimental procedures, safety incidents, 
                    and protocol modifications maintained for regulatory review
                  </p>
                </div>
                
                <div className="safety-compliance-item">
                  <Shield className="safety-compliance-item-icon" />
                  <h3 className="safety-compliance-item-title">Training</h3>
                  <p className="safety-compliance-item-text">
                    Regular safety training sessions for all laboratory personnel 
                    covering opioid handling and emergency procedures
                  </p>
                </div>
                
                <div className="safety-compliance-item">
                  <Clock className="safety-compliance-item-icon" />
                  <h3 className="safety-compliance-item-title">Monitoring</h3>
                  <p className="safety-compliance-item-text">
                    Continuous monitoring of laboratory conditions and regular 
                    safety audits to ensure compliance with established protocols
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
