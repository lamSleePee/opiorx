import React from 'react'

const metrics = [
  { value: '$28M', label: 'Revenue by Year 5' },
  { value: '560K', label: 'Annual Units Target' },
  { value: '$25B+', label: 'Addressable Market' },
  { value: '5%', label: 'Target Market Share' }
]

const markets = [
  { name: 'Point‑of‑Care Testing', size24: '$496.2M', size29: '$782M', cagr: '4.7%', note: 'Primary addressable market' },
  { name: 'Aptamer Technology', size24: '$2.3B', size29: '$17.4B', cagr: '24.8%', note: 'Core platform growth' },
  { name: 'AI in Healthcare', size24: '$3.2B', size29: '$15.8B', cagr: '18.2%', note: 'Differentiation via AI' },
  { name: 'Lateral Flow Assays', size24: '$9.85B', size29: '$13.6B', cagr: '5.99%', note: 'Platform expansion' }
]

const competitors = [
  { company: 'Quest Diagnostics & Labcorp', share: '38%', tech: 'Centralized Laboratory', limit: 'Not suitable for POC urgency' },
  { company: 'Abbott Laboratories', share: '15%', tech: 'Lateral Flow Immunoassays', limit: 'Single‑analyte, qualitative only' },
  { company: 'OraSure Technologies', share: '8%', tech: 'Oral Fluid Testing', limit: 'Limited multiplexing / quantitation' },
  { company: 'Opio‑RX', share: 'Target: 5%', tech: 'AI‑Aptamer Platform', limit: 'Category‑creating advantage' }
]

const revenues = [
  { year: 1, product: 25000, service: 0, license: 0, total: 25000, profit: '-32,000' },
  { year: 2, product: 150000, service: 20000, license: 50000, total: 220000, profit: '60,000' },
  { year: 3, product: 500000, service: 75000, license: 100000, total: 675000, profit: '350,000' }
]

const phases = [
  { title: 'Innovation Adoption Leadership', timeline: 'Months 1–6', revenue: '$500K', units: '10,000', price: '$50–60', progress: 25 },
  { title: 'Market Penetration', timeline: 'Months 7–18', revenue: '$2.5M', units: '50,000', price: '$50–55', progress: 50 },
  { title: 'Scale & Expansion', timeline: 'Months 19–36', revenue: '$12M', units: '240,000', price: '$45–50', progress: 75 },
  { title: 'Market Leadership', timeline: 'Years 4–5', revenue: '$28M', units: '560,000', price: '$40–50', progress: 100 }
]

const EntrepreneurshipPage = () => {
  return (
    <div className="ent-page">
      <section className="ent-hero">
        <div className="ent-hero-inner">
          <div className="ent-badge">Revolutionary Venture</div>
          <h1 className="ent-title">Building a Business to Save Lives</h1>
          <h2 className="ent-subtitle">The Opio‑RX Venture</h2>
          <p className="ent-lead">We are launching a sustainable venture to combat the opioid crisis through innovation, strategy, and measurable impact.</p>
          <div className="ent-metrics">
            {metrics.map(m => (
              <div key={m.label} className="ent-metric">
                <div className="ent-metric-value">{m.value}</div>
                <div className="ent-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ent-container">
        {/* Urgent Need */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>The Urgent Need: Why We Exist</h3></div>
          <div className="ent-three">
            <div className="ent-kpi red"><div className="v">70,000+</div><div>Annual Overdose Deaths (US)</div></div>
            <div className="ent-kpi red"><div className="v">$78B</div><div>Annual Healthcare Costs</div></div>
            <div className="ent-kpi red"><div className="v">1 in 11</div><div>Receive Treatment</div></div>
          </div>
          <div className="ent-grid3">
            <div>
              <h4 className="ent-h4 red">The Crisis</h4>
              <p>Global public health emergency with devastating human and economic costs.</p>
            </div>
            <div>
              <h4 className="ent-h4 orange">The Gap</h4>
              <p>Current detection is slow, lab‑bound, and inaccessible at the point of need.</p>
            </div>
            <div>
              <h4 className="ent-h4 blue">Our Mandate</h4>
              <p>Deliver rapid, multiplex, quantitative POC testing to close the treatment gap.</p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>Our Solution: The Opio‑RX Biosensor</h3></div>
          <div className="ent-grid2">
            <div className="ent-stack">
              <div>
                <h4 className="ent-h4 blue">The Product</h4>
                <p>Portable paper‑based biosensor delivering &lt; 10‑minute multiplex saliva testing for fentanyl, oxycodone, codeine, methadone and tramadol.</p>
              </div>
              <div>
                <h4 className="ent-h4 green">The Technology</h4>
                <p>Computationally optimized DNA aptamers provide high specificity; FRET optics deliver sensitive quantitation.</p>
              </div>
              <div>
                <h4 className="ent-h4 purple">The Innovation</h4>
                <p>AI‑powered quantification with smartphone integration.</p>
              </div>
            </div>
            <div className="ent-device">
              <div className="ent-device-circle">⚡</div>
              <div className="ent-tags">
                <span className="ent-tag green">&lt; 10 min results</span>
                <span className="ent-tag blue">5 opioids</span>
                <span className="ent-tag purple">AI‑powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>The Market Opportunity</h3><p>Healthcare, law‑enforcement and public health need fast, quantitative testing.</p></div>
          <div className="ent-grid2">
            <div className="ent-market-col">
              {markets.map(m => (
                <div key={m.name} className="ent-market">
                  <div className="ent-market-top">
                    <h4>{m.name}</h4><span className="ent-chip">CAGR {m.cagr}</span>
                  </div>
                  <div className="ent-market-row"><div><div className="subl">2024</div><div className="val">{m.size24}</div></div><div className="arrow">→</div><div><div className="subl">2029</div><div className="val">{m.size29}</div></div></div>
                  <p className="ent-market-note">{m.note}</p>
                </div>
              ))}
            </div>
            <div className="ent-panel green">
              <h4>Market Size Breakdown</h4>
              <div className="ent-kv"><span>TAM</span><b>$8.5B</b></div>
              <div className="ent-kv"><span>SAM</span><b>$1.2B</b></div>
              <div className="ent-kv"><span>SOM</span><b>$100M</b></div>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>Competitive Analysis</h3></div>
          <div className="ent-table-wrap">
            <table className="ent-table">
              <thead>
                <tr><th>Company</th><th>Market Share</th><th>Technology</th><th>Key Limitation</th></tr>
              </thead>
              <tbody>
                {competitors.map(c => (
                  <tr key={c.company}>
                    <td>{c.company}</td>
                    <td>{c.share}</td>
                    <td>{c.tech}</td>
                    <td className={c.company==='Opio‑RX'?'ok':'warn'}>{c.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Business Model */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>Business Model & Path to Revenue</h3></div>
          <div className="ent-grid3">
            <div className="ent-pill blue"><b>Device Sales</b><span>Hospitals, clinics, agencies</span></div>
            <div className="ent-pill green"><b>Recurring Revenue</b><span>Test kits + analytics</span></div>
            <div className="ent-pill purple"><b>Strategic Partnerships</b><span>Licensing & B2B</span></div>
          </div>
          <div className="ent-table-wrap">
            <table className="ent-table">
              <thead><tr><th>Year</th><th>Product</th><th>Service</th><th>Licensing</th><th>Total</th><th>Net Profit</th></tr></thead>
              <tbody>
                {revenues.map(r => (
                  <tr key={r.year}><td>{r.year}</td><td>${r.product.toLocaleString()}</td><td>${r.service.toLocaleString()}</td><td>${r.license.toLocaleString()}</td><td>${r.total.toLocaleString()}</td><td>{r.profit}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Go‑to‑Market */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>Go‑to‑Market Strategy</h3><p>Four‑phase plan to capture growth opportunities.</p></div>
          <div className="ent-phases">
            {phases.map((p, i) => (
              <div key={i} className="ent-phase">
                <div className="ent-phase-head"><div className="ent-step">{i+1}</div><div><b>{p.title}</b><div className="muted">{p.timeline}</div></div><div className="right"><b>{p.revenue}</b><div className="muted">{p.units} units</div></div></div>
                <div className="ent-progress"><div style={{width: `${p.progress}%`}}/></div>
                <div className="muted">Pricing: {p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Funding */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>The Team & The Ask</h3></div>
          <div className="ent-grid2">
            <div className="ent-stack">
              <h4 className="ent-h4 yellow">Our Foundation</h4>
              <p>Cross‑functional team of biotech, computation, and strategy focused on impact.</p>
              <h4 className="ent-h4 blue">Our Traction</h4>
              <p>Robust computational pipeline, validated aptamers, and clear regulatory & business plan.</p>
            </div>
            <div className="ent-panel yellow">
              <h4>We are seeking</h4>
              <div className="ent-amount">$500,000</div>
              <p className="muted">in seed funding to:</p>
              <ul className="ent-list">
                <li>Finalize prototype and wet‑lab validation</li>
                <li>Conduct pivotal clinical studies</li>
                <li>Secure initial regulatory approvals</li>
                <li>Launch pilot programs with partners</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="ent-card">
          <div className="ent-card-head"><h3>Our Vision: More Than a Product</h3></div>
          <div className="ent-center">
            <div className="ent-quote">“Treatment gap closed, lives restored.”</div>
            <p className="muted">Our Brand Promise</p>
          </div>
          <div className="ent-grid2">
            <div>
              <h4 className="ent-h4 green">The Big Picture</h4>
              <p>Become the global standard in opioid detection and transform crisis response from reactive to proactive.</p>
            </div>
            <div>
              <h4 className="ent-h4 blue">Our Ultimate Goal</h4>
              <p>Make timely intervention the norm, dramatically reducing harm and saving lives.</p>
            </div>
          </div>
          <div className="ent-center"><button className="ent-cta">Invest in the Future</button></div>
        </div>
      </div>
    </div>
  )
}

export default EntrepreneurshipPage


