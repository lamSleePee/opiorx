import React from 'react'

// Enhanced SVG icons for DBTL cycles
const DesignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const BuildIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const TestIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4"/>
    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
  </svg>
)

const LearnIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const SuccessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
)

const WetLabPage = () => {
  return (
    <div className="wet-lab-page">
      <div className="page-header">
        <h1>Wet Lab DBTL</h1>
        <p>Experimental validation, testing, and laboratory protocols for Engineering-DBTL Cycles</p>
      </div>
      
      <div className="wet-lab-content">
        <div className="wet-lab-container">
          
          {/* Project Overview */}
          <div className="dbtl-section project-overview">
            <div className="dbtl-section-header">
              <SuccessIcon />
              <h2>Engineering a Paper-Based AuNP FRET Biosensor for Acetyl Fentanyl Detection</h2>
            </div>
            
            <div className="project-description">
              <p>Our project aimed to develop a rapid, sensitive, and portable biosensor for the detection of acetyl fentanyl, a potent synthetic opioid. To achieve this, we engineered a FRET (Förster Resonance Energy Transfer) based system integrated into a paper-based microfluidic device.</p>
              
              <div className="fret-explanation">
                <h3>FRET Mechanism</h3>
                <p>FRET is a distance-dependent energy transfer mechanism between a donor fluorophore and an acceptor molecule. This phenomenon requires three critical conditions:</p>
                <ul>
                  <li>Spectral overlap between donor emission and acceptor absorption spectra</li>
                  <li>Close proximity between molecules (typically 1-10 nm)</li>
                  <li>Favorable molecular orientation</li>
                </ul>
              </div>
              
              <p>Our development followed an iterative Design-Build-Test-Learn cycle, where each phase provided critical insights that drove the optimization of our final biosensor.</p>
            </div>
          </div>

          {/* Cycle 1: Graphene Oxide */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <DesignIcon />
              <h2>Cycle 1: Establishing a Foundation with Graphene Oxide (GO)</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We began by designing a FRET pair using commercially purchased Graphene Oxide (GO) as a universal acceptor/quencher and FITC (Fluorescein isothiocyanate) as the donor fluorophore. This design was predicated on two key factors:</p>
                  <ul>
                    <li>The significant spectral overlap between the emission spectrum of FITC and the absorption spectrum of GO</li>
                    <li>GO's high surface area which promotes adsorption of biomolecules</li>
                  </ul>
                  <p>We anticipated that the planar, aromatic structure of GO would facilitate efficient π-π stacking with the fluorophore, leading to quenching.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We prepared solutions with varying volumes and concentrations of both GO and FITC to create a library of testable conditions.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We performed fluorescence spectroscopy to measure the quenching efficiency (F0/F) of FITC by GO across these different parameters.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We faced significant optimization issues. While some quenching occurred, achieving a consistent and efficient FRET pair was challenging. We identified two major hurdles:</p>
                  <ul>
                    <li>The aggregation properties of GO in solution led to inconsistent quenching and light scattering, interfering with measurements</li>
                    <li>Finding an optimum concentration of GO that quenched effectively without causing excessive aggregation or background noise proved difficult</li>
                  </ul>
                  <p>The results were highly variable, indicating that GO's inherent physicochemical properties did not provide a stable enough foundation for a reliable aptasensor. This critical learning point led us to pivot our strategy and select a more effective and consistent quenching material.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle 2: Reduced Graphene Oxide */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <BuildIcon />
              <h2>Cycle 2: Optimizing the FRET Pair and Assessing Stability with Reduced Graphene Oxide (rGO)</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Based on our learnings from Cycle 1, we redesigned the FRET system using reduced Graphene Oxide (rGO) this time. rGO offers superior quenching efficiency and a more consistent structure compared to GO. A key design concern was the potential for rGO to remain in suspension for a longer time, which would create inconsistency between experiments. To test this, we designed an experiment using Bovine Serum Albumin (BSA) as a model heavy molecule to see if it could stabilize the rGO dispersion and facilitate consistent settling.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We used a commercially purchased rGO solution. We then created two sets of solutions:</p>
                  <ul>
                    <li><strong>FRET Optimization:</strong> Solutions with varying concentrations of rGO and a fixed concentration of FITC</li>
                    <li><strong>Settling Assay:</strong> Solutions of rGO alone and rGO pre-incubated with BSA, which were left to stand over time</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We performed two key experiments:</p>
                  <ul>
                    <li><strong>Proof of FRET:</strong> We used fluorescence spectroscopy to test the rGO-FITC pairs. We successfully identified a concentration of rGO that provided maximum quenching of FITC fluorescence, confirming a highly efficient FRET effect</li>
                    <li><strong>Settling Study:</strong> We visually observed and measured the absorbance of the rGO and rGO+BSA solutions over time to monitor aggregation and settling. After which FITC was added to check efficiency</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We successfully established a proof-of-concept for an efficient FRET system using rGO. The settling study provided a critical insight: rGO suspensions showed inconsistent settling over time, which would lead to poor reproducibility. The addition of BSA helped mitigate this settling, improving dispersion stability. This taught us that including a stabilizer like BSA could be beneficial for achieving reliable and reproducible results in our quenching and detection assays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle 3: Biological Integration */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <TestIcon />
              <h2>Cycle 3: Integrating the Biological Recognition Element</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We integrated our novel, custom-synthesized DNA aptamer specific to fentanyl into the FRET system. The aptamer was labelled with a FAM fluorophore as the donor. In the absence of the target, the aptamer adsorbs onto the rGO surface, bringing FAM close to rGO and quenching its fluorescence.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We tested various concentrations of the FAM-labelled aptamer against our optimized rGO concentration from Cycle 2.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We conducted thorough quenching studies, measuring the initial fluorescence of the aptamer alone and then after adding rGO. We determined the optimal ratio of aptamer-to-rGO that yielded the highest quenching efficiency (highest F0/F ratio), indicating successful complex formation.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We successfully formed the Aptamer-rGO biosensing complex and defined the optimal working concentrations for both components. The system was now primed for detection via fluorescence recovery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle 4: Target Detection */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <BuildIcon />
              <h2>Cycle 4: Demonstrating Target Detection in Solution</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>With the stable Aptamer-rGO complex built, we designed an experiment to test its response to the target molecule, acetyl fentanyl an analogue for Fentanyl. The design hypothesis was that upon target binding, the aptamer would undergo a conformational change, releasing from the rGO surface and restoring FAM fluorescence.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We spiked the pre-quenched Aptamer-rGO complex (stabilized with BSA) with a range of known acetyl fentanyl concentrations.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We measured the fluorescence recovery for each target concentration using it to plot fluorescence intensity against analyte concentration, which defined the dynamic range and limit of detection (LOD) of our solution-based biosensor.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We validated the core mechanism of our biosensor. We proved that the binding event between the aptamer and acetyl fentanyl could be transduced into a quantifiable fluorescent signal, confirming the functionality of our engineered system. However, we observed suboptimal fluorescence quenching and recovery performance with rGO, which limited the sensitivity and dynamic range of our biosensor. The incomplete quenching resulted in high background fluorescence, while the fluorescence recovery upon target binding was insufficient for robust detection at low concentrations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle 5: Gold Nanoparticles */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <TestIcon />
              <h2>Cycle 5: Enhancing Performance with Gold Nanoparticles (AuNPs)</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Recognizing the limitations of rGO in achieving optimal fluorescence quenching and recovery, we redesigned our FRET system using Gold Nanoparticles (AuNPs) as the quencher. AuNPs offer several advantages over rGO:</p>
                  <ul>
                    <li>Superior quenching efficiency due to their unique surface plasmon resonance properties</li>
                    <li>More predictable and controllable surface chemistry for aptamer conjugation</li>
                    <li>Enhanced biocompatibility</li>
                  </ul>
                  <p>We designed the system where FAM-labeled aptamers would be conjugated to AuNPs via thiol-gold bonds, ensuring stable attachment and efficient quenching in the absence of target.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We synthesized citrate-stabilized AuNPs (15-20 nm diameter) and functionalized them with thiol-modified FAM-labeled aptamers. We optimized the salt-aging process to achieve high aptamer loading density while maintaining colloidal stability. Various aptamer-to-AuNP ratios were prepared to identify optimal conditions.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We conducted comprehensive quenching efficiency studies, comparing the AuNP-aptamer system to our previous rGO-based system. We measured initial fluorescence quenching (F0/F ratios) and tested fluorescence recovery upon addition of acetyl fentanyl across a range of concentrations.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>The AuNP-based system demonstrated dramatically improved performance compared to rGO. We achieved &gt;95% fluorescence quenching efficiency (F0/F &gt; 20), compared to ~70% with rGO. Most importantly, the fluorescence recovery upon target binding was significantly enhanced, with a 5-fold improvement in signal-to-noise ratio. The system showed excellent stability and reproducibility, with minimal particle aggregation. The limit of detection was improved by an order of magnitude, and the dynamic range was substantially expanded. This optimization resolved the key limitations identified in Cycle 4, providing a robust platform for device development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle 6: Portable Device */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <SuccessIcon />
              <h2>Cycle 6: Transitioning to a Portable Device</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>To translate our optimized AuNP-based solution proof-of-concept into a practical, point-of-care device, we designed a paper-based microfluidic biosensor. This design choice was driven by the need for portability, low cost, and ease of use. The paper substrate inherently solved any potential settling issues and provided a stable matrix for the AuNP-aptamer conjugates.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We investigated various types of paper substrates to find one with optimal wicking properties, minimal background fluorescence, and compatibility with our AuNP-aptamer conjugates. We functionalized the Whatmann paper by depositing our optimized AuNP-aptamer complex, ensuring uniform distribution and maintaining bioactivity.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We tested the device by applying solutions of acetyl fentanyl at various concentrations and using optical methods (fluorescence reader and UV light visualization) to measure the fluorescence recovery directly on the paper substrate. We evaluated device performance, including response time, sensitivity, selectivity, and shelf-life stability.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>We successfully demonstrated that the enhanced AuNP-based FRET detection mechanism could be effectively integrated into a solid-state, portable format. The paper-based device showed rapid response times (&lt;10 minutes), maintained the improved sensitivity achieved with AuNPs, and demonstrated excellent selectivity against common interferents. This final cycle culminated in a functional prototype of a rapid, highly sensitive paper-based biosensor for acetyl fentanyl detection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="dbtl-section conclusion-section">
            <div className="dbtl-section-header">
              <SuccessIcon />
              <h2>Conclusion</h2>
            </div>
            
            <div className="conclusion-content">
              <p>Through six rigorous engineering cycles, we systematically developed and refined a biosensor from a basic proof-of-concept in solution to a highly optimized, functional portable device. Each cycle addressed critical challenges, from initial material selection and stability optimization (GO to rGO to AuNPs) to biological integration and final device fabrication.</p>
              
              <p>The pivotal introduction of AuNPs in Cycle 5 resolved the key performance limitations identified with rGO, resulting in dramatically improved sensitivity and dynamic range. This iterative process ensured that every component was optimized, resulting in a robust, reliable, and highly sensitive engineered system for the detection of acetyl fentanyl, a critical synthetic opioid.</p>
              
              <div className="key-achievements">
                <h3>Key Achievements</h3>
                <ul>
                  <li><strong>Superior Performance:</strong> &gt;95% fluorescence quenching efficiency with AuNPs vs ~70% with rGO</li>
                  <li><strong>Enhanced Sensitivity:</strong> 5-fold improvement in signal-to-noise ratio</li>
                  <li><strong>Improved Detection:</strong> Order of magnitude improvement in limit of detection</li>
                  <li><strong>Rapid Response:</strong> &lt;10 minutes response time</li>
                  <li><strong>Portable Format:</strong> Paper-based microfluidic device for point-of-care use</li>
                  <li><strong>Excellent Selectivity:</strong> Demonstrated selectivity against common interferents</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WetLabPage