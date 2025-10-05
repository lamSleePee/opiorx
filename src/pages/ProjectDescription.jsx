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
        <h1>Opio-Rx: Rapid, Non-Invasive Real-Time Detection of Synthetic Opioids</h1>
        <p>Revolutionary aptamer-based multiplex lateral flow diagnostic for synthetic opioid detection</p>
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
              <h3>Opio-Rx: Rapid, Non-Invasive Real-Time Detection of Synthetic Opioids</h3>
              <p>The escalating global opioid crisis, defined by widespread misuse, dependence, and overdose fatalities, demands urgent innovation in detection strategies. Current diagnostic solutions, rely on slow and costly laboratory assays, remain inaccessible at the point of need, delaying timely interventions.</p>
              
              <p>Opio-Rx directly addresses this gap by presenting an aptamer-based multiplex lateral flow diagnostic for the rapid, non-invasive, and quantitative detection of synthetic opioids — including fentanyl, oxycodone, tramadol, methadone, and codeine — in salivary samples. By leveraging advanced computational design, we generate highly specific aptamers, overcoming the time and cost burdens of conventional SELEX. These aptamers are validated in vitro and then harnessed for optical detection through a FRET-based framework, enabling sensitive and quantitative opioid measurement.</p>
              
              <p>To empower end-users, Opio-Rx integrates with an AI-powered mobile application, capable of processing the fluorescence signals from the lateral flow device and instantly providing digital concentration readouts. This unified pipeline — computationally designed aptamers, FRET-based diagnostics, and AI-enabled analysis — positions Opio-Rx as a powerful, scalable tool for frontline intervention in the opioid crisis.</p>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ShieldIcon />
              <h2>Introduction</h2>
            </div>
            <div className="pd-card">
              <p>Opioids, derived from the poppy plant, are substances that interact with brain opioid receptors, providing analgesic and sedative properties. Commonly used for pain treatment, they also help maintain opioid dependency through medications like buprenorphine and methadone. Opioids are also used for non-medical purposes due to the euphoria after ingestion. However, their pharmacological effects can make breathing difficult and lead to fatal overdoses.</p>
              
              <p>Opioids do, however, have some hazards, including abuse, dependency, and overdose fatalities. The opioid crisis has become a global health emergency requiring innovative detection and intervention strategies.</p>
            </div>
          </div>

          {/* Global Scenario */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ChartIcon />
              <h2>Global Scenario</h2>
            </div>
            <div className="pd-card">
              <p>The opioid crisis unfolded in three waves: prescription opioids, heroin, and synthetic opioids. After OxyContin's FDA approval in 1995, prescriptions and overdose deaths surged, leading many users to switch to heroin by the early 2010s. By 2013, heroin-related overdose deaths had risen sharply, with most users starting from prescription misuse.</p>
              
              <p>The third wave is driven by synthetic opioids like fentanyl, now responsible for over 80% of overdose deaths and more than 150 American deaths daily, contributing significantly to the decline in U.S. life expectancy between 2014 and 2017.</p>
              
              <div className="image-placeholder">
                <img src="/api/placeholder/600/300" alt="Three waves of opioid overdose deaths" />
                <p className="image-caption">Fig. 1: Three waves of opioid overdose deaths</p>
              </div>
            </div>
          </div>

          {/* Indian Scenario */}
          <div className="pd-section">
            <div className="pd-section-header">
              <TargetIcon />
              <h2>Indian Scenario</h2>
            </div>
            <div className="pd-card">
              <p>India's opioid prevalence is three times the global average, with 2.1% of the population using opioids. However, the data is less accurate in LMICs like India, where it is impossible to determine the exact number of overdose deaths caused by opioids. According to the 2019 report, Mizoram and Nagaland are the states most impacted by opioid use disorders, while Uttar Pradesh has the highest rate. India's prevalence of opioid usage is still lower than that of the United States.</p>
              
              <p>However, opioid consumption patterns differed by demographic and geographic characteristics have always differed in India. Synthetic opioids are more widespread in rural regions, as compared to heroin, was the most often used illicit opioid in urban areas. Numerous studies have shown that the abuse of prescription opioids, especially tramadol and cough syrups containing codeine, is becoming a greater issue.</p>
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

          {/* Limitations */}
          <div className="pd-section">
            <div className="pd-section-header">
              <AlertIcon />
              <h2>Limitations: The Birth of Opio-Rx</h2>
            </div>
            <div className="pd-card">
              <p>Liquid Chromatography–Tandem Mass Spectrometry (LC–MS/MS) and Gas Chromatography–Mass Spectrometry (GC–MS) are currently regarded as the gold-standard methods for opioid detection due to their high sensitivity and specificity. However, these techniques come with significant drawbacks that restrict their applicability in real-time or point-of-care testing.</p>
              
              <p>Both LC–MS and GC–MS require expensive instrumentation, highly controlled laboratory environments, and trained professionals to operate and interpret results. Moreover, the turnaround time for each sample can be as long as 2–3 days, which makes these approaches impractical in settings where rapid and accurate on-site analysis is critical, such as emergency rooms, rehabilitation centers, or law enforcement field investigations.</p>
              
              <p>Conventional immunoassays, which use antibodies as the primary recognition element, offer a more accessible alternative but suffer from notable limitations. Antibodies, due to their comparatively large molecular size and complex tertiary structure, can be less stable under varying environmental conditions, leading to reduced shelf-life and performance inconsistencies. Their batch-to-batch variability in production adds further uncertainty to assay reliability. More importantly, immunoassays are prone to higher rates of false positives, particularly in the case of structurally similar opioid analogs.</p>
            </div>
          </div>

          {/* Project Outline */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ClockIcon />
              <h2>Project Outline</h2>
            </div>
            
            <div className="pd-card">
              <h3>A. In Silico Aptamer Design</h3>
              
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
              <h3>B. Förster Resonance Energy Transfer Principles</h3>
              
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
    </div>
  )
}

export default ProjectDescription