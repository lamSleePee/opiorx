import React, { useState } from 'react'

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
            <DocViewer src="/dry-lab.pdf" title="Dry Lab Notebook" />
          )}
          {active === 'wet' && (
            <DocViewer src="/wet-lab.pdf" title="Wet Lab Notebook" />
          )}
        </div>
      </div>
    </div>
  )
}

export default NotebooksPage


