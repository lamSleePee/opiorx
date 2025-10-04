import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const PatientCharts = ({ patientData }) => {
  return (
    <section className="charts">
      <div className="charts-container">
        <div className="chart-section">
          <h3>Opioid Detection Levels (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={patientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="opioidLevel" stroke="#dc2626" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="detectionAccuracy" stroke="#059669" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="chart-section">
          <h3>Test Performance Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={patientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sampleVolume" fill="#3b82f6" />
              <Bar dataKey="testReliability" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

export default PatientCharts





