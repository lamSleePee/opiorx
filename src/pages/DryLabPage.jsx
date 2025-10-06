import React, { useState } from 'react'

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
  const cycles = [
    {
      key: 'cycle1',
      icon: <DesignIcon />,
      title: 'DBTL Cycle 1: In Silico Aptamer Design and Optimization',
      cards: [
        { icon: <DesignIcon />, title: 'Design', content: 'A comprehensive literature review gathered reported aptamer sequences targeting synthetic opioids, including fentanyl, oxycodone, tramadol, and methadone. Multiple sequence alignments identified conserved and variable regions across these sequences. Secondary structure predictions revealed potential stem–loop motifs and assessed their relative stability, pinpointing candidate nucleotides for further modification.' },
        { icon: <BuildIcon />, title: 'Build', content: 'Molecular docking simulations were conducted using the ZDock protocol in BIOVIA Discovery Studio. These studies provided insights into the structural stability and binding affinity between aptamers and opioid targets.' },
        { icon: <TestIcon />, title: 'Test', content: 'Docking outcomes facilitated the selection of the most promising aptamer sequence, which served as the lead candidate for designing a novel aptamer with enhanced opioid-binding specificity.' },
        { icon: <LearnIcon />, title: 'Learn', content: 'Although the docking procedure was successfully executed, many predicted interactions were unfavorable. Treating opioids as rigid molecules neglected ligand flexibility, causing steric clashes and reduced binding prediction accuracy.' },
      ],
    },
    {
      key: 'cycle1-iter',
      icon: <BuildIcon />,
      title: 'DBTL Cycle 1: Iteration',
      cards: [
        { icon: <DesignIcon />, title: 'Design', content: 'To address steric clashes and unfavourable interactions observed previously, various docking protocols were explored.' },
        { icon: <BuildIcon />, title: 'Build', content: 'The LibDock protocol was employed to dock candidate aptamer sequences against their opioid targets. Binding spheres were defined around loop regions identified in secondary structure predictions.' },
        { icon: <TestIcon />, title: 'Test', content: 'Molecular docking was carried out using the LibDock protocol.' },
        { icon: <LearnIcon />, title: 'Learn', content: 'Torsional flexibility significantly influenced aptamer interactions. Steric clashes were resolved and interactions strengthened, indicating enhanced binding affinity. The most promising aptamer was identified.' },
      ],
    },
    {
      key: 'cycle2',
      icon: <TestIcon />,
      title: 'DBTL Cycle 2: Developing Novel Aptamers via Point Mutation',
      cards: [
        { icon: <DesignIcon />, title: 'Design', content: 'Aptamer sequences targeting fentanyl, methadone, oxycodone, and tramadol were extracted from literature. Secondary structure analysis plus docking identified the best candidate sequence for mutation.' },
        { icon: <BuildIcon />, title: 'Build', content: 'Site‑specific point mutations guided by docking affinity heat maps were introduced at nucleotides critical for opioid binding to enhance characteristics.' },
        { icon: <TestIcon />, title: 'Test', content: 'Each mutated variant underwent docking and secondary structure predictions to assess the impact of mutations on binding affinity and conformational stability.' },
        { icon: <LearnIcon />, title: 'Learn', content: 'Some mutations disrupted folding stability, others improved affinity two‑ to threefold with moderate ΔG increase. Best variants were validated via post‑docking analyses and MD simulations.' },
      ],
    },
    {
      key: 'cycle3',
      icon: <BuildIcon />,
      title: 'DBTL Cycle 3: Developing Aptamers In Silico Using Truncation Approach',
      cards: [
        { icon: <DesignIcon />, title: 'Design', content: 'Computational truncation systematically reduced aptamer length by removing nucleotides with minimal contribution to affinity. Selective point mutations were also introduced.' },
        { icon: <BuildIcon />, title: 'Build', content: 'Truncated sequences were generated in silico, focusing on variants predicted to retain essential binding while minimizing length.' },
        { icon: <TestIcon />, title: 'Test', content: 'Binding free energies of truncated aptamers were calculated via docking. Top candidates were selected for detailed analyses.' },
        { icon: <LearnIcon />, title: 'Learn', content: 'Deletion at specific positions decreased affinity ~2x, revealing critical nucleotides; overall stability declined after truncation, indicating loss of structural integrity.' },
      ],
    },
    {
      key: 'cycle4',
      icon: <TestIcon />,
      title: 'DBTL Cycle 4: Iteration - Truncation Approach',
      cards: [
        { icon: <DesignIcon />, title: 'Design', content: 'Further truncations explored minimal sequences while retaining binding; selective mutations applied to improve specificity.' },
        { icon: <BuildIcon />, title: 'Build', content: 'Refined truncated variants were generated to maintain binding properties with shortest possible length.' },
        { icon: <TestIcon />, title: 'Test', content: 'Docking re‑evaluation shortlisted variants with most favorable free energies for deeper analysis.' },
        { icon: <LearnIcon />, title: 'Learn', content: 'Excessive truncation degraded interactions and thermodynamic stability; optimal designs balanced compactness and binding.' },
      ],
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="dry-lab-page">
      <div className="page-header">
        <h1>Dry Lab DBTL</h1>
        <p>Computational design, modeling, and in silico analysis for Engineering-DBTL Cycles</p>
      </div>

      <div className="dry-lab-content">
        <div className="dry-lab-container">
          <div className="dbtl-section success-overview">
            <div className="dbtl-section-header">
              <SuccessIcon />
              <h2>Engineering Success: DBTL Cycle - In Silico Aptamer Design</h2>
            </div>
            <div className="dbtl-tabs">
              <div className="dbtl-tablist" role="tablist" aria-label="DBTL Cycles">
                {cycles.map((c, idx) => (
                  <button
                    key={c.key}
                    role="tab"
                    aria-selected={activeIdx === idx}
                    className={`dbtl-tab ${activeIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                  >
                    {c.icon}
                    <span>{c.title}</span>
                  </button>
                ))}
              </div>

              <div className="dbtl-tabpanel" role="tabpanel">
                <div className="dbtl-grid dbtl-grid-4">
                  {cycles[activeIdx].cards.map((card, i) => (
                    <div className="dbtl-card" key={i}>
                      <div className="dbtl-card-header">
                        {card.icon}
                        <h3>{card.title}</h3>
                      </div>
                      <div className="dbtl-card-content">
                        <p>{card.content}</p>
                      </div>
                    </div>
                  ))}
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