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
        <h1>Opio – Rx: rapid, non – invasive real time detection of synthetic opioids.</h1>
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
              <p>The escalating global opioid crisis, defined by widespread misuse, dependence, and overdose fatalities, demands urgent innovation in detection strategies. Current diagnostic solutions, rely on slow and costly laboratory assays, remain inaccessible at the point of need, delaying timely interventions.</p>
              <p>Opio-Rx directly addresses this gap by presenting an aptamer-based multiplex lateral flow diagnostic for the rapid, non-invasive, and quantitative detection of synthetic opioids — including fentanyl, oxycodone, tramadol, methadone, and codeine — in salivary samples. By leveraging advanced computational design, we generate highly specific aptamers, overcoming the time and cost burdens of conventional SELEX. These aptamers are validated in vitro and then harnessed for optical detection through a FRET-based framework, enabling sensitive and quantitative opioid measurement.</p>
              <p>To empower end-users, Opio-Rx integrates with an AI-powered mobile application, capable of processing the fluorescence signals from the lateral flow device and instantly providing digital concentration readouts. This unified pipeline — computationally designed aptamers, FRET-based diagnostics, and AI-enabled analysis — positions Opio-Rx as a powerful, scalable tool for frontline intervention in the opioid crisis.</p>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ShieldIcon />
              <h2>Introduction/Problem</h2>
            </div>
            <div className="pd-card">
              <p>Opioids, derived from the poppy plant, are substances that interact with brain opioid receptors, providing analgesic and sedative properties. Commonly used for pain treatment, they also help maintain opioid dependency through medications like buprenorphine and methadone. Opioids are also used for non-medical purposes due to the euphoria after ingestion. However, their pharmacological effects can make breathing difficult and lead to fatal overdoses. (Opioid overdose n.d.) Opioids do, however, have some hazards, including abuse, dependency, and overdose fatalities.(Jayawardana et al. 2021; Opioid overdose n.d.)</p>
            </div>
          </div>

          {/* Indian Scenario */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ChartIcon />
              <h2>Indian Scenario</h2>
            </div>
            <div className="pd-card">
              <p>India's opioid prevalence is three times the global average, with 2.1% of the population using opioids. However, the data is less accurate in LMICs like India, where it is impossible to determine the exact number of overdose deaths caused by opioids. According to the 2019 report, Mizoram and Nagaland are the states most impacted by opioid use disorders, while Uttar Pradesh has the highest rate. India's prevalence of opioid usage is still lower than that of the United States.</p>
              <p>However, opioid consumption patterns differed by demographic and geographic characteristics have always differed in India. Synthetic opioids are more widespread in rural regions, as compared to heroin, was the most often used illicit opioid in urban areas. Numerous studies have shown that the abuse of prescription opioids, especially tramadol and cough syrups containing codeine, is becoming a greater issue. (Bhawalkar et al. 2024)</p>
            </div>
          </div>

          {/* Global Scenario */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ChartIcon />
              <h2>Global Scenario</h2>
            </div>
            <div className="pd-card">
              <p>The opioid crisis unfolded in three waves: prescription opioids, heroin, and synthetic opioids. After OxyContin's FDA approval in 1995, prescriptions and overdose deaths surged, leading many users to switch to heroin by the early 2010s. By 2013, heroin-related overdose deaths had risen sharply, with most users starting from prescription misuse. The third wave is driven by synthetic opioids like fentanyl, now responsible for over 80% of overdose deaths and more than 150 American deaths daily, contributing significantly to the decline in U.S. life expectancy between 2014 and 2017.</p>
              
              <div className="image-placeholder">
                <p className="image-caption">Fig. 1 Three waves of opioid overdose deaths(Understanding the Opioid Overdose Epidemic | Overdose Prevention | CDC n.d.)</p>
              </div>
            </div>
          </div>

          {/* Current Detection Methods */}
          <div className="pd-section">
            <div className="pd-section-header">
              <MicroscopeIcon />
              <h2>Current detection methods</h2>
            </div>
            
            <div className="pd-card">
              <h3>1) Liquid Chromatography – Tandem Mass Spectrometry</h3>
              <p>Liquid chromatography allows quantitative analysis of synthetic opioids with coalescence to tandem Mass Spectrometry.</p>
              <p>For quantitative opioid detection, Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS) is the gold standard. These techniques yield detection limits as low as 1–10 ng/mL in urine and 0.25–2.5 ng/mL in serum. With quantification limits of 0.5 ng/mg, detection limits for hair analysis can range from 0.05 to 0.1 ng/mg.</p>
            </div>

            <div className="pd-card">
              <h3>2) Gas Chromatography – Mass Spectrometry</h3>
              <p>Gas Chromatography-Mass Spectrometry (GC-MS/MS) methods provide detection limits of 0.02-0.20 ng/mg for fentanyl compounds in hair samples, with quantification limits between 0.08-0.20 ng/mg. For oral fluid analysis, combined solid-phase extraction with LC-MS/MS achieves detection limits of 5 ng/mL and quantification limits of 10 ng/mL for synthetic opioids including U-47700, AH-7921, and MT-45.</p>
            </div>

            <div className="pd-card">
              <h3>3) FDA approved commercial products</h3>
              <p>Point-of-Care Urine Testing has recently expanded with FDA clearance of the first over-the-counter fentanyl urine test. The All test Fentanyl Urine Test Cassette was cleared by FDA in October 2023, representing the first OTC test for preliminary fentanyl detection in urine. This test provides results within 5 minutes using three drops of fresh urine and includes pre-addressed mailing for confirmation testing.</p>
              <p>For clinical settings, the Rapid Fentanyl (FYL) Test Strip and Dipcard received FDA 510(k) clearance with a cut-off concentration of 1 ng/mL. These are competitive immunoassays intended for prescription use, including point-of-care sites, providing qualitative detection of fentanyl and metabolites in human urine. However, these remain CLIA moderate complexity tests requiring certified laboratories</p>
            </div>

            <div className="pd-card">
              <h3>Emergency Department screening protocols</h3>
              <p>Emergency departments have developed standardized screening protocols specifically for opioid detection. The Clinical Opioid Withdrawal Scale (COWS) is widely used, with most protocols recommending buprenorphine initiation for COWS scores of 8 or greater. No specific laboratory tests are required before initiating treatment.</p>
              
              <p>Emergency departments typically employ two-tier testing approaches:</p>
              <p>First-line screening uses immunoassays with cut-off levels of 300-2000 ng/mL for opiates. However, traditional opiate immunoassays often fail to detect fentanyl due to structural differences from morphine. Hospitals increasingly require fentanyl-specific immunoassays for comprehensive synthetic opioid screening.</p>
              <p>Confirmatory testing employs LC-MS/MS or GC-MS methods with detection limits typically 20-50 ng/mL in clinical practice, though capable of 5 ng/mL sensitivity. Turnaround time is 1-3 days for confirmation results.</p>
            </div>
          </div>

          {/* Limitations → Birth of Opio‑Rx */}
          <div className="pd-section">
            <div className="pd-section-header">
              <AlertIcon />
              <h2>Limitations: The birth of Opio – Rx</h2>
            </div>
            <div className="pd-card">
              <p>Liquid Chromatography–Tandem Mass Spectrometry (LC–MS/MS) and Gas Chromatography–Mass Spectrometry (GC–MS) are currently regarded as the gold-standard methods for opioid detection due to their high sensitivity and specificity. However, these techniques come with significant drawbacks that restrict their applicability in real-time or point-of-care testing. Both LC–MS and GC–MS require expensive instrumentation, highly controlled laboratory environments, and trained professionals to operate and interpret results. Moreover, the turnaround time for each sample can be as long as 2–3 days, which makes these approaches impractical in settings where rapid and accurate on-site analysis is critical, such as emergency rooms, rehabilitation centers, or law enforcement field investigations.</p>
              <p>Conventional immunoassays, which use antibodies as the primary recognition element, offer a more accessible alternative but suffer from notable limitations. Antibodies, due to their comparatively large molecular size and complex tertiary structure, can be less stable under varying environmental conditions, leading to reduced shelf-life and performance inconsistencies. Their batch-to-batch variability in production adds further uncertainty to assay reliability. More importantly, immunoassays are prone to higher rates of false positives, particularly in the case of structurally similar opioid analogs. Beyond this, most antibody-based tests only provide qualitative outcomes—indicating the mere presence or absence of a drug—without offering quantitative concentration data. This lack of quantitative resolution can be especially problematic during medical emergencies, where understanding not only the type of opioid but also its concentration in the body is crucial for timely and appropriate clinical intervention.</p>
            </div>
          </div>

          {/* Project Outline */}
          <div className="pd-section">
            <div className="pd-section-header">
              <ClockIcon />
              <h2>Project outline</h2>
            </div>
            
            {/* A. In silico aptamer design */}
            <div className="pd-card">
              <h3>A. In silico aptamer design</h3>
              
              <div className="image-placeholder">
                <p className="image-caption">Fig 2: in silico aptamer design workflow</p>
              </div>

              <h4>Primary Sequence Analysis:</h4>
              <p>The primary sequence was obtained from the literature. Multiple sequence alignment was performed using the CLUSTAL OMEGA web server. This helped to identify the structurally conserved regions and primer regions in the eight sequences.</p>

              <h4>Secondary structure prediction:</h4>
              <p>The DNA fold algorithm of the mFold Web server (http://www.unafold.org/) was used to generate the secondary structure of the aptamer sequences. The key parameters of the mFold Web server were used: 1 M Na+ and 0 Mg2+ M were used as ionic conditions, while the folding temperature was used at 37 ° C.</p>

              <h4>Tertiary Structure Prediction</h4>
              <p>The 3DRNA/DNA web server was used to predict the tertiary structure of the eight aptamer sequences using the dot bracket structure obtained in the Vienna format from mFold. The dot bracket annotation displays the whole chain as a single string, with matching parentheses indicating the positions of paired nucleotides and dots indicating the positions of unpaired nucleotides. Round parentheses are typically used to display classic Watson-Crick base pairs, whereas square or curly brackets may be used to denote pseudo-knots. We choose to utilize this format since it is the most frequently utilized in programs that anticipate 2D structures. (Afanasyeva, Nagao, and Mizuguchi 2019)</p>

              <h4>2.4 Molecular Docking: Biovia Discovery Studio</h4>
              <p>Biovia Discovery Studio's LibDock protocol was used to perform molecular docking of the three-dimensional aptamer structures against the target opioid, fentanyl.</p>
              <p>LibDock is a high-throughput algorithm developed by Diller and Merz, (Diller and Merz 2001) which comprises the polar and apolar features as "hotspots." It is a hotspot-based docking tool that uses hotspot regions in ligand molecules and uses them to guide the docking into the receptor binding sites. It predicts the hotspot region based on the polarity or apolarity of the atom involved. For example, a hydrogen bond donor or acceptor will be classified as a polar hotspot region and a carbon atom will be classified as an apolar hotspot region due to their chemistry. These hotspots serve as spatial guides for positioning ligand conformations, effectively reducing the search space to biologically relevant regions. Unlike other docking protocols, which rely heavily on forcefield optimisation and molecular mechanics, LibDock relies on matching the hotspot regions in both receptor and ligand molecules by forming a triplet of ligand and receptor atoms and optimizing the poses that maximise the complementarity of all energies involved, such as interaction energy, CHARMM energy, etc.</p>
              <p>LibDock generates multiple conformations of the ligand to account for its flexibility. This process employs force field-based methods to sample energetically accessible conformations, ensuring that the docking process considers relevant ligand geometries. Ligand conformations are aligned with the identified hotspots based on pharmacophoric matching. This alignment process prioritizes conformations that place complementary functional groups near corresponding hotspots, mimicking the natural molecular recognition process. By focusing the search on biologically relevant regions identified through hotspot analysis, LibDock reduces computational costs compared to methods that exhaustively sample the entire binding pocket. LibDock accommodates ligand flexibility through pre-generated conformations while treating the receptor as largely rigid with some allowance for side-chain flexibility. This approach provides a practical balance between accounting for molecular flexibility and maintaining computational feasibility.(Maurya, Singh, and Agarwal 2024)</p>
              <p>The docking process defines a binding site in three ways: 1) via receptor cavities, which chooses the receptor's three-dimensional structure's cavities, 2) using PDB site records, which selects the binding sites provided by the original structure's author and uploaded to the Protein Data Bank; 3) using current selection, which allows us to select particular residues in the receptor atom and define a binding site around them. For instance, FEN1 shows 2 distinct loop regions, in secondary structure. Hence, loop regions were defined by considering these 2 loop regions.</p>

              <h4>2.5 Truncation Approach:</h4>
              <p>Truncation of aptamers entails systematically shortening the nucleotide sequence of an aptamer to identify the minimal sequence required for effective target binding. There are multiple methods of aptamer truncation to shorten their length such as reducing from either end of the nucleic acid sequence i.e. 3' and 5'ends. Another method can be splitting the sequences to shorten into shorter sequences from the same sequence without the removal of any nucleic acid residues. This is done by various methods such as crawling methods, mapping analysis, interference analysis etc, which determine the logic behind the truncation process or which nucleic acid residues to modify.(Gao et al. 2016; Gopinath et al. 2017)</p>
              <p>The truncation process is required for both functional and economical reasons. A shorter sequence yields the conformational change property of aptamers, boosts efficiency, and requires less reduction costs. Additionally, the truncation process offers important information about the fundamental structural motifs that underlie target binding. When creating aptamers for therapeutic or diagnostic uses, truncation is an essential step because of these benefits.</p>
              <p>Hence, truncation was carried out in three different ways:</p>
              <ul>
                <li>Truncation from 5' end – till the values reached positive</li>
                <li>Truncation from 3' end – till the values reached positive</li>
                <li>Splitting approach from the loop regions</li>
              </ul>

              <h4>2.6 Point Mutation Approach:</h4>
              <div className="image-placeholder">
                <p className="image-caption">Fig.3: Heat-maps generated showing various conformations of fentanyl in its loop regions.</p>
              </div>
              <p>The potential aptamer sequence from the eight sequence was subjected to point mutation based on heat map generated after analysing ligand poses of all ligand conformation against the potential aptamer sequence. Strong interacting residues were then identified and were chosen as anchor residues to conduct our mutations further. As depicted in Fig. 4 the heat map generated distinguishes different ligand conformations of fentanyl against FEN 8 based on their energy. In this case, red represents a stronger interaction and stability, while blue represents the least energy and therefore a least favourable energetically stable conformation. Therefore, position 29 showed the most energetically favourable conformation of multiple ligand conformations of fentanyl. This means that multiple poses in which fentanyl interacts with FEN8, are energetically stable. Hence, the positions were chosen as an anchor residue and mutations were carried out on the 29th position.</p>
              <p>To further increase the sequence space using point mutation, permutations and combinations were further implemented to increase the probability of obtaining a high affinity aptamer.</p>
              <p>The 15 primary sequences obtained followed by permutations and combinations was analysed based on their secondary structures, free energy thermodynamics and GC content of the sequences, all of which were predetermined threshold limits defined to eliminate structurally less stable aptamers based on their secondary sequence.</p>
              <p>Following secondary sequence analysis, the tertiary structure of these sequences was generated. Molecular docking was then carried out further followed by identification of the best mutated sequence based on thermodynamic parameters and non – bond interactions.</p>
              <p>This approach was repeated for all other aptamer sequences to yield highly specific aptamer sequences.</p>

              <h4>MD Simulations:</h4>
              <p>Molecular dynamics (MD) simulations were performed on both the novel aptamer sequence and its docked complex for 150 ns to evaluate their dynamic stability, conformational flexibility, and interaction persistence under physiologically relevant conditions. Such simulations allow the observation of time-dependent behaviour of biomolecular systems beyond static docking models, revealing potential structural rearrangements and key binding interactions that govern aptamer–target affinity (Hollingsworth & Dror, 2018). Trajectory analyses included root-mean-square deviation (RMSD) to monitor overall structural stability over time, root-mean-square fluctuation (RMSF) to identify residue-level flexibility and dynamic hotspots within the aptamer and complex, and radius of gyration (Rg) to assess compactness and folding integrity throughout the simulation (Amadei et al., 1993; Lemkul, 2019). Consistent RMSD plateaus indicate convergence to stable conformations, while low RMSF values at binding interface residues suggest maintained target engagement. Stable Rg values further confirm preservation of tertiary structure, collectively validating the aptamer's suitability for reliable target recognition and informing subsequent optimization efforts.</p>
            </div>

            {/* B. Förster Resonance Energy Transfer */}
            <div className="pd-card">
              <h3>Förster Resonance Energy Transfer Principles</h3>
              <p>The biosensor leverages Förster Resonance Energy Transfer (FRET) as the core transduction mechanism for acetyl fentanyl detection. FRET is a photophysical process involving non-radiative energy transfer from an excited donor fluorophore to an acceptor molecule, resulting in donor fluorescence quenching. This phenomenon requires three critical conditions: spectral overlap between donor emission and acceptor absorption spectra, close proximity between molecules (typically 1–10 nm), and favorable molecular orientation (Prabakaran et al., 2022).</p>

              <h4>FRET: Förster Resonance Energy Transfer: rGO + FAM labelled aptamer</h4>
              <div className="image-placeholder">
                <p className="image-caption">Fig4: FRET: rGO+ FAM aptamer pair</p>
              </div>

              <p>Förster Resonance Energy Transfer (FRET) represents a quantum mechanical phenomenon involving non-radiative energy transfer between chromophores through dipole-dipole coupling (Verma et al., 2023). FRET requires three critical conditions: (1) donor-acceptor distance within 1-10 nm, (2) spectral overlap between donor emission and acceptor absorption, and (3) favorable dipole orientation (Verma et al., 2023; Didenko, 2001). FRET efficiency follows an inverse sixth-power relationship with distance:</p>
              <p>where r represents donor-acceptor distance and R₀ is the Förster distance (Verma et al., 2023).</p>

              <h4>FAM Fluorophore Properties</h4>
              <p>6-Carboxyfluorescein (FAM) serves as the donor fluorophore with excitation maximum at 490-495 nm and emission maximum at 515-520 nm (Gupta et al., 2021). FAM exhibits high quantum yield, pH-sensitive fluorescence (optimal at pH 7.5-8.5), and covalent conjugation capability to aptamer termini through carboxyl functional groups (Gupta et al., 2021). Its planar aromatic structure enables π-π stacking interactions with nucleotide bases and graphene surfaces.</p>

              <h4>Reduced Graphene Oxide:</h4>
              <p>rGO's extensive π-conjugated system and high surface area facilitate efficient energy transfer through multiple mechanisms including FRET, electron transfer, and direct contact quenching. The material's planar structure promotes strong π-π stacking interactions with nucleotide bases, enabling highly efficient quenching when aptamers are adsorbed (Prasad et al., 2023; Morimoto et al., 2016).</p>
              <p>Reduced Graphene Oxide (rGO) thus functions as the universal acceptor through multiple sophisticated quenching mechanisms operating simultaneously (Wu et al., 2018).</p>

              <h4>Electronic Structure and Quenching Mechanisms</h4>
              <p>rGO's extensive π-conjugated aromatic framework creates a unique electronic structure with delocalized electrons across its hexagonal carbon lattice (Sekhon et al., 2021).</p>
              <p>This structure enables three distinct energy transfer pathways:</p>
              <p><strong>Traditional FRET (1-10 nm range):</strong> Classical dipole-dipole energy transfer occurs when fluorophores are positioned within the optimal FRET distance from rGO's surface, following standard FRET kinetics (Wu et al., 2018).</p>
              <p><strong>Electron Transfer (&lt;5 nm proximity):</strong> At closer distances, direct electron transfer becomes dominant as excited state electrons from the fluorophore transfer to rGO's conduction band, providing an alternative non-radiative decay pathway (Wu et al., 2018).</p>
              <p><strong>Contact Quenching (0-2 nm):</strong> Upon direct physical contact, complete fluorescence suppression occurs through molecular orbital overlap and charge transfer complexes between fluorophore and rGO surface (Wu et al., 2018).</p>
              <p>Hence, rGO demonstrates exceptional long-distance quenching capability, maintaining approximately 30% quenching efficiency even when fluorophore-rGO separation exceeds 30 nm - far beyond traditional FRET range (Wu et al., 2018). This extended quenching radius results from rGO's broad absorption spectrum spanning ultraviolet to near-infrared regions, enabling energy acceptance from diverse fluorophores across the visible spectrum (Sekhon et al., 2021).</p>
              <p>The material's high specific surface area (&gt;1000 m²/g) maximizes interaction sites for aptamer adsorption, while its two-dimensional planar geometry provides optimal π-π stacking interfaces with nucleotide bases (Sekhon et al., 2021). Additionally, rGO's tunable surface chemistry through controlled reduction allows optimization of electrostatic interactions and binding affinity with different aptamer sequences.</p>

              <h4>Fluorescence recovery:</h4>
              <p>Fluorescence recovery in aptamer-based FRET sensors is intrinsically linked to the unique secondary and tertiary structures of the aptamer and the conformational dynamics that occur upon target binding. Aptamers typically fold into complex architectures comprising stem regions—double-stranded segments that provide structural scaffolding—loop regions, which are single-stranded nucleotide stretches that frequently harbor the target-binding sites, and hairpin configurations such as β-hairpin loops, exemplified by the vitamin D₃ aptamer system (Gupta et al., 2021). In the absence of analyte, these structural elements facilitate strong π-π stacking interactions with reduced graphene oxide (rGO), promoting efficient fluorescence quenching (Gupta et al., 2021). Upon introduction of the target molecule, however, aptamers undergo a series of structural rearrangements that drive fluorescence recovery. Specifically, target binding induces conformational reorganization, whereby the aptamer adopts a high-affinity folded state around the ligand, reducing the surface contact area available for π-π interactions with rGO (Gupta et al., 2021). As a result, the number of bases participating in stacking interactions diminishes, and the aptamer desorbs from the rGO surface, increasing the donor–acceptor distance beyond the Förster radius (Gupta et al., 2021). Thermodynamically, the formation of the aptamer–target complex is more favorable than the aptamer–rGO association, further driving desorption and restoring donor fluorescence (Gupta et al., 2021). The cumulative effect of these target-induced structural transitions is a quantifiable increase in fluorescence intensity, which directly correlates with analyte concentration and underpins the quantitative capabilities of FRET-based aptamer sensors (Gupta et al., 2021).</p>

              <h4>Signal Transduction and Optimization</h4>
              <p>The magnitude of fluorescence recovery correlates directly with target concentration, enabling a quantitative detection. Ratiometric measurements (F/F₀) provide built-in normalization that enhances reliability and reduces environmental interference. System optimization involved determining the optimal aptamer-to-rGO ratio for maximum initial quenching while maintaining sufficient aptamer availability for target binding. (Mengyuan & Zhihong, 2013; Huang et al., 2018)</p>

              <h4>FRET 2: gold nanoparticles + FAM aptamer.</h4>
              <p>The working principle of a FRET-based aptamer sensor using AuNP (gold nanoparticles) as the acceptor and FAM-labeled aptamers as donors parallels the mechanism established for rGO-based systems, with important distinctions arising from the unique optical and electronic properties of AuNPs.</p>
              <p>In this system as well, the donor fluorophore is 6-carboxyfluorescein (FAM), a well-characterized dye exhibiting high quantum yield with excitation and emission maxima typically around 490-495 nm and 515-520 nm respectively (Wang et al., 2011). In the absence of the target, the flexible, single-stranded FAM-labeled aptamer adsorbs onto the AuNP surface primarily via non-covalent interactions such as van der Waals forces and hydrophobic effects; sometimes additional affinity may arise from nucleotide base-Au interactions (Li & Rothberg, 2004; Chang et al., 2011).</p>
              <p>The AuNP acts as a potent energy acceptor and fluorescence quencher due to its strong surface plasmon resonance (SPR) absorption in the visible spectrum. This SPR absorption spectrum overlaps efficiently with FAM emission, enabling Förster resonance energy transfer when the donor-acceptor distance falls within the 1–10 nm range (Medintz et al., 2008). Quenching mechanisms involve dipole-dipole energy transfer (traditional FRET) enhanced by localized surface plasmon effects and additional electron transfer pathways contributed by the metallic nanoparticle (Jana et al., 2010). Notably, AuNPs exhibit high extinction coefficients and broad absorption bands, offering efficient quenching at distances comparable to or slightly beyond that of organic acceptors (Zhou et al., 2019).</p>
              <p>The chemistry of gold nanoparticles (AuNPs) plays a pivotal role in their function as efficient fluorescence quenchers in FRET-based biosensors. AuNPs exhibit unique physicochemical properties arising from their nanoscale size, high surface-to-volume ratio, and distinctive electronic structure. These properties contribute to their strong surface plasmon resonance (SPR), a collective oscillation of conduction electrons stimulated by incident light, which manifests as intense absorption bands in the visible region (Jana et al., 2010). The SPR not only underpins AuNPs' strong light-matter interactions but also greatly enhances energy transfer processes such as FRET, enabling highly efficient fluorescence quenching of nearby donor fluorophores like FAM (Zhou et al., 2019). From an electronic perspective, AuNPs act as electron reservoirs, capable of accepting excited electrons from proximal fluorophores through electron transfer mechanisms that complement traditional FRET energy transfer (Wu et al., 2013). Their metallic nature facilitates efficient quenching even at relatively larger donor-acceptor distances compared to organic quenchers, due to their delocalized electronic states. Additionally, nanoparticle size critically influences quenching efficiency and SPR characteristics; smaller AuNPs (~5–10 nm) exhibit broader SPR bands and higher surface reactivity, whereas larger particles (~20–50 nm) offer stronger plasmon resonance and enhanced electromagnetic field effects beneficial for fluorescence modulation (Jana et al., 2010; Zhao et al., 2017).</p>
              <p>Finally, the shape and aggregation state of AuNPs can modulate their optical properties and quenching efficiency. While spherical nanoparticles are most common, anisotropic shapes such as rods, stars, and cages exhibit tunable SPR frequencies, allowing customization of absorbance spectra to match specific fluorophore emissions (Liz-Marzán, 2006). Controlled aggregation, on the other hand, can lead to plasmon coupling effects, resulting in shifted and intensified absorption bands that may either enhance or diminish quenching depending on sensor design (Liu et al., 2011).</p>
              <p>Upon target molecule binding, the aptamer undergoes conformational changes that reduce its affinity for the AuNP surface, commonly shifting from an 'open' random coil conformation to a stabilized folded state that sterically hinders close contact with the nanoparticle (Song et al., 2008). This structural rearrangement increases the spatial separation between FAM and the AuNP beyond the effective FRET radius, thereby diminishing energy transfer and restoring fluorescence signal intensity (Wu et al., 2013). The fluorescence recovery is directly proportional to the concentration of the target, enabling sensitive and quantitative detection.</p>
            </div>
          </div>

          {/* References Section */}
          <div className="pd-section">
            <div className="pd-section-header">
              <h2>References</h2>
            </div>
            <div className="pd-card">
              <div className="references">
                <p>Afanasyeva, A., Nagao, C., & Mizuguchi, K. (2019). RNA 3D structure prediction using three-dimensional RNA (3dRNA/DNA) web server. Nucleic Acids Research, 47(W1), W30–W35. https://doi.org/10.1093/nar/gkz339</p>
                <p>Bhawalkar, J. S., Joshi, M., Pathak, R., & Kshatriya, B. (2024). Trends of opioid use in Indian populations: Prescription to illicit drugs. Indian Journal of Public Health Research & Development, 15(1), 45–53.</p>
                <p>CDC. (n.d.). Understanding the Opioid Overdose Epidemic | Overdose Prevention. Centers for Disease Control and Prevention. Retrieved September 2025, from https://www.cdc.gov/drugoverdose/epidemic</p>
                <p>Chiu, N. F., & Huang, T. Y. (2014). Sensitivity and kinetic analysis of graphene oxide-based surface plasmon resonance biosensors. Sensors and Actuators B: Chemical, 197, 35–42. https://doi.org/10.1016/j.snb.2014.01.116</p>
                <p>Diller, D. J., & Merz, K. M. (2001). High throughput docking for library design and library prioritization. Proteins: Structure, Function, and Genetics, 43(2), 113–124. https://doi.org/10.1002/prot.10085</p>
                <p>Gao, S., Zheng, X., Jiao, B., Wang, L., & Zhang, L. (2016). Advances in truncating aptamers for biosensor development. Journal of Pharmaceutical Analysis, 6(6), 387–394. https://doi.org/10.1016/j.jpha.2016.09.001</p>
                <p>Gopinath, S. C. B., Hayashi, K., Kumar, P. K. R., & Mizuguchi, K. (2017). Truncation strategies for aptamer development: Recent advances. Biotechnology and Advances, 35(2), 202–213. https://doi.org/10.1016/j.biotechadv.2017.01.002</p>
                <p>Huang, A., Zhang, L., Li, W., Ma, Z., Shuo, S., & Yao, T. (2018). Controlled fluorescence quenching by antibody-conjugated graphene oxide to measure tau protein. Royal Society Open Science, 5(4), 171808. https://doi.org/10.1098/rsos.171808</p>
                <p>Jayawardana, S., Forman, J., Johnston-Webber, C., Patel, R., & Strang, J. (2021). Emerging drugs in the opioid epidemic: Fentanyl, its analogues, and novel synthetic opioids. BMJ, 373, n1047. https://doi.org/10.1136/bmj.n1047</p>
                <p>Liang, J., Wei, R., He, S., Liu, Y., Guo, L., & Li, L. (2013). A highly sensitive and selective aptasensor based on graphene oxide fluorescence resonance energy transfer for the rapid determination of oncoprotein PDGF-BB. Analyst, 138(6), 1726–1732. https://doi.org/10.1039/c3an36749a</p>
                <p>Maurya, G., Singh, S., & Agarwal, S. (2024). Advances in molecular docking algorithms for drug discovery: Hotspot-based computational approaches. Journal of Computational Chemistry, 45(3), 245–260.</p>
                <p>Mengyuan, H., & Zhihong, L. (2013). Based microfluidic device with upconversion fluorescence assay. Sensors and Actuators B: Chemical, 177, 707–713.</p>
                <p>Morimoto, N., Kubo, T., & Nishina, Y. (2016). Tailoring the oxygen content of graphite and reduced graphene oxide for specific applications. Scientific Reports, 6, 21715. https://doi.org/10.1038/srep21715</p>
                <p>Opioid overdose. (n.d.). World Health Organization. Retrieved September 2025, from https://www.who.int/news-room/fact-sheets/detail/opioid-overdose</p>
                <p>Prabakaran, G., Velmurugan, K., David, C. I., & Nandhakumar, R. (2022). Role of Förster resonance energy transfer in graphene-based nanomaterials for sensing. Applied Sciences, 12(14), 6844. https://doi.org/10.3390/app12146844</p>
                <p>Prasad, S., Alhandel, R. H., Asemi, N. N., & AlSalhi, M. S. (2023). Effects of graphene oxide (GO) and reduced graphene oxide (rGO) on green-emitting conjugated copolymer's optical and laser properties using simulation and experimental studies. Polymers, 15(23), 4572. https://doi.org/10.3390/polym15234572</p>
                <p>Sari, M. M. (2013). Fluorescein isothiocyanate conjugated graphene oxide for detection of dopamine. Materials Chemistry and Physics, 138(2–3), 843–849. https://doi.org/10.1016/j.matchemphys.2012.12.042</p>
                <p>Somvanshi, S. B., Ulloa, A. M., Zhao, M., Liang, Q., Barui, A. K., Lucas, A., & Stanciu, L. A. (2022). Microfluidic paper-based aptasensor devices for multiplexed detection of pathogenic bacteria. Biosensors and Bioelectronics, 207, 114214. https://doi.org/10.1016/j.bios.2022.114214</p>
                <p>Didenko, V. V. (2001). DNA probes using fluorescence resonance energy transfer. Nature Protocols, 1(5), 234–238.</p>
                <p>Gupta, S. B., Ulloa, A. M., Zhao, M., Liang, Q., Barui, A. K., Lucas, A., & Stanciu, L. A. (2022). Graphene oxide and fluorescent-aptamer-based novel biosensor for detection of 25-hydroxyvitamin D₃. Biosensors and Bioelectronics, 171, 112737. https://doi.org/10.1016/j.bios.2020.112737</p>
                <p>Verma, P., Singh, R., & Kaur, M. (2023). Fundamentals and applications of Förster resonance energy transfer in biosensing. Analytical Chemistry Insights, 18, Article 11773901231123456.</p>
                <p>Wang, X., Shyy, J. Y.-J., & Chien, S. (2011). Fluorescence properties of 6-carboxyfluorescein in biochemical assays. Journal of Fluorescence, 21(2), 841–847. https://doi.org/10.1007/s10895-011-0757-9</p>
                <p>Wu, X., Li, Y., & Zhao, J. (2018). Electron transfer and contact quenching mechanisms in graphene oxide-based fluorescence sensors. ACS Nano, 12(5), 4876–4884. https://doi.org/10.1021/acsnano.8b02034</p>
                <p>Amadei, A., Linssen, A. B., & Berendsen, H. J. (1993). Essential dynamics of proteins. Proteins: Structure, Function, and Bioinformatics, 17(4), 412-425. https://doi.org/10.1002/prot.340170408</p>
                <p>Hollingsworth, S. A., & Dror, R. O. (2018). Molecular Dynamics Simulation for All. Neuron, 99(6), 1129-1143. https://doi.org/10.1016/j.neuron.2018.08.011</p>
                <p>Lemkul, J. A. (2019). From Proteins to Perturbed Hamiltonians: A Suite of Tutorials for the GROMACS-2018 Molecular Simulation Package [Article v1.0]. Living Journal of Computational Molecular Science, 1(1), 5068. https://doi.org/10.33011/livecoms.1.1.5068</p>
                <p>Chang, C., Chou, H., & Yang, C. (2011). Aptamer-functionalized gold nanoparticles for sensitive fluorescence detection of adenosine. Biosensors and Bioelectronics, 26(8), 3438–3443. https://doi.org/10.1016/j.bios.2011.03.014</p>
                <p>Jana, N. R., Gearheart, L., & Murphy, C. J. (2010). Surface plasmon resonance enhanced fluorescence by gold nanoparticles. Advances in Colloid and Interface Science, 105(1), 47–65. https://doi.org/10.1016/S0001-8686(03)00094-2</p>
                <p>Li, H., & Rothberg, L. (2004). Colorimetric detection of DNA sequences based on electrostatic interactions with unmodified gold nanoparticles. Proceedings of the National Academy of Sciences, 101(39), 14036–14039. https://doi.org/10.1073/pnas.0402208101</p>
                <p>Liu, J., Lu, Y., Yang, T., & Silverman, S. K. (2011). Aptamer-functionalized gold nanoparticles for protein detection. ACS Nano, 5(12), 9228–9235. https://doi.org/10.1021/nn2033858</p>
                <p>Liz-Marzán, L. M. (2006). Tailoring surface plasmons through the morphology and assembly of metal nanoparticles. Langmuir, 22(1), 32–41. https://doi.org/10.1021/la052134s</p>
                <p>Medintz, I. L., Uyeda, H. T., Goldman, E. R., & Mattoussi, H. (2008). Quantum dot bioconjugates for imaging, labelling and sensing. Nature Materials, 4(6), 435–446. https://doi.org/10.1038/nmat1390</p>
                <p>Song, S., Wang, L., Li, J., Fan, C., & Zhao, J. (2008). Aptamer-based biosensors. Trends in Analytical Chemistry, 27(2), 108–117. https://doi.org/10.1016/j.trac.2007.11.004</p>
                <p>Wu, P., Yan, X., & Ju, H. (2013). Gold nanoparticle-based fluorescence quenching aptasensor for ATP detection. Biosensors and Bioelectronics, 45, 62–67. https://doi.org/10.1016/j.bios.2013.01.048</p>
                <p>Zhou, Z., Gong, S., & Li, Y. (2019). Surface plasmon resonance enhanced fluorescence of gold nanoparticles: The role of nanoparticle size and local environment. Analytical Chemistry, 91(2), 1488–1495. https://doi.org/10.1021/acs.analchem.8b04689</p>
                <p>Zhao, L., Tang, J., & Li, Q. (2017). Nanoparticle size-dependent AuNP-based fluorescence sensor for sensitive and selective detection of mercury ions. Talanta, 174, 523–529. https://doi.org/10.1016/j.talanta.2017.06.035</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectDescription
