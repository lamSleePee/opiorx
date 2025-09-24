import React from 'react'
import { patientMetrics } from '../../data/constants'

const MetricsOverview = () => {
  return (
    <section className="metrics">
      <div className="metrics-container">
        <h2>Opioid Detection Metrics</h2>
        <div className="metrics-grid">
          {patientMetrics.map((metric, index) => (
            <div key={index} className={`metric-card ${metric.status}`}>
              <div className="metric-header">
                <h3>{metric.name}</h3>
                <span className={`status-indicator ${metric.status}`}></span>
              </div>
              <div className="metric-value">
                <span className="value">{metric.value}</span>
                <span className="unit">{metric.unit}</span>
              </div>
              <div className={`metric-trend ${metric.trend.startsWith('+') ? 'positive' : metric.trend.startsWith('-') ? 'negative' : 'neutral'}`}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsOverview



