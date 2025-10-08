import React, { useEffect, useMemo, useState } from 'react'

// Lightweight XLSX parsing by loading SheetJS from a CDN at runtime (no bundling needed)
function loadXLSX() {
  return new Promise((resolve, reject) => {
    if (window.XLSX) return resolve(window.XLSX)
    const scriptId = 'sheetjs-cdn'
    const existing = document.getElementById(scriptId)
    if (existing) {
      existing.addEventListener('load', () => resolve(window.XLSX))
      existing.addEventListener('error', () => reject(new Error('Failed to load XLSX')))
      return
    }
    const s = document.createElement('script')
    s.id = scriptId
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
    s.async = true
    s.onload = () => resolve(window.XLSX)
    s.onerror = () => reject(new Error('Failed to load XLSX'))
    document.head.appendChild(s)
  })
}

async function parseXlsx(arrayBuffer) {
  const XLSX = await loadXLSX()
  const wb = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' })
  const sheet = wb.Sheets[wb.SheetNames[0]]
  const json = XLSX.utils.sheet_to_json(sheet, { defval: '' })
  return json
}

function daysBetween(a, b) {
  const ms = new Date(b) - new Date(a)
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)))
}

export default function GanttChart({ src, title, data, compact = true, view = 'table', header = true }) {
  const [rows, setRows] = useState(data || [])
  const [error, setError] = useState('')

  useEffect(() => {
    if (data && data.length) return
    let cancelled = false
    async function load() {
      try {
        const res = await fetch(src)
        if (!res.ok) throw new Error(`Failed to load ${src}`)
        const buf = await res.arrayBuffer()
        const data = await parseXlsx(buf)
        if (!cancelled) setRows(data)
      } catch (e) {
        if (!cancelled) setError(e.message)
      }
    }
    load()
    return () => { cancelled = true }
  }, [src, data])

  const timeline = useMemo(() => {
    if (!rows.length) return null
    const parsed = rows.map(r => ({
      task: String(r.Task || r.task || r.name || ''),
      start: new Date(r.Start || r.start || r.begin),
      end: new Date(r.End || r.end || r.finish),
      group: r.Group || r.group || r.owner || ''
    })).filter(r => r.task && !isNaN(r.start) && !isNaN(r.end))
    if (!parsed.length) return null
    const min = parsed.reduce((m, r) => Math.min(m, r.start.getTime()), Infinity)
    const max = parsed.reduce((m, r) => Math.max(m, r.end.getTime()), -Infinity)
    const totalDays = daysBetween(min, max || min) || 1
    return { tasks: parsed, min, max, totalDays }
  }, [rows])

  if (error) {
    return (
      <div className="pd-card">
        <h3>{title}</h3>
        <p style={{ color: '#dc2626' }}>{error}</p>
      </div>
    )
  }

  if (!timeline) {
    return (
      <div className="pd-card">
        <h3>{title}</h3>
        <p style={{ color: '#64748b' }}>Loading chart…</p>
      </div>
    )
  }

  const { tasks, min, totalDays } = timeline

  const palette = ['#0891b2','#7c3aed','#10b981','#f59e0b','#ef4444','#22c55e','#0ea5e9','#a855f7']
  const groupToColor = {}
  let colorIdx = 0
  const getColor = (g='') => {
    if (!groupToColor[g]) {
      groupToColor[g] = palette[colorIdx % palette.length]
      colorIdx += 1
    }
    return groupToColor[g]
  }

  // If table view requested, render a clean table (decluttered)
  if (view === 'table') {
    return (
      <div className="pd-card">
        <h3>{title}</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.6rem 0.9rem', background: '#f1f5f9', borderBottom: '1px solid #e5e7eb', whiteSpace:'nowrap' }}>Task</th>
                <th style={{ textAlign: 'left', padding: '0.6rem 0.9rem', background: '#f1f5f9', borderBottom: '1px solid #e5e7eb' }}>Timeline</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr key={i} style={{ background: i % 2 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.5rem 0.9rem', borderBottom: '1px solid #eef2f7', color: '#0f172a', fontWeight: 600, whiteSpace:'nowrap' }}>{t.task}</td>
                  <td style={{ padding: '0.5rem 0.9rem', borderBottom: '1px solid #eef2f7' }}>
                    <div style={{ position:'relative', height:16, background:'#f1f5f9', border:'1px solid #e5e7eb', borderRadius:8 }}>
                      {(() => {
                        const startDays = daysBetween(min, t.start)
                        const lenDays = Math.max(1, daysBetween(t.start, t.end))
                        const left = (startDays / totalDays) * 100
                        const width = (lenDays / totalDays) * 100
                        const color = getColor(t.group)
                        const label = `${t.start.toLocaleDateString(undefined,{month:'short',day:'numeric'})} – ${t.end.toLocaleDateString(undefined,{month:'short',day:'numeric'})}`
                        return (
                          <div title={`${t.task}: ${label}`} style={{ position:'absolute', left:`${left}%`, width:`${width}%`, top:2, bottom:2, background:color, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                            <span style={{ fontSize:11, color:'#fff', whiteSpace:'nowrap', padding:'0 6px', textShadow:'0 1px 2px rgba(0,0,0,0.25)' }}>{label}</span>
                          </div>
                        )
                      })()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // sizing (compact mode reduces overall visual scale)
  const rowHeight = compact ? 30 : 36
  const barHeight = compact ? 14 : 20
  const labelFont = compact ? '0.8rem' : '0.95rem'

  // Utility: build months between min and max for nicer header/grid
  const months = (() => {
    const list = []
    const start = new Date(min)
    start.setDate(1)
    const end = new Date(timeline.max)
    end.setDate(1)
    while (start <= end) {
      list.push(new Date(start))
      start.setMonth(start.getMonth() + 1)
    }
    return list
  })()

  return (
    <div className="pd-card" style={{ overflowX: 'auto' }}>
      <h3>{title}</h3>
      {/* Grid: 2 columns (labels | chart), 2 rows (header | body) */}
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gridTemplateRows: 'auto 1fr', columnGap: '1rem' }}>
        {/* Left header spacer */}
        <div style={{ gridColumn: 1, gridRow: 1 }} />
        {/* Right header */}
        <div style={{ gridColumn: 2, gridRow: 1, position:'relative', paddingTop: '0.25rem' }}>
          {/* Header (Years and Months) */}
          {header && (
            <div style={{ marginBottom: 6 }}>
              {/* Years row */}
              <div style={{ display: 'flex', border: '1px solid #e5e7eb', borderRadius: 6, overflow: 'hidden' }}>
                {(() => {
                  const groups = []
                  let curYear = months[0].getFullYear()
                  let startIdx = 0
                  months.forEach((m, idx) => {
                    if (m.getFullYear() !== curYear) {
                      groups.push({ year: curYear, count: idx - startIdx })
                      curYear = m.getFullYear()
                      startIdx = idx
                    }
                  })
                  groups.push({ year: curYear, count: months.length - startIdx })
                  return groups.map((g, i) => (
                    <div key={i} style={{ flex: g.count, textAlign: 'center', background: '#f8fafc', padding: '6px 0', fontWeight: 700, color: '#334155', borderRight: i<groups.length-1? '1px solid #e5e7eb':'none' }}>{g.year}</div>
                  ))
                })()}
              </div>
              {/* Months row */}
              <div style={{ position: 'relative', display: 'flex', border: '1px solid #e5e7eb', borderRadius: 6, overflow: 'hidden', marginTop: 4, height: '32px' }}>
                {months.map((m, idx) => {
                  const monthStart = new Date(m.getFullYear(), m.getMonth(), 1)
                  const monthEnd = new Date(m.getFullYear(), m.getMonth()+1, 0)
                  const left = (daysBetween(min, monthStart) / totalDays) * 100
                  const right = (daysBetween(min, monthEnd) / totalDays) * 100
                  const width = Math.max(0, right - left)
                  return (
                    <div key={idx} style={{ 
                      position: 'absolute', 
                      left: `${left}%`, 
                      width: `${width}%`,
                      textAlign: 'center', 
                      padding: '4px 0', 
                      fontWeight: 600, 
                      color: '#475569', 
                      background: idx%2? '#f1f5f9':'#ffffff',
                      borderRight: idx<months.length-1? '1px solid #e5e7eb':'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {m.toLocaleString(undefined, { month: 'short' })}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Left labels column */}
        <div style={{ gridColumn: 1, gridRow: 2 }}>
          <div style={{ display:'grid', gridTemplateRows: `repeat(${tasks.length}, ${rowHeight}px)`, rowGap: 0 }}>
            {tasks.map((t, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', height: rowHeight, color:'#0f172a', fontWeight:600, fontSize: labelFont, lineHeight:1.15, whiteSpace:'normal', wordBreak:'break-word' }}>{t.task}</div>
            ))}
          </div>
        </div>

        {/* Right chart body */}
        <div style={{ gridColumn: 2, gridRow: 2 }}>
          {/* background grid lines per month bands and faint daily grid */}
          <div style={{ position: 'relative', height: tasks.length * rowHeight, background: 'linear-gradient(90deg, rgba(226,232,240,.3) 1px, transparent 1px)'}}>
            {months.map((m, idx) => {
              const monthStart = new Date(m.getFullYear(), m.getMonth(), 1)
              const monthEnd = new Date(m.getFullYear(), m.getMonth()+1, 0)
              const left = (daysBetween(min, monthStart) / totalDays) * 100
              const right = (daysBetween(min, monthEnd) / totalDays) * 100
              const width = Math.max(0, right - left)
              return (
                <div key={idx} style={{ position:'absolute', left:`${left}%`, top:0, width:`${width}%`, bottom:0, background: idx%2? 'rgba(241,245,249,.5)':'transparent' }} />
              )
            })}
            {tasks.map((t, i) => {
              const startDays = daysBetween(min, t.start)
              const lenDays = Math.max(1, daysBetween(t.start, t.end))
              const left = (startDays / totalDays) * 100
              const width = (lenDays / totalDays) * 100
              return (
                <div key={i} style={{ position: 'absolute', left: `${left}%`, top: i * rowHeight + Math.max(2, (rowHeight - barHeight) / 2), height: barHeight, width: `${width}%`, background: getColor(t.group), borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} title={`${t.task}: ${t.start.toDateString()} – ${t.end.toDateString()}`} />
              )
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display:'flex', gap: '1rem', flexWrap:'wrap', marginTop: '0.75rem' }}>
        {Object.entries(groupToColor).map(([g,c]) => (
          <div key={g} style={{ display:'flex', alignItems:'center', gap:'.5rem', color:'#475569' }}>
            <span style={{ width:12, height:12, background:c, borderRadius:3, display:'inline-block' }} />
            <span>{g || 'General'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


