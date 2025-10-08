import React from 'react'
import './ContributionPage.css'

const ContributionPage = () => {
  return (
    <div className="contribution-page">
      <div className="contribution-container">
        {/* Hero Section */}
        <section className="contribution-hero">
          <div className="contribution-hero-content">
            <h1 className="contribution-hero-title">Contribution</h1>
            <p className="contribution-hero-subtitle">
              Opio-Rx contributes to the iGEM community by advancing aptamer-based biosensing for synthetic 
              opioid detection. The project shares validated protocols, computational tools, and practical insights 
              to support both current and future teams working on biosensor development and public health 
              applications.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="contribution-section">
          <div className="contribution-card">
            <h2 className="contribution-section-title">Overview</h2>
            <div className="overview-content">
              <p>
                Our iGEM project, Opio-Rx, addresses the urgent public health issue of opioid overdose through the development of an innovative, user-friendly biosensor for rapid opioid detection. Combining synthetic biology with a human-centric design approach, our project empowers users and healthcare providers with real-time monitoring to enable timely intervention.
              </p>
              <p>
                Beyond technological innovation, we contribute to the iGEM community through open science, collaboration, and responsible human practices. A key component of our contribution is education: we strive to disseminate knowledge about synthetic biology and biosensor technology through workshops, outreach programs, and educational materials targeted at students and the wider public.
              </p>
              <p>
                These efforts aim to raise awareness and understanding of synthetic biology's potential to solve real-world problems, fostering the next generation of researchers and responsible citizens. By sharing our research, data, and tools openly on the iGEM Registry, we advance both scientific progress and public education, reflecting the core values of iGEM in innovation, teamwork, and societal impact.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Bricks Section */}
        <section className="contribution-section">
          <div className="contribution-card">
            <h2 className="contribution-section-title">Bio Bricks: Basic Parts</h2>
            
            {/* Fentanyl Parts */}
            <div className="parts-section">
              <h3 className="parts-drug-title">Fentanyl</h3>
              <div className="parts-table">
                <div className="parts-table-header">
                  <div className="parts-header-cell">Registry Link</div>
                  <div className="parts-header-cell">Part Name/Label</div>
                  <div className="parts-header-cell">Registry Code</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25vrr4av" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25vrr4av
                    </a>
                  </div>
                  <div className="parts-cell">FEN8_9</div>
                  <div className="parts-cell">BBa_25VRR4AV</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25mloc1h" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25mloc1h
                    </a>
                  </div>
                  <div className="parts-cell">FEN8_3</div>
                  <div className="parts-cell">BBa_25MLOC1H</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25b1ypbg" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25b1ypbg
                    </a>
                  </div>
                  <div className="parts-cell">FEN8_12</div>
                  <div className="parts-cell">BBa_25B1YPBG</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25iu2ett" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25iu2ett
                    </a>
                  </div>
                  <div className="parts-cell">FEN8_2T</div>
                  <div className="parts-cell">BBa_25IU2ETT</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25hvxakj" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25hvxakj
                    </a>
                  </div>
                  <div className="parts-cell">FENT8_4T</div>
                  <div className="parts-cell">BBa_25HVXAKJ</div>
                </div>
              </div>
              
              <div className="parts-description">
                <p>
                  The mutated aptamer sequences FEN8_9, FEN8_3, FEN8_12, FEN8_2T and FENT8_4T were 
                  selected as the most promising candidates for binding oxycodone, following rational mutagenesis 
                  of the best parental sequence (FEN8.) Mutations were strategically introduced at the 28th and 29th 
                  nucleotide positions using permutation–combination and truncation approaches, which 
                  significantly influenced secondary structure stability and binding site conformation.
                </p>
                <p>
                  Docking analyses revealed that these four aptamers achieved the highest Libdock scores, 
                  indicating enhanced binding orientations, along with favorable potential energy and strong 
                  electrostatic interactions, which are critical determinants of high-affinity ligand recognition. 
                  Specifically, FEN8_9 and FEN8_2T displayed multiple conventional hydrogen bonds and 
                  hydrophobic interactions with short bond lengths ensuring structural stability, while FEN8_9 also 
                  showed superior pose clustering and consistency in binding. Moreover, all five sequences 
                  exhibited highly negative electrostatic energies, supporting strong non-covalent stabilization of 
                  aptamer–fentanyl complexes.
                </p>
                <p>
                  Together, these parameters confirm that the selected mutants exhibit the strongest binding affinity 
                  and specificity toward fentanyl.
                </p>
              </div>
            </div>

            {/* Oxycodone Parts */}
            <div className="parts-section">
              <h3 className="parts-drug-title">Oxycodone</h3>
              <div className="parts-table">
                <div className="parts-table-header">
                  <div className="parts-header-cell">Registry Link</div>
                  <div className="parts-header-cell">Part Name/Label</div>
                  <div className="parts-header-cell">Registry Code</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25o5b7b7" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25o5b7b7
                    </a>
                  </div>
                  <div className="parts-cell">OX5 (Best mutated)</div>
                  <div className="parts-cell">BBa_25O5B7B7</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-2530pu5v" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-2530pu5v
                    </a>
                  </div>
                  <div className="parts-cell">OX1</div>
                  <div className="parts-cell">BBa_2530PU5V</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25185jsc" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25185jsc
                    </a>
                  </div>
                  <div className="parts-cell">OX7</div>
                  <div className="parts-cell">BBa_25185JSC</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25qprebj" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25qprebj
                    </a>
                  </div>
                  <div className="parts-cell">OX9</div>
                  <div className="parts-cell">BBa_25QPREBJ</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-2589hfvm" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-2589hfvm
                    </a>
                  </div>
                  <div className="parts-cell">OX6</div>
                  <div className="parts-cell">BBa_2589HFVM</div>
                </div>
              </div>
              
              <div className="parts-description">
                <p>
                  The mutated aptamer sequences Oxy1, Oxy5, Oxy7, Oxy8 and Oxy 9 were selected as the 
                  most promising candidates for binding oxycodone, following rational mutagenesis of the best 
                  parental sequence (OM16). Mutations were strategically introduced at the 13th and 15th 
                  nucleotide positions using permutation–combination approaches, which significantly 
                  influenced secondary structure stability and binding site conformation.
                </p>
                <p>
                  Docking analyses revealed that these four aptamers achieved the highest Libdock scores, 
                  indicating enhanced binding orientations, along with favorable potential energy and strong 
                  electrostatic interactions, which are critical determinants of high-affinity ligand recognition. 
                  Specifically, Oxy1 and Oxy5 displayed multiple conventional hydrogen bonds and 
                  hydrophobic interactions with short bond lengths ensuring structural stability, while Oxy7, 
                  Oxy8 and Oxy 9 showed superior pose clustering and consistency in binding. Moreover, all 
                  five sequences exhibited highly negative electrostatic energies, supporting strong non-
                  covalent stabilization of aptamer–oxycodone complexes.
                </p>
                <p>
                  Together, these parameters confirm that the selected mutants exhibit the strongest binding affinity 
                  and specificity toward oxycodone.
                </p>
              </div>
            </div>

            {/* Tramadol Parts */}
            <div className="parts-section">
              <h3 className="parts-drug-title">Tramadol</h3>
              <div className="parts-table">
                <div className="parts-table-header">
                  <div className="parts-header-cell">Registry Link</div>
                  <div className="parts-header-cell">Part Name/Label</div>
                  <div className="parts-header-cell">Registry Code</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25acdyte" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25acdyte
                    </a>
                  </div>
                  <div className="parts-cell">TR_9</div>
                  <div className="parts-cell">Bba_25ACDYTE</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25wv0d09" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25wv0d09
                    </a>
                  </div>
                  <div className="parts-cell">TR_13</div>
                  <div className="parts-cell">Bba_25WV0D09</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25h11wog" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25h11wog
                    </a>
                  </div>
                  <div className="parts-cell">TR_3</div>
                  <div className="parts-cell">Bba_25H11WOG</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25j3prvy" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25j3prvy
                    </a>
                  </div>
                  <div className="parts-cell">TR_4</div>
                  <div className="parts-cell">Bba_25J3PRVY</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25csz65a" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25csz65a
                    </a>
                  </div>
                  <div className="parts-cell">TR_10</div>
                  <div className="parts-cell">Bba_25CSZ65A</div>
                </div>
              </div>
              
              <div className="parts-description">
                <p>
                  The mutated aptamer sequences TR_9, TR_13, TR_3, TR_4, TR_10 were selected as the most 
                  promising candidates for binding oxycodone, following rational mutagenesis of the best parental 
                  sequence (TR_39). Mutations were strategically introduced at the 40th and 41th nucleotide 
                  positions using permutation–combination approaches, which significantly influenced secondary 
                  structure stability and binding site conformation.
                </p>
                <p>
                  Docking analyses revealed that these four aptamers achieved the highest Libdock scores, 
                  indicating enhanced binding orientations, along with favorable potential energy and strong 
                  electrostatic interactions, which are critical determinants of high-affinity ligand recognition. 
                  Specifically, TR_9 and TR_13 displayed multiple conventional hydrogen bonds and hydrophobic 
                  interactions with short bond lengths ensuring structural stability, while TR_9 also showed 
                  superior pose clustering and consistency in binding. Moreover, all five sequences exhibited highly 
                  negative electrostatic energies, supporting strong non-covalent stabilization of aptamer–opioid 
                  complexes.
                </p>
                <p>
                  Together, these parameters confirm that the selected mutants exhibit the strongest binding affinity 
                  and specificity toward tramadol.
                </p>
              </div>
            </div>

            {/* Codeine Parts */}
            <div className="parts-section">
              <h3 className="parts-drug-title">Codeine</h3>
              <div className="parts-table">
                <div className="parts-table-header">
                  <div className="parts-header-cell">Registry Link</div>
                  <div className="parts-header-cell">Part Name/Label</div>
                  <div className="parts-header-cell">Registry Code</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25tlxnx8" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25tlxnx8
                    </a>
                  </div>
                  <div className="parts-cell">CD_14</div>
                  <div className="parts-cell">Bba_25TLXNX8</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25hoyvh2" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25hoyvh2
                    </a>
                  </div>
                  <div className="parts-cell">CD_4</div>
                  <div className="parts-cell">Bba_25HOYVH2</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25gk9j9o" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25gk9j9o
                    </a>
                  </div>
                  <div className="parts-cell">CD_1</div>
                  <div className="parts-cell">Bba_25GK9J9O</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-25n28d3g" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-25n28d3g
                    </a>
                  </div>
                  <div className="parts-cell">CD_3</div>
                  <div className="parts-cell">Bba_25N28D3G</div>
                </div>
                <div className="parts-table-row">
                  <div className="parts-cell">
                    <a href="https://registry.igem.org/parts/bba-2573v2cv" target="_blank" rel="noopener noreferrer" className="parts-link">
                      https://registry.igem.org/parts/bba-2573v2cv
                    </a>
                  </div>
                  <div className="parts-cell">CD_8</div>
                  <div className="parts-cell">Bba_2573V2CV</div>
                </div>
              </div>
              
              <div className="parts-description">
                <p>
                  The mutated aptamer sequences CD_14, CD_4, CD_1, CD_3, CD_8 were selected as the 
                  most promising candidates for binding oxycodone, following rational mutagenesis of the best 
                  parental sequence (TR_39). Mutations were strategically introduced at the 23rd and 26th 
                  nucleotide positions using permutation–combination approaches, which significantly influenced 
                  secondary structure stability and binding site conformation.
                </p>
                <p>
                  Docking analyses revealed that these four aptamers achieved the highest Libdock scores, 
                  indicating enhanced binding orientations, along with favorable potential energy and strong 
                  electrostatic interactions, which are critical determinants of high-affinity ligand recognition. 
                  Specifically, CD_14 and CD_3 displayed multiple conventional hydrogen bonds and hydrophobic 
                  interactions with short bond lengths ensuring structural stability, while CD_14 also showed 
                  superior pose clustering and consistency in binding. Moreover, all five sequences exhibited highly 
                  negative electrostatic energies, supporting strong non-covalent stabilization of aptamer–opioid 
                  complexes.
                </p>
                <p>
                  Together, these parameters confirm that the selected mutants exhibit the strongest binding affinity 
                  and specificity toward codeine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContributionPage
