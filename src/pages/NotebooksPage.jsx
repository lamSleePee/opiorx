import React, { useState } from 'react'
import GanttChart from '../components/charts/GanttChart'

const DocViewer = ({ src, title }) => {
  // If DOCX, use Office Online viewer; otherwise load PDF directly
  const isDocx = /\.docx$/i.test(src)
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const absoluteUrl = `${origin}${src}`
  const viewerSrc = isDocx
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`
    : src

  return (
    <div className="pd-card" style={{ marginBottom: '2rem' }}>
      <h3 style={{ margin: '0 0 1rem 0' }}>{title}</h3>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', background: '#ffffff' }}>
        <iframe
          src={viewerSrc}
          title={title}
          width="100%"
          height="800"
          style={{ display: 'block', border: '0' }}
        />
      </div>
    </div>
  )
}

const ExcelViewer = ({ src, title }) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const absoluteUrl = `${origin}${src}`
  const viewerSrc = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`
  return (
    <div className="pd-card" style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ margin: '0 0 0.75rem 0' }}>{title}</h3>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', background: '#ffffff' }}>
        <iframe
          src={viewerSrc}
          title={title}
          width="100%"
          height="500"
          style={{ display: 'block', border: '0', background: '#fff' }}
        />
      </div>
    </div>
  )
}

const NotebooksPage = () => {
  const [active, setActive] = useState('dry')

  return (
    <div className="in-silico-page">
      <div className="in-silico-content">
        <div className="page-header">
          <h1>Lab Notebooks</h1>
          <p>Browse our notebooks directly in the browser. Use the built‑in viewer to zoom and search.</p>
        </div>

        <div className="dbtl-section">
          <div className="dbtl-section-header">
            <h2>Documents</h2>
          </div>
          <div className="dbtl-tabs" style={{ marginBottom: '1rem' }}>
            <div className="dbtl-tablist">
              <button className={`dbtl-tab ${active==='dry' ? 'active' : ''}`} onClick={() => setActive('dry')}>Dry Lab</button>
              <button className={`dbtl-tab ${active==='wet' ? 'active' : ''}`} onClick={() => setActive('wet')}>Wet Lab</button>
            </div>
          </div>

          {active === 'dry' && (
            <>
              <GanttChart
                title="Dry Lab – Gantt Chart"
                data={[
                  { Task: 'Literature review', Start: '2025-01-01', End: '2025-01-10', Group: 'Planning' },
                  { Task: 'Collect FEN1–FEN8 sequences', Start: '2025-01-11', End: '2025-01-20', Group: 'Fentanyl (Original)' },
                  { Task: 'Secondary structure prediction', Start: '2025-02-01', End: '2025-02-07', Group: 'Fentanyl (Original)' },
                  { Task: 'Tertiary modelling & optimization', Start: '2025-02-08', End: '2025-02-14', Group: 'Fentanyl (Original)' },
                  { Task: 'Baseline LibDock docking FEN1–FEN8', Start: '2025-03-01', End: '2025-03-07', Group: 'Fentanyl (Original)' },
                  { Task: 'Docking analysis & thermodynamics', Start: '2025-03-08', End: '2025-03-20', Group: 'Fentanyl (Original)' },
                  { Task: 'Truncation & point‑mutation design (FEN8)', Start: '2025-03-21', End: '2025-03-30', Group: 'Fentanyl (Mutant Design)' },
                  { Task: 'Dock mutated FEN8_1–FEN8_15', Start: '2025-04-01', End: '2025-04-15', Group: 'Fentanyl (Mutated)' },
                  { Task: 'In‑silico modification & FRET validation', Start: '2025-04-16', End: '2025-04-30', Group: 'Modified Aptamers' },
                  { Task: 'Collect OM1–OM36 (Oxycodone)', Start: '2025-05-01', End: '2025-05-15', Group: 'Oxycodone (Original)' },
                  { Task: 'Secondary & tertiary structure – OM16', Start: '2025-05-16', End: '2025-05-30', Group: 'Oxycodone (Original)' },
                  { Task: 'Mutation & docking – OM16_1..15', Start: '2025-06-01', End: '2025-06-10', Group: 'Oxycodone (Mutated)' },
                  { Task: 'Retrieve TR_OG/APT39; structure modelling', Start: '2025-06-20', End: '2025-06-30', Group: 'Tramadol (Original)' },
                  { Task: 'Docking & mutation – TR1..TR15', Start: '2025-07-01', End: '2025-07-15', Group: 'Tramadol (Mutated)' },
                  { Task: 'Retrieve Codeine aptamers (FC5, FC45)', Start: '2025-07-16', End: '2025-07-30', Group: 'Codeine (Original)' },
                  { Task: 'Cross‑target comparative analysis & docs', Start: '2025-08-01', End: '2025-08-15', Group: 'Reporting' },
                ]}
              view="bar"
              />
              <DocViewer src="/dry-lab.pdf" title="Dry Lab Notebook" />
            </>
          )}
          {active === 'wet' && (
            <>
              <GanttChart src="/wet-lab-chart.xlsx" title="Wet Lab – Gantt Chart" view="bar" />
              <DocViewer src="/wet-lab.pdf" title="Wet Lab Notebook" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotebooksPage


