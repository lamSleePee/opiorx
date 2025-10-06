import React from 'react'

// Enhanced SVG icons with better styling
const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6l8-4z"/>
  </svg>
)

const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <rect x="6" y="12" width="3" height="6" rx="1"/>
    <rect x="11" y="9" width="3" height="9" rx="1"/>
    <rect x="16" y="6" width="3" height="12" rx="1"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
)

const MicroscopeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    <path d="M9 10v6a3 3 0 0 0 6 0v-6"/>
    <path d="M9 10h6"/>
    <path d="M12 4v6"/>
    <path d="M8 2h8"/>
  </svg>
)

const AlertIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const ProjectDescription = () => {
  return (
    <div className="project-description-page">
      <div className="page-header">
        <h1>Opio‑Rx: rapid, non‑invasive real‑time detection of synthetic opioids</h1>
        <p>Clinically elegant pipeline: computational aptamers + FRET optics + AI readout</p>
      </div>
      
      <div className="project-description-content">
        <div className="project-description-container">
          
          {/* Abstract Section */}
          <div className="pd-section">
            <div className="pd-section-header">
              <TargetIcon />
              <h2>Abstract</h2>
            </div>
            <div className="pd-card">
              <p>The escalating global opioid crisis demands innovation. Current diagnostics are slow, expensive and inaccessible at the point of need. Opio‑Rx delivers an aptamer‑based multiplex saliva test for synthetic opioids (fentanyl, oxycodone, tramadol, methadone, codeine) with quantitative FRET optics and an AI mobile reader.</p>
              <p>Computationally designed aptamers replace protracted SELEX, then validate in vitro and integrate into a FRET framework for sensitive, quantitative readout. The companion app processes fluorescence and displays instant concentrations — a scalable frontline tool.</p>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ShieldIcon />
              <h2>Introduction / Problem</h2>
            </div>
            <div className="pd-card">
              <p>Opioids are essential therapeutics but carry substantial risk: dependence and respiratory depression leading to fatal overdose. The crisis requires rapid, quantitative detection at the point of need.</p>
            </div>
          </div>

          

      {/* Current Detection Methods */}
          <div className="pd-section">
            <div className="pd-section-header">
              <MicroscopeIcon />
              <h2>Current Detection Methods</h2>
            </div>
            
            <div className="pd-grid">
              <div className="pd-card">
                <h3>1. Liquid Chromatography – Tandem Mass Spectrometry</h3>
                <p>Liquid chromatography allows quantitative analysis of synthetic opioids with coalescence to tandem Mass Spectrometry. For quantitative opioid detection, LC-MS/MS is the gold standard. These techniques yield detection limits as low as 1–10 ng/mL in urine and 0.25–2.5 ng/mL in serum. With quantification limits of 0.5 ng/mg, detection limits for hair analysis can range from 0.05 to 0.1 ng/mg.</p>
              </div>

              <div className="pd-card">
                <h3>2. Gas Chromatography – Mass Spectrometry</h3>
                <p>GC-MS/MS methods provide detection limits of 0.02-0.20 ng/mg for fentanyl compounds in hair samples, with quantification limits between 0.08-0.20 ng/mg. For oral fluid analysis, combined solid-phase extraction with LC-MS/MS achieves detection limits of 5 ng/mL and quantification limits of 10 ng/mL for synthetic opioids including U-47700, AH-7921, and MT-45.</p>
              </div>

              <div className="pd-card">
                <h3>3. FDA Approved Commercial Products</h3>
                <p>Point-of-Care Urine Testing has recently expanded with FDA clearance of the first over-the-counter fentanyl urine test. The All test Fentanyl Urine Test Cassette was cleared by FDA in October 2023, representing the first OTC test for preliminary fentanyl detection in urine. This test provides results within 5 minutes using three drops of fresh urine and includes pre-addressed mailing for confirmation testing.</p>
              </div>
            </div>

            <div className="pd-card">
              <h3>Emergency Department Screening Protocols</h3>
              <p>Emergency departments have developed standardized screening protocols specifically for opioid detection. The Clinical Opioid Withdrawal Scale (COWS) is widely used, with most protocols recommending buprenorphine initiation for COWS scores of 8 or greater. No specific laboratory tests are required before initiating treatment.</p>
              
              <p>Emergency departments typically employ two-tier testing approaches:</p>
              <ul>
                <li><strong>First-line screening</strong> uses immunoassays with cut-off levels of 300-2000 ng/mL for opiates. However, traditional opiate immunoassays often fail to detect fentanyl due to structural differences from morphine.</li>
                <li><strong>Confirmatory testing</strong> employs LC-MS/MS or GC-MS methods with detection limits typically 20-50 ng/mL in clinical practice, though capable of 5 ng/mL sensitivity. Turnaround time is 1-3 days for confirmation results.</li>
              </ul>
            </div>
          </div>

          {/* Limitations → Birth of Opio‑Rx */}
          <div className="pd-section">
            <div className="pd-section-header">
              <AlertIcon />
              <h2>Limitations: The birth of Opio‑Rx</h2>
            </div>
            <div className="pd-card">
              <p>LC/GC‑MS require costly instruments, controlled labs and trained staff with 2–3 day turnaround — unsuitable for urgent POC use. Immunoassays face stability, batch variability and analog cross‑reactivity, and are usually qualitative — insufficient when dosage decisions need concentration.</p>
            </div>
          </div>

          {/* Project Outline */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ClockIcon />
              <h2>Project Outline</h2>
            </div>
            
            <div className="pd-card">
              <h3>A. In silico aptamer design</h3>
              
              <div className="image-placeholder">
                <img src="/api/placeholder/600/400" alt="In silico aptamer design workflow" />
                <p className="image-caption">Fig. 2: In silico aptamer design workflow</p>
              </div>

              <h4>Primary Sequence Analysis:</h4>
              <p>The primary sequence was obtained from the literature. Multiple sequence alignment was performed using the CLUSTAL OMEGA web server. This helped to identify the structurally conserved regions and primer regions in the eight sequences.</p>

              <h4>Secondary Structure Prediction:</h4>
              <p>The DNA fold algorithm of the mFold Web server was used to generate the secondary structure of the aptamer sequences. The key parameters of the mFold Web server were used: 1 M Na+ and 0 Mg2+ M were used as ionic conditions, while the folding temperature was used at 37°C.</p>

              <h4>Tertiary Structure Prediction:</h4>
              <p>The 3DRNA/DNA web server was used to predict the tertiary structure of the eight aptamer sequences using the dot bracket structure obtained in the Vienna format from mFold. The dot bracket annotation displays the whole chain as a single string, with matching parentheses indicating the positions of paired nucleotides and dots indicating the positions of unpaired nucleotides.</p>

              <h4>Molecular Docking: Biovia Discovery Studio</h4>
              <p>Biovia Discovery Studio's LibDock protocol was used to perform molecular docking of the three-dimensional aptamer structures against the target opioid, fentanyl. LibDock is a high-throughput algorithm that comprises the polar and apolar features as "hotspots." It is a hotspot-based docking tool that uses hotspot regions in ligand molecules and uses them to guide the docking into the receptor binding sites.</p>

              <h4>Truncation Approach:</h4>
              <p>Truncation of aptamers entails systematically shortening the nucleotide sequence of an aptamer to identify the minimal sequence required for effective target binding. The truncation process is required for both functional and economical reasons. A shorter sequence yields the conformational change property of aptamers, boosts efficiency, and requires less reduction costs.</p>

              <h4>Point Mutation Approach:</h4>
              <p>The potential aptamer sequence from the eight sequences was subjected to point mutation based on heat map generated after analysing ligand poses of all ligand conformation against the potential aptamer sequence. Strong interacting residues were then identified and were chosen as anchor residues to conduct mutations further.</p>

              <div className="image-placeholder">
                <img src="/api/placeholder/600/300" alt="Heat-maps generated showing various conformations of fentanyl" />
                <p className="image-caption">Fig. 3: Heat-maps generated showing various conformations of fentanyl in its loop regions</p>
              </div>

              <h4>MD Simulations:</h4>
              <p>Molecular dynamics (MD) simulations were performed on both the novel aptamer sequence and its docked complex for 150 ns to evaluate their dynamic stability, conformational flexibility, and interaction persistence under physiologically relevant conditions. Trajectory analyses included root-mean-square deviation (RMSD), root-mean-square fluctuation (RMSF), and radius of gyration (Rg) to assess compactness and folding integrity throughout the simulation.</p>
            </div>

            <div className="pd-card">
              <h3>B. Förster Resonance Energy Transfer principles</h3>
              
              <div className="image-placeholder">
                <img src="/api/placeholder/600/300" alt="FRET: rGO + FAM labelled aptamer" />
                <p className="image-caption">Fig. 4: FRET: rGO + FAM aptamer pair</p>
              </div>

              <p>The biosensor leverages Förster Resonance Energy Transfer (FRET) as the core transduction mechanism for acetyl fentanyl detection. FRET is a photophysical process involving non-radiative energy transfer from an excited donor fluorophore to an acceptor molecule, resulting in donor fluorescence quenching.</p>

              <h4>FAM Fluorophore Properties:</h4>
              <p>6-Carboxyfluorescein (FAM) serves as the donor fluorophore with excitation maximum at 490-495 nm and emission maximum at 515-520 nm. FAM exhibits high quantum yield, pH-sensitive fluorescence (optimal at pH 7.5-8.5), and covalent conjugation capability to aptamer termini through carboxyl functional groups.</p>

              <h4>Reduced Graphene Oxide (rGO):</h4>
              <p>rGO's extensive π-conjugated system and high surface area facilitate efficient energy transfer through multiple mechanisms including FRET, electron transfer, and direct contact quenching. The material's planar structure promotes strong π-π stacking interactions with nucleotide bases, enabling highly efficient quenching when aptamers are adsorbed.</p>

              <h4>Fluorescence Recovery:</h4>
              <p>Fluorescence recovery in aptamer-based FRET sensors is intrinsically linked to the unique secondary and tertiary structures of the aptamer and the conformational dynamics that occur upon target binding. Upon introduction of the target molecule, aptamers undergo structural rearrangements that drive fluorescence recovery, increasing the donor–acceptor distance beyond the Förster radius.</p>

              <h4>Gold Nanoparticles + FAM Aptamer:</h4>
              <p>The working principle of a FRET-based aptamer sensor using AuNP (gold nanoparticles) as the acceptor and FAM-labeled aptamers as donors parallels the mechanism established for rGO-based systems. The AuNP acts as a potent energy acceptor and fluorescence quencher due to its strong surface plasmon resonance (SPR) absorption in the visible spectrum.</p>
            </div>
          </div>

        </div>
      </div>

      {/* In Silico Aptamer Design (moved from standalone page) */}
      <div className="pd-section">
        <div className="pd-section-header">
          <MicroscopeIcon />
          <h2>In Silico Aptamer Design</h2>
        </div>
        <div className="pd-card">
          <h3>Design Workflow</h3>
          <p>Our computational approach to aptamer design combines sequence analysis, structure prediction, molecular docking, and optimization techniques to develop highly specific aptamers for synthetic opioid detection.</p>
          <ul className="pd-list">
            <li><strong>1. Primary Sequence Analysis:</strong> Literature-based sequence collection and multiple sequence alignment</li>
            <li><strong>2. Structure Prediction:</strong> Secondary structures from mFold and tertiary models via 3DRNA/DNA</li>
            <li><strong>3. Molecular Docking:</strong> LibDock-based interaction analysis with target opioids</li>
            <li><strong>4. Optimization:</strong> Truncation and point mutation to enhance affinity</li>
            <li><strong>5. Validation:</strong> MD simulations to confirm dynamic stability</li>
          </ul>
        </div>

        <div className="pd-grid">
          <div className="pd-card">
            <h3>Primary Sequence Analysis</h3>
            <p>Eight aptamer sequences were curated from literature sources focusing on synthetic opioids. Multiple sequence alignment identified conserved regions and primer sites, informing downstream modeling.</p>
          </div>
          <div className="pd-card">
            <h3>Secondary & Tertiary Structure</h3>
            <p>mFold generated dot‑bracket secondary structures using 1 M Na+, 0 Mg2+ at 37°C. 3DRNA/DNA converted these into 3D models for docking.</p>
          </div>
          <div className="pd-card">
            <h3>Docking with LibDock</h3>
            <p>Hotspot‑guided docking evaluated polar/apolar complementarity. Binding sites were defined around loop regions observed in secondary structures.</p>
          </div>
          <div className="pd-card">
            <h3>Truncation & Point Mutation</h3>
            <p>Systematic 5’/3’ truncations and targeted mutations improved affinity while monitoring folding stability and GC content thresholds.</p>
          </div>
          <div className="pd-card">
            <h3>MD Simulations & Metrics</h3>
            <p>150 ns simulations assessed RMSD, RMSF, and Rg. Stable plateaus and interface RMSF minima indicated robust target engagement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription