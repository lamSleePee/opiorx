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

const DryLabPage = () => {
  return (
    <div className="dry-lab-page">
      <div className="page-header">
        <h1>Dry Lab DBTL</h1>
        <p>Computational design, modeling, and in silico analysis for Engineering-DBTL Cycles</p>
      </div>
      
      <div className="dry-lab-content">
        <div className="dry-lab-container">
          
          {/* Engineering Success Overview */}
          <div className="dbtl-section success-overview">
            <div className="dbtl-section-header">
              <SuccessIcon />
              <h2>Engineering Success: DBTL Cycle - In Silico Aptamer Design</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Aptamer sequences targeting synthetic opioids (fentanyl, oxycodone, tramadol, and methadone) were curated from literature. Bioinformatics tools such as multiple sequence alignment and secondary structure prediction were used to identify conserved motifs and loop regions crucial for aptamer–target interactions.</p>
                  <h4>Key Design Strategies:</h4>
                  <ul>
                    <li>Leveraging loop regions as binding hotspots</li>
                    <li>Introducing site-specific point mutations at residues involved in strong interactions (guided by docking affinity heat maps)</li>
                    <li>Applying computational truncation approaches to identify essential nucleotides maintaining structure and binding and generate shorter sequences</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>3D aptamer structures were modelled using predicted secondary structure data. Docking protocols were employed to simulate aptamer–opioid binding:</p>
                  <ul>
                    <li>ZDock protocol for initial rigid docking</li>
                    <li>LibDock protocol with flexible torsional angle considerations to better represent interaction dynamics</li>
                    <li>Variants were generated through point mutations and truncation design for stability and target affinity</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Each designed sequence was tested computationally through:</p>
                  <ul>
                    <li>Molecular docking to evaluate binding affinities and specific nucleotide–ligand interactions</li>
                    <li>Secondary structure verification to check conformational stability of mutated or truncated sequences</li>
                    <li>Binding free energy was the key parameter used</li>
                    <li>Molecular dynamics (MD) simulations in explicit solvent to validate long-term thermodynamic stability and binding kinetics of aptamer–opioid complexes</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Rigid docking (ZDock) caused steric clashes as ligand flexibility was neglected, highlighting the need for advanced protocols. Use of LibDock with flexible torsion resolved steric clashes and produced stronger predicted interactions.</p>
                  <h4>Key Findings:</h4>
                  <ul>
                    <li>Point mutations had dual effects: some disrupted folding stability (increased up to threefold), others enhanced binding affinity two- to threefold while keeping folding reasonably stable</li>
                    <li>Truncation studies showed that certain terminal nucleotides could be removed without major losses, but excessive truncation caused a sharp decline in affinity and conformational stability</li>
                    <li>Collectively, the best aptamer variants balanced binding affinity and structural and thermodynamic stability, validated by MD simulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DBTL Cycle 1: Initial Design */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <DesignIcon />
              <h2>DBTL Cycle 1: In Silico Aptamer Design and Optimization</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>A comprehensive literature review gathered reported aptamer sequences targeting synthetic opioids, including fentanyl, oxycodone, tramadol, and methadone. Multiple sequence alignments identified conserved and variable regions across these sequences. Secondary structure predictions revealed potential stem–loop motifs and assessed their relative stability, pinpointing candidate nucleotides for further modification.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Molecular docking simulations were conducted using the ZDock protocol in BIOVIA Discovery Studio. These studies provided insights into the structural stability and binding affinity between aptamers and opioid targets.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Docking outcomes facilitated the selection of the most promising aptamer sequence, which served as the lead candidate for designing a novel aptamer with enhanced opioid-binding specificity.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Although the docking procedure was successfully executed, many predicted interactions were unfavorable. Post-analysis revealed that the docking algorithm treated opioids as rigid molecules, neglecting their inherent ligand flexibility. This limitation led to steric clashes and reduced the accuracy of binding predictions, highlighting the need for more sophisticated simulation approaches.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DBTL Cycle 1: Iteration */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <BuildIcon />
              <h2>DBTL Cycle 1: Iteration</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>To address steric clashes and unfavourable interactions observed previously, various docking protocols were explored.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>The LibDock protocol was employed to dock candidate aptamer sequences against their opioid targets. Binding spheres were defined around loop regions identified in secondary structure predictions, as these loops are theorized to play a pivotal role in aptamer–target interactions.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Molecular docking was carried out using the LibDock protocol.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Evaluation indicated that torsional flexibility significantly influenced aptamer interactions. Steric clashes limiting aptamer affinity were resolved, and molecules exhibited stronger, more favorable interactions, indicating enhanced binding affinity. The most promising aptamer was identified through this data.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DBTL Cycle 2: Point Mutation */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <TestIcon />
              <h2>DBTL Cycle 2: Developing Novel Aptamers via Point Mutation</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Aptamer sequences targeting fentanyl, methadone, oxycodone, and tramadol were extracted from existing literature. Secondary structure analysis combined with docking simulations identified the candidate sequence exhibiting the highest affinity and stability for further development of novel sequences.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Site-specific point mutations guided by docking affinity heat maps were introduced at nucleotide positions critical for opioid binding. Variants were designed to enhance binding characteristics.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Each mutated variant underwent molecular docking evaluations and secondary structure predictions to assess the impact of mutations on binding affinity and conformational stability.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Point mutations at certain nucleotides significantly altered aptamer stability, with folding free energy (ΔG) increasing up to threefold and adversely affecting binding. However, selected mutations resulted in a two- to threefold enhancement in binding affinity while moderately elevating ΔG by around twofold. This suggests an optimal balance between structural stability and target engagement. These improved variants were further evaluated through post-docking analyses and molecular dynamics simulations to confirm thermodynamic stability and binding kinetics in an aqueous environment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DBTL Cycle 3: Truncation Approach */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <BuildIcon />
              <h2>DBTL Cycle 3: Developing Aptamers In Silico Using Truncation Approach</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Computational truncation was employed to systematically reduce the aptamer length by removing nucleotides that exhibited minimal contribution to target binding affinity. Additionally, selective point mutations were introduced into truncated aptamer sequences to potentially enhance binding affinity and specificity.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Truncated aptamer sequences were generated in silico, focusing on sequence variants predicted to maintain essential binding properties while minimizing length.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Binding free energies of the truncated aptamers were calculated using molecular docking. The top five candidate aptamers demonstrating the most favourable binding free energies were subsequently selected for detailed molecular docking analyses.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Truncation from both the 5' and 3' termini resulted in significantly shortened sequences accompanied by pronounced reductions in binding free energy. Notably, specific nucleotide positions were identified where deletion caused an approximately two-fold decrease in binding affinity, underscoring their critical role. Molecular docking analyses revealed substantial deterioration in ligand-aptamer interactions following truncation, indicating that certain nucleotides contribute directly to target binding and structural integrity. Furthermore, the observed declines in thermodynamic stability metrics suggested a concomitant loss of aptamer conformational stability upon truncation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DBTL Cycle 4: Truncation Iteration */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <TestIcon />
              <h2>DBTL Cycle 4: Iteration - Developing Aptamers In Silico Using Truncation Approach</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-4">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DesignIcon />
                  <h3>Design</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Computational truncation was employed to systematically reduce the aptamer length by removing nucleotides that exhibited minimal contribution to target binding affinity. Additionally, selective point mutations were introduced into truncated aptamer sequences to potentially enhance binding affinity and specificity.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <BuildIcon />
                  <h3>Build</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Truncated aptamer sequences were generated in silico, focusing on sequence variants predicted to maintain essential binding properties while minimizing length.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TestIcon />
                  <h3>Test</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Binding free energies of the truncated aptamers were calculated using molecular docking. The top five candidate aptamers demonstrating the most favorable binding free energies were subsequently selected for detailed molecular docking analyses.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <LearnIcon />
                  <h3>Learn</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Truncation from both the 5' and 3' termini resulted in significantly shortened sequences accompanied by pronounced reductions in binding free energy. Notably, specific nucleotide positions were identified where deletion caused an approximately two-fold decrease in binding affinity, underscoring their critical role. Molecular docking analyses revealed substantial deterioration in ligand-aptamer interactions following truncation, indicating that certain nucleotides contribute directly to target binding and structural integrity. Furthermore, the observed declines in thermodynamic stability metrics suggested a concomitant loss of aptamer conformational stability upon truncation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DryLabPage