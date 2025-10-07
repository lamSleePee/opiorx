import React, { useMemo, useState } from 'react'

const DATA = {
  fentanyl: {
    name: 'Fentanyl', icon: '🧪', color: 'teal',
    original: [
      { loop: 'Loop 1', libdock: 105.85, potential: 649.82, electro: -659.075, vdw: -398.417, total: 6, h: 0, ch: 5 },
      { loop: 'Loop 2', libdock: 119.44, potential: 676.46, electro: -654.63, vdw: -392.87, total: 6, h: 0, ch: 4 }
    ],
    novel: [
      { loop: 'Loop 1', libdock: 80.26, potential: 927.63, electro: -144.96, vdw: -1034.79, total: 11, h: 3, ch: 6 },
      { loop: 'Loop 2', libdock: 111.57, potential: 902.68, electro: -168.29, vdw: -1030.67, total: 5, h: 1, ch: 2 }
    ],
    analysis: {
      libDock: 'Original: 105.85/119.44; Novel: 80.26/111.57. Original higher overall Dock scores; novel excels in other parameters.',
      energy: 'Original electrostatic more favorable (≈ −659 vs −145 kcal/mol); Novel has much better van der Waals (≈ −1031 vs −396 kcal/mol).',
      interactions: 'Original: 6 interactions, mostly C–H; Novel: up to 11 interactions with H‑bonds, stronger/varied binding.'
    }
  },
  oxycodone: {
    name: 'Oxycodone', icon: '💊', color: 'blue',
    original: [
      { loop: 'Loop 1', libdock: 96.7257, potential: 185.03648, electro: -1579.63574, vdw: -512.74172, total: 13, h: 8, ch: 4 }
    ],
    novel: [
      { loop: 'Loop 1', libdock: 101.284, potential: 217.959, electro: -1558.45, vdw: -517.387, total: 18, h: 7, ch: 5 }
    ],
    analysis: {
      libDock: 'Original 96.73 vs Novel 101.28 → Novel higher affinity.',
      energy: 'Original electrostatic slightly stronger; Novel marginally better van der Waals.',
      interactions: 'Original 13 (8 H‑bonds); Novel 18 (7 H‑bonds) → stronger, versatile binding.'
    }
  },
  tramadol: {
    name: 'Tramadol', icon: '⚕️', color: 'green',
    original: [
      { loop: 'Loop 1', libdock: 113.947, potential: 585.80865, electro: -1122.6278, vdw: -488.8754, total: 9, h: 1, ch: 4 },
      { loop: 'Loop 2', libdock: 90.3457, potential: 599.6396, electro: -1095.133, vdw: -505.4635, total: 9, h: 1, ch: 5 },
      { loop: 'Loop 3', libdock: 86.0639, potential: 579.2198, electro: -1121.397, vdw: -496.5586, total: 7, h: 1, ch: 3 }
    ],
    novel: [
      { loop: 'Loop 1', libdock: 113.947, potential: 585.80865, electro: -1122.6278, vdw: -488.8754, total: 9, h: 1, ch: 4 },
      { loop: 'Loop 2', libdock: 90.3457, potential: 599.6396, electro: -1095.133, vdw: -505.4635, total: 9, h: 1, ch: 5 },
      { loop: 'Loop 3', libdock: 86.0639, potential: 579.2198, electro: -1121.397, vdw: -496.5586, total: 7, h: 1, ch: 3 }
    ],
    analysis: {
      libDock: 'Comparable Dock scores across loops (max 113.947).',
      energy: 'Potential and electrostatic energies similar across sequences (≈ −1122 to −1095 kcal/mol).',
      interactions: 'Totals identical per loop; similar H‑bond/CH patterns → unchanged specificity.'
    }
  },
  codeine: {
    name: 'Codeine', icon: '🔬', color: 'purple',
    original: [
      { loop: 'Loop 1', libdock: 89.6173, potential: 111.4783, electro: -2047.74, vdw: 218.612, total: 16, h: 0, ch: 11 }
    ],
    novel: [
      { loop: 'Loop 1', libdock: 100.835, potential: -196.838, electro: -2354.566, vdw: -242.452, total: 14, h: 3, ch: 7 }
    ],
    analysis: {
      libDock: 'Novel 100.835 > Original 89.617 → better affinity.',
      energy: 'Novel more favorable electrostatic & van der Waals; potential energy much lower (−196.8).',
      interactions: 'Original 16 (mostly CH); Novel 14 incl. 3 H‑bonds → stronger recognition.'
    }
  }
}

const SIM = {
  rmsdEq: 'y = 0.88468 + 0.0020828x',
  rmsdDesc: 'RMSD starts <0.5 nm, rises ~1 nm and stabilizes with small fluctuations (slight increasing trend).',
  rmsfDesc: 'Peaks mark flexible loop regions; troughs mark conserved/stable core.',
  peaks: [3, 18], trough: 0.3
}

const number = (v) => (typeof v === 'number' ? v.toFixed(2) : v)

const Stat = ({label, value}) => (
  <div className="dlr-stat">
    <div className="dlr-stat-value">{value}</div>
    <div className="dlr-stat-label">{label}</div>
  </div>
)

const Table = ({rows, columns}) => {
  const getValue = (row, column) => {
    if (column === 'Hydrogen Bond') return row.h
    if (column === 'C-H Bond') return row.ch
    return row[column]
  }
  
  return (
    <div className="dlr-table-wrap">
      <table className="dlr-table">
        <thead>
          <tr>
            {columns.map((c) => <th key={c}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map((c) => <td key={c}>{number(getValue(r, c))}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const DryLabResultsPage = () => {
  const [opioid, setOpioid] = useState('fentanyl')
  const [tab, setTab] = useState('comparison')
  const d = useMemo(() => DATA[opioid], [opioid])

  const columns = ['loop','libdock','potential','electro','vdw','total','Hydrogen Bond','C-H Bond']

  return (
    <div className="dlr-page">
      <section className="dlr-hero">
        <div className="dlr-hero-container">
          <div className="dlr-hero-badge">Computational Results</div>
          <h1 className="dlr-hero-title">Dry Lab Results</h1>
          <p className="dlr-hero-sub">Molecular docking and simulations for optimized aptamer sequences targeting synthetic opioids.</p>
          <div className="dlr-stats">
            <Stat label="Target Opioids" value="4"/>
            <Stat label="Sequence Variants" value="8"/>
            <Stat label="Max Interactions" value="18"/>
            <Stat label="Simulations" value="MD"/>
          </div>
        </div>
      </section>

      <div className="dlr-container">
        {/* Opioid selector */}
        <div className="dlr-card">
          <div className="dlr-card-head">
            <h2>Select Target Opioid</h2>
          </div>
          <div className="dlr-opioids">
            {Object.entries(DATA).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setOpioid(key)}
                className={`dlr-pill ${opioid===key ? 'active' : ''}`}
              >
                <span className="dlr-pill-emoji">{val.icon}</span>
                <span>{val.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="dlr-card">
          <div className="dlr-card-head">
            <div className="dlr-chip" data-color={d.color}>{d.icon}</div>
            <h2>{d.name} – Molecular Docking Results</h2>
          </div>

          <div className="dlr-tabs">
            {['comparison','original','novel','analysis'].map((t) => (
              <button key={t} className={`dlr-tab ${tab===t?'active':''}`} onClick={() => setTab(t)}>{t[0].toUpperCase()+t.slice(1)}</button>
            ))}
          </div>

          {tab==='comparison' && (
            <div className="dlr-comparison">
              {d.original.map((o,i) => {
                const n = d.novel[i]
                const max = Math.max(o.libdock, n? n.libdock: 0)
                return (
                  <div key={o.loop} className="dlr-compare-row">
                    <div className="dlr-compare-head">
                      <div className="dlr-compare-title">{o.loop}</div>
                      <div className="dlr-compare-values">
                        <span className="ok">Original: {number(o.libdock)}</span>
                        {n && <span className="nv">Novel: {number(n.libdock)}</span>}
                      </div>
                    </div>
                    <div className="dlr-bars">
                      <div className="dlr-bar"><div style={{width: `${(o.libdock/max)*100}%`}}/></div>
                      {n && <div className="dlr-bar nv"><div style={{width: `${(n.libdock/max)*100}%`}}/></div>}
                    </div>
                  </div>
                )
              })}
              <div className="dlr-grid2">
                <div>
                  <h3>Electrostatic Energy</h3>
                  {d.original.map((o,i)=>{
                    const n=d.novel[i]
                    return (
                      <div key={o.loop} className="dlr-energy-row">
                        <span>{o.loop}</span>
                        <div className="dlr-energy-values">
                          <span className="ok">{number(o.electro)} kcal/mol</span>
                          {n && <span className="nv">{number(n.electro)} kcal/mol</span>}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <h3>van der Waals Energy</h3>
                  {d.original.map((o,i)=>{
                    const n=d.novel[i]
                    return (
                      <div key={o.loop} className="dlr-energy-row">
                        <span>{o.loop}</span>
                        <div className="dlr-energy-values">
                          <span className="ok">{number(o.vdw)} kcal/mol</span>
                          {n && <span className="nv">{number(n.vdw)} kcal/mol</span>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <h3>Interaction Analysis</h3>
                <div className="dlr-grid2">
                  <div>
                    <h4 className="ok">Original Sequence</h4>
                    {d.original.map((o)=> (
                      <div key={o.loop} className="dlr-tag-row ok-bg"><span>{o.loop}</span><span>{o.total} total · {o.h}H + {o.ch}CH</span></div>
                    ))}
                  </div>
                  <div>
                    <h4 className="nv">Novel Sequence</h4>
                    {d.novel.map((o)=> (
                      <div key={o.loop} className="dlr-tag-row nv-bg"><span>{o.loop}</span><span>{o.total} total · {o.h}H + {o.ch}CH</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab==='original' && (
            <div>
              <h3 className="dlr-sub">Original Sequence Parameters</h3>
              <Table columns={columns} rows={d.original}/>
            </div>
          )}
          {tab==='novel' && (
            <div>
              <h3 className="dlr-sub">Novel Sequence Parameters</h3>
              <Table columns={columns} rows={d.novel}/>
            </div>
          )}
          {tab==='analysis' && (
            <div className="dlr-analysis">
              <div className="dlr-note blue"><h4>LibDock Score Analysis</h4><p>{d.analysis.libDock}</p></div>
              <div className="dlr-note green"><h4>Energy Contributions</h4><p>{d.analysis.energy}</p></div>
              <div className="dlr-note purple"><h4>Ligand Interactions</h4><p>{d.analysis.interactions}</p></div>
            </div>
          )}
        </div>

        {/* Simulations (Fentanyl only) */}
        {opioid === 'fentanyl' && (
          <div className="dlr-card">
            <div className="dlr-card-head"><h2>Molecular Dynamics Simulation Results</h2></div>
            <div className="dlr-grid2">
              <div className="dlr-panel">
                <h3>RMSD Plot Analysis</h3>
                <div className="dlr-code">{SIM.rmsdEq}</div>
                <ul className="dlr-kv">
                  <li><span>Slope</span><b>0.0021 nm/ns</b></li>
                  <li><span>Initial RMSD</span><b>&lt; 0.5 nm</b></li>
                  <li><span>Stabilized RMSD</span><b>~ 1.0 nm</b></li>
                </ul>
                <div className="dlr-note blue"><p>{SIM.rmsdDesc}</p></div>
              </div>
              <div className="dlr-panel">
                <h3>RMSF Plot Analysis</h3>
                <div className="dlr-badges">{SIM.peaks.map(p => <span key={p} className="dlr-badge red">Residue {p}</span>)}</div>
                <div className="dlr-kv single"><span>Stable Regions</span><b>~ {SIM.trough} nm</b></div>
                <div className="dlr-note purple"><p>{SIM.rmsfDesc}</p></div>
                <div className="dlr-grid2 small">
                  <div className="dlr-chip-card red"><b>Flexible Regions</b><span>Binding adaptation</span></div>
                  <div className="dlr-chip-card green"><b>Rigid Regions</b><span>Structural stability</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="dlr-card">
          <div className="dlr-card-head"><h2>Summary & Key Findings</h2></div>
          <div className="dlr-grid2">
            <div>
              <h3 className="dlr-sub">Novel Sequence Advantages</h3>
              <div className="dlr-note green"><b>Enhanced Interactions</b><p>Up to 18 total interactions vs 13 in originals.</p></div>
              <div className="dlr-note blue"><b>Hydrogen Bonding</b><p>Novel sequences introduce stronger, more specific recognition.</p></div>
              <div className="dlr-note purple"><b>Energy Optimization</b><p>Improved van der Waals and potential energies in several cases.</p></div>
            </div>
            <div>
              <h3 className="dlr-sub">Computational Insights</h3>
              <div className="dlr-note orange"><b>LibDock Performance</b><p>Higher scores correlate with better binding potential.</p></div>
              <div className="dlr-note cyan"><b>Structural Stability</b><p>MD confirms integrity with balanced flexibility/stability.</p></div>
              <div className="dlr-note red"><b>Target Specificity</b><p>Distinct patterns across opioids enable selective detection.</p></div>
            </div>
          </div>
          <hr className="dlr-sep"/>
          <div className="dlr-center">
            <h3 className="dlr-sub">Overall Assessment</h3>
            <p className="dlr-para">Novel aptamer designs show stronger interactions, optimized energies and stable structures, supporting our computational design strategy and motivating experimental validation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DryLabResultsPage


