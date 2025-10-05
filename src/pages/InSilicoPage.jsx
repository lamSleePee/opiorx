import React from 'react'

// Enhanced SVG icons for In Silico sections
const AnalysisIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 0-6-3-6-3s1-3 6-3 6 3 6 3-1 3-6 3z"/>
    <path d="M9 5c-5 0-6 3-6 3s1 3 6 3 6-3 6-3-1-3-6-3z"/>
    <path d="M15 12h6"/>
    <path d="M3 12h6"/>
  </svg>
)

const StructureIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const DockingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const TruncationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/>
    <path d="M3 12h18"/>
    <path d="M3 18h18"/>
  </svg>
)

const MutationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const SimulationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4"/>
    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
  </svg>
)

const InSilicoPage = () => {
  return (
    <div className="in-silico-page">
      <div className="page-header">
        <h1>In Silico Aptamer Design</h1>
        <p>Computational design and optimization of aptamer sequences for synthetic opioid detection</p>
      </div>
      
      <div className="in-silico-content">
        <div className="in-silico-container">
          
          {/* Workflow Overview */}
          <div className="dbtl-section workflow-overview">
            <div className="dbtl-section-header">
              <AnalysisIcon />
              <h2>In Silico Aptamer Design Workflow</h2>
            </div>
            
            <div className="workflow-description">
              <p>Our computational approach to aptamer design involves a systematic workflow that combines sequence analysis, structure prediction, molecular docking, and optimization techniques to develop highly specific aptamers for synthetic opioid detection.</p>
              
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Primary Sequence Analysis</h4>
                    <p>Literature-based sequence collection and multiple sequence alignment</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Structure Prediction</h4>
                    <p>Secondary and tertiary structure modeling using computational tools</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Molecular Docking</h4>
                    <p>LibDock-based interaction analysis with target opioids</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Optimization</h4>
                    <p>Truncation and point mutation for enhanced binding affinity</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Validation</h4>
                    <p>MD simulations for dynamic stability assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Sequence Analysis */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <AnalysisIcon />
              <h2>Primary Sequence Analysis</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-2">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <AnalysisIcon />
                  <h3>Sequence Collection</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Primary sequences were obtained from literature sources, focusing on aptamers with known binding affinity to synthetic opioids. Eight distinct sequences were selected as starting points for our computational analysis.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <AnalysisIcon />
                  <h3>Multiple Sequence Alignment</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Multiple sequence alignment was performed using the CLUSTAL OMEGA web server. This analysis helped identify structurally conserved regions and primer regions across the eight sequences, providing insights into common structural motifs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Structure Prediction */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <StructureIcon />
              <h2>Structure Prediction</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-2">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <StructureIcon />
                  <h3>Secondary Structure Prediction</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>The DNA fold algorithm of the mFold Web server (http://www.unafold.org/) was used to generate secondary structures of aptamer sequences. Key parameters included:</p>
                  <ul>
                    <li>1 M Na+ and 0 Mg2+ ionic conditions</li>
                    <li>Folding temperature of 37°C</li>
                    <li>Vienna format output for tertiary structure prediction</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <StructureIcon />
                  <h3>Tertiary Structure Prediction</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>The 3DRNA/DNA web server was used to predict tertiary structures using dot bracket notation from mFold. This format displays the chain as a single string with:</p>
                  <ul>
                    <li>Matching parentheses for Watson-Crick base pairs</li>
                    <li>Dots for unpaired nucleotides</li>
                    <li>Square/curly brackets for pseudo-knots</li>
                  </ul>
                  <p>This format is widely used in programs that predict 2D structures (Afanasyeva, Nagao, and Mizuguchi 2019).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Molecular Docking */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <DockingIcon />
              <h2>Molecular Docking: Biovia Discovery Studio</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-2">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DockingIcon />
                  <h3>LibDock Protocol</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Biovia Discovery Studio's LibDock protocol was used for molecular docking of three-dimensional aptamer structures against target opioids. LibDock is a high-throughput algorithm that uses polar and apolar features as "hotspots" to guide docking into receptor binding sites.</p>
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Hotspot-based docking approach</li>
                    <li>Polar/apolar classification of atoms</li>
                    <li>Reduced search space for efficiency</li>
                    <li>Multiple ligand conformations</li>
                  </ul>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <DockingIcon />
                  <h3>Binding Site Definition</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>The docking process defines binding sites in three ways:</p>
                  <ul>
                    <li><strong>Receptor cavities:</strong> Chooses 3D structure cavities</li>
                    <li><strong>PDB site records:</strong> Uses author-defined binding sites</li>
                    <li><strong>Current selection:</strong> Manual residue selection for custom sites</li>
                  </ul>
                  <p>For FEN1, two distinct loop regions were identified in secondary structure and used to define binding sites for optimal docking results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Truncation Approach */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <TruncationIcon />
              <h2>Truncation Approach</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-2">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TruncationIcon />
                  <h3>Truncation Methods</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Truncation systematically shortens nucleotide sequences to identify minimal sequences required for effective target binding. Multiple methods were employed:</p>
                  <ul>
                    <li><strong>5' end truncation:</strong> Until positive binding values</li>
                    <li><strong>3' end truncation:</strong> Until positive binding values</li>
                    <li><strong>Splitting approach:</strong> From loop regions without residue removal</li>
                  </ul>
                  <p>Methods include crawling, mapping analysis, and interference analysis to determine optimal truncation points (Gao et al. 2016; Gopinath et al. 2017).</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <TruncationIcon />
                  <h3>Benefits of Truncation</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Truncation provides both functional and economical advantages:</p>
                  <ul>
                    <li><strong>Enhanced efficiency:</strong> Shorter sequences improve conformational changes</li>
                    <li><strong>Cost reduction:</strong> Lower synthesis and modification costs</li>
                    <li><strong>Structural insights:</strong> Identifies fundamental binding motifs</li>
                    <li><strong>Optimization:</strong> Essential for therapeutic and diagnostic applications</li>
                  </ul>
                  <p>This process offers crucial information about structural motifs underlying target binding, making it essential for aptamer development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Point Mutation Approach */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <MutationIcon />
              <h2>Point Mutation Approach</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-2">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <MutationIcon />
                  <h3>Heat Map Analysis</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Point mutations were based on heat maps generated from analyzing ligand poses of all conformations against potential aptamer sequences. Strong interacting residues were identified and chosen as anchor residues for mutations.</p>
                  <h4>Heat Map Interpretation:</h4>
                  <ul>
                    <li><strong>Red regions:</strong> Stronger interaction and stability</li>
                    <li><strong>Blue regions:</strong> Least favorable energetically stable conformations</li>
                    <li><strong>Position 29:</strong> Most energetically favorable for FEN8-fentanyl interactions</li>
                  </ul>
                  <p>Multiple poses showing energetically stable fentanyl interactions with FEN8 were identified at position 29.</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <MutationIcon />
                  <h3>Sequence Optimization</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>To increase sequence space, permutations and combinations were implemented to enhance the probability of obtaining high-affinity aptamers. The optimization process involved:</p>
                  <ul>
                    <li><strong>15 primary sequences:</strong> Generated through permutations</li>
                    <li><strong>Secondary structure analysis:</strong> Free energy thermodynamics evaluation</li>
                    <li><strong>GC content analysis:</strong> Predetermined threshold limits</li>
                    <li><strong>Stability assessment:</strong> Elimination of less stable aptamers</li>
                  </ul>
                  <p>Following analysis, tertiary structures were generated and molecular docking performed to identify the best mutated sequences based on thermodynamic parameters and non-bond interactions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MD Simulations */}
          <div className="dbtl-section">
            <div className="dbtl-section-header">
              <SimulationIcon />
              <h2>Molecular Dynamics Simulations</h2>
            </div>
            
            <div className="dbtl-grid dbtl-grid-2">
              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <SimulationIcon />
                  <h3>Simulation Protocol</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>MD simulations were performed on both novel aptamer sequences and their docked complexes for 150 ns to evaluate dynamic stability, conformational flexibility, and interaction persistence under physiologically relevant conditions.</p>
                  <h4>Simulation Benefits:</h4>
                  <ul>
                    <li><strong>Time-dependent behavior:</strong> Beyond static docking models</li>
                    <li><strong>Structural rearrangements:</strong> Reveals key binding interactions</li>
                    <li><strong>Affinity assessment:</strong> Governs aptamer-target binding</li>
                    <li><strong>Physiological relevance:</strong> Real-world conditions simulation</li>
                  </ul>
                  <p>These simulations allow observation of biomolecular systems beyond static models (Hollingsworth & Dror, 2018).</p>
                </div>
              </div>

              <div className="dbtl-card">
                <div className="dbtl-card-header">
                  <SimulationIcon />
                  <h3>Trajectory Analysis</h3>
                </div>
                <div className="dbtl-card-content">
                  <p>Comprehensive trajectory analyses were performed to validate aptamer suitability:</p>
                  <ul>
                    <li><strong>RMSD (Root-Mean-Square Deviation):</strong> Monitors overall structural stability over time</li>
                    <li><strong>RMSF (Root-Mean-Square Fluctuation):</strong> Identifies residue-level flexibility and dynamic hotspots</li>
                    <li><strong>Radius of Gyration (Rg):</strong> Assesses compactness and folding integrity</li>
                  </ul>
                  <h4>Validation Criteria:</h4>
                  <ul>
                    <li>Consistent RMSD plateaus indicate stable conformations</li>
                    <li>Low RMSF values at binding interfaces suggest maintained target engagement</li>
                    <li>Stable Rg values confirm tertiary structure preservation</li>
                  </ul>
                  <p>These analyses collectively validate aptamer suitability for reliable target recognition (Amadei et al., 1993; Lemkul, 2019).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InSilicoPage
