import React from 'react';
import { 
  Shield,
  FileText,
  AlertTriangle,
  Lock,
  Container,
  FlaskConical,
  Microscope,
  Trash2,
  Users,
  BookOpen
} from 'lucide-react';
import './SafetyPage.css';

export default function SafetyPage() {
  return (
    <div className="safety-page">
      {/* Hero Section */}
      <section className="safety-hero">
        <div className="safety-hero-content">
          <div className="safety-badge">
            <Shield className="safety-badge-icon" />
            Laboratory Safety & Compliance
          </div>
          <h1 className="safety-hero-title">Safety</h1>
          <p className="safety-hero-description">
            All work was conducted under BSL-2 standards with IBSC approval, using certified reference materials (CRMs), validated SOPs, engineering controls, and compliant waste management procedures.
          </p>
          <p className="safety-hero-description">
            Nanomaterial handling (AuNPs, rGO), fluorescence instrumentation (VICTOR Nivo), and fentanyl-related workflows follow specific risk assessments, PPE, containment, and disposal protocols aligned with international guidance and institutional policies.
          </p>
        </div>
      </section>

      <div className="safety-container">
        
        {/* Section 1: Regulatory Compliance */}
        <section className="safety-section">
          <div className="safety-section-header">
            <Lock className="safety-section-icon" />
            <h2 className="safety-section-title">1) Regulatory Compliance for Acetyl Fentanyl CRM Use</h2>
          </div>

          <div className="safety-card">
            <h3>Material identity and classification</h3>
            <p>Acetyl fentanyl-13C6 solution, 50 μg/mL in methanol, 1 mL ampule, Cerilliant (Merck/Sigma-Aldrich) CRM with CoA and traceability. CRM-grade materials are designated for analytical use, with strict QA/QC and chain-of-custody documentation [— user-supplied].</p>
          </div>

          <div className="safety-card">
            <h3>License considerations</h3>
            <p>Use as analytical calibration/validation standard in controlled laboratory assays does not constitute synthesis, distribution, or clinical application; CRMs are permitted for research under institutional oversight and without narcotics license when not diverted, in line with analytical toxicology/biosensor validation norms [— user-supplied]. Institutional policies and iGEM Working Safely guidance require risk assessment, facility suitability by risk group, and training.</p>
          </div>

          <div className="safety-card">
            <h3>Institutional approvals and governance</h3>
            <p>Work reviewed and approved by IBSC; activities executed under BSL-2 laboratory standards, emergency preparedness, and documented training, as exemplified in iGEM safety pages and institutional biosafety manuals.</p>
          </div>

          <div className="safety-card">
            <h3>Chain-of-custody and access control</h3>
            <p>Secure controlled storage (locked cabinet/fridge with access logs), issue-only-by-PI/authorized custodian, sign-in/out per vial, reconcile volumes post-run, immediate discrepancy reporting. Follow DEA-style "nonretrievable" destruction principles for residues when applicable.</p>
            <p>Documentation retained: CoA, IBSC approval letters, training records, SDS for methanol and fentanyl analog CRM, usage logs, waste disposal records (e.g., Form 41 equivalents where required by local policy).</p>
          </div>
        </section>

        {/* Section 2: Common SOPs */}
        <section className="safety-section">
          <div className="safety-section-header">
            <FileText className="safety-section-icon" />
            <h2 className="safety-section-title">2) Common SOPs and Laboratory Practices (BSL-2)</h2>
          </div>

          <div className="safety-card">
            <h3>Training, access, and supervision</h3>
            <p>Mandatory onboarding covering biosafety, chemical hygiene, nanomaterial safety, waste segregation, emergency procedures, and equipment-specific training (centrifuges, spectrometers, BSCs) with competency sign-offs.</p>
          </div>

          <div className="safety-card">
            <h3>PPE and dress code</h3>
            <p>Minimum: lab coat, nitrile gloves, safety glasses; add face shield/respirator where risk indicates. No open footwear. Tie back hair; avoid dangling accessories. No food/drinks/cosmetics in lab; dedicated chemical/nanomaterial fridges only.</p>
          </div>

          <div className="safety-card">
            <h3>Engineering controls and safe work practices</h3>
            <p>Perform aerosol/volatile or nanoparticle work in fume hoods or containment (BSC for bioaerosols); use HEPA-filtered local exhaust where indicated; never use clean benches for hazardous work directed toward worker.</p>
            <p>Maintain clear egress, unobstructed eyewash/showers and fire extinguishers; buddy system after hours; emergency contacts posted near phone.</p>
          </div>

          <div className="safety-card">
            <h3>Housekeeping and labeling</h3>
            <p>Keep benches uncluttered; close containers; secondary containment for liquids; GHS labeling with contents, hazards, date; segregate incompatible chemicals.</p>
          </div>

          <div className="safety-card">
            <h3>Incident response</h3>
            <p>Spills: evacuate if large/toxic; don appropriate PPE/respirator; contain with absorbents; for fentanyl contamination, prioritize chemical degradation or detergent-based removal under containment (see section 5).</p>
          </div>

          <div className="safety-card">
            <h3>Documentation</h3>
            <p>Hazard sheets posted; instrument logs maintained; audit trails enabled for regulated devices/software where applicable.</p>
          </div>
        </section>

        {/* Section 3: Nanomaterial Safety */}
        <section className="safety-section">
          <div className="safety-section-header">
            <Container className="safety-section-icon" />
            <h2 className="safety-section-title">3) Safety for Gold Nanoparticles (AuNPs) and Reduced Graphene Oxide (rGO)</h2>
          </div>

          <div className="safety-subsection">
            <h3 className="safety-subsection-title">A. Gold nanoparticles (AuNPs)</h3>
            
            <div className="safety-card">
              <h4>Hazards overview</h4>
              <p>Bulk gold is inert; nanoscale Au often exhibits low toxicity at ≥5 nm, but safety is surface chemistry-, size-, dose-, and matrix-dependent. Treat all nanoparticle work conservatively to avoid inhalation/dermal exposure.</p>
            </div>

            <div className="safety-card">
              <h4>Handling and storage</h4>
              <p>Prefer aqueous suspensions to minimize aerosolization; store 4–25°C away from sunlight; avoid freeze–thaw for colloids; maintain clean dedicated pipettes and tips.</p>
            </div>

            <div className="safety-card">
              <h4>Controls and PPE</h4>
              <p>Perform open transfers in fume hood or ventilated enclosure; avoid creating aerosols; use gloves, goggles, lab coat; consider N95/N100 for powder/dry residues and when dust may form; ensure local exhaust with HEPA filtration.</p>
            </div>

            <div className="safety-card">
              <h4>Spills and first aid</h4>
              <p>Wet-wipe spills in hood; avoid dry sweeping; collect into sealed waste. For skin/eye contact, wash/rinse with water; seek medical attention if irritation persists.</p>
            </div>
          </div>

          <div className="safety-subsection">
            <h3 className="safety-subsection-title">B. Reduced graphene oxide (rGO)</h3>
            
            <div className="safety-card">
              <h4>Hazards overview</h4>
              <p>rGO powders/platelets pose inhalation and dermal risks; toxicity is dose-, size-, and reduction-dependent. Studies report ROS generation and cytotoxicity in vitro/in vivo at certain doses; adopt precautionary controls for airborne particles.</p>
            </div>

            <div className="safety-card">
              <h4>Handling hierarchy and controls</h4>
              <p>Avoid powders; procure/use dispersions where possible. For powders or vigorous processing, use fume hood/glove box or closed systems; HEPA-filtered LEV; sealed containers; anti-static measures. Administrative controls: training, exposure minimization, labeling.</p>
            </div>

            <div className="safety-card">
              <h4>PPE</h4>
              <p>Lab coat, double nitrile gloves for extended work, goggles; consider disposable sleeves; N95/N100 respirator if dust risk; avoid skin contact; immediate washing after work.</p>
            </div>

            <div className="safety-card">
              <h4>Storage and labeling</h4>
              <p>Clearly label rGO with nanomaterial hazard; store sealed, dry, secondary containment; segregate from oxidizers; maintain SDS on hand.</p>
            </div>

            <div className="safety-card">
              <h4>Spills and decontamination</h4>
              <p>Mist with water to suppress dust; wet-wipe with disposable towels; avoid compressed air; dispose as nanomaterial hazardous waste; do not drain-dispose.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Equipment Safety */}
        <section className="safety-section">
          <div className="safety-section-header">
            <Microscope className="safety-section-icon" />
            <h2 className="safety-section-title">4) Safety with Fluorescence Equipment: VICTOR Nivo Multimode Microplate Reader</h2>
          </div>

          <div className="safety-card">
            <h3>Instrument risks and controls</h3>
            <p>Primary risks: optical exposure (generally enclosed), mechanical motion of plate stages, spills, and electrical hazards. Use manufacturer's workflow-based software with Enhanced Security for audit trails when needed (21 CFR Part 11 contexts).</p>
          </div>

          <div className="safety-card">
            <h3>Operating best practices</h3>
            <p>Inspect plate seals; avoid overfilled wells; centrifuge plates if bubbles high; load within specified plate formats; never defeat interlocks; keep ventilation ports clear.</p>
            <p>Place instrument on stable bench; maintain clearance for airflow; connect to conditioned power; use UPS if required by facility.</p>
          </div>

          <div className="safety-card">
            <h3>Spill response</h3>
            <p>If biohazardous/corrosive/toxic material leaks, pause runs, don PPE, power down safely, and clean external surfaces with appropriate detergent/disinfectant under SOP; follow vendor guidance for internal spill response and service if contamination breaches internal compartments.</p>
          </div>

          <div className="safety-card">
            <h3>Software security and data integrity</h3>
            <p>Enable Enhanced Security for user authentication, audit trails, electronic signatures, and procedural controls; maintain SOPs for validation, change control, and account management per 21 CFR Part 11 guidance.</p>
          </div>
        </section>

        {/* Section 5: Disposal */}
        <section className="safety-section">
          <div className="safety-section-header">
            <Trash2 className="safety-section-icon" />
            <h2 className="safety-section-title">5) Proper Disposal: Any Material Used with Acetyl Fentanyl CRM</h2>
          </div>

          <div className="safety-card">
            <h3>Core principle</h3>
            <p>Controlled-substance residues and contaminated materials must be rendered non-retrievable and managed via approved destruction channels (e.g., reverse distributor, Rx Destroyer-type chemical neutralization, or EH&S-controlled incineration). Never drain-dispose or discard in regular trash.</p>
          </div>

          <div className="safety-card">
            <h3>Waste segregation and labeling</h3>
            <p>Segregate methanol solvent waste (flammable) in labeled solvent waste cans; segregate fentanyl-contaminated disposables (tips, wipes, gloves, microplates) into sealed pharmaceutical/controlled-substance waste streams as per EH&S direction; sharps into puncture-resistant sharps containers; never overfill.</p>
          </div>

          <div className="safety-card">
            <h3>Destruction pathways</h3>
            <p>Prefer reverse distributor or DEA-style destruction to non-retrievable state with witnessed logging; some programs allow in-lab sorbent-based neutralizing media with logging, then EH&S pickup for incineration; keep records (usage log and destruction form) per institutional retention.</p>
          </div>

          <div className="safety-card">
            <h3>Surface decontamination after CRM work</h3>
            <p>Use detergent and water for physical removal with adequate contact time; collect all aqueous run-off as hazardous waste due to fentanyl stability. Where permitted, apply validated chemical degradation (e.g., activated peroxyacetic acid formulations shown to degrade fentanyl on PPE within minutes) to minimize residual fentanyl in waste; verify compatibility with surfaces and institutional approval.</p>
          </div>

          <div className="safety-card">
            <h3>Transport and storage prior to disposal</h3>
            <p>Store sealed waste in secondary containment, in locked cabinet with inventory reconciliation; minimize accumulation; document chain-of-custody; schedule timely EH&S pickup to TSDF for incineration.</p>
            <p>Additional best practices and references to follow for disposal program design and documentation are available from EH&S guides, public health and EPA remediation guidance, and institutional policies.</p>
          </div>
        </section>

        {/* Appendices */}
        <section className="safety-section">
          <div className="safety-section-header">
            <BookOpen className="safety-section-icon" />
            <h2 className="safety-section-title">Appendices and Cross-Cutting</h2>
          </div>

          <div className="safety-card">
            <h3>Nanomaterial handling standards</h3>
            <p>Use engineering controls (source enclosure, HEPA LEV), administrative training, PPE (N95/N100 when airborne risk), glove boxes/fume hoods for powder handling; do not use horizontal laminar flow benches for hazardous nanoparticle work; ensure ventilation monitoring and recordkeeping.</p>
          </div>

          <div className="safety-card">
            <h3>AuNP SDS and handling</h3>
            <p>Ventilated workstations; avoid aerosol/dust; first aid and containment procedures; storage guidance.</p>
          </div>

          <div className="safety-card">
            <h3>rGO safety literature</h3>
            <p>Reported cytotoxicity mechanisms reinforce precautionary approach; maintain exposure minimization and medical surveillance where applicable.</p>
          </div>

          <div className="safety-card">
            <h3>iGEM and institutional safety expectations</h3>
            <p>BSL-2 compliance, training, waste segregation, documented emergency readiness.</p>
          </div>

          <div className="safety-card">
            <p className="safety-conclusion">This integrated safety framework—anchored in CRMs for analytical use, BSL-2 lab discipline, nanomaterial controls, instrument-specific precautions, and controlled-substance waste compliance—ensures regulatory alignment, risk reduction, and ethical stewardship throughout the described iGEM experiments.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
