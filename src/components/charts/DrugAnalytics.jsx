import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { worldDrugData, indiaDrugData, worldDrugTypes, indiaDrugTypes } from '../../data/constants'

const DrugAnalytics = () => {
  return (
    <section className="drug-analytics">
      <div className="analytics-container">
        <div className="analytics-header">
          <h2>Drug Abuse Analytics</h2>
          <p>Comprehensive data visualization of drug abuse trends worldwide and in India</p>
        </div>

        <div className="analytics-grid">
          {/* World Trends */}
          <div className="analytics-section">
            <h3>Global Drug Abuse Trends (2015-2023)</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={worldDrugData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#64748b"
                    fontSize={12}
                  />
                  <YAxis 
                    yAxisId="left"
                    stroke="#64748b"
                    fontSize={12}
                    label={{ value: 'Cases (Millions)', angle: -90, position: 'insideLeft' }}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right"
                    stroke="#64748b"
                    fontSize={12}
                    label={{ value: 'Deaths', angle: 90, position: 'insideRight' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="cases"
                    stroke="#0891b2"
                    fill="#0891b2"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="deaths"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* India Trends */}
          <div className="analytics-section">
            <h3>India Drug Abuse Trends (2015-2023)</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={indiaDrugData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#64748b"
                    fontSize={12}
                  />
                  <YAxis 
                    yAxisId="left"
                    stroke="#64748b"
                    fontSize={12}
                    label={{ value: 'Cases (Millions)', angle: -90, position: 'insideLeft' }}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right"
                    stroke="#64748b"
                    fontSize={12}
                    label={{ value: 'Deaths', angle: 90, position: 'insideRight' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="cases"
                    stroke="#0891b2"
                    fill="#0891b2"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="deaths"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Drug Type Distribution */}
          <div className="analytics-section">
            <h3>Drug Type Distribution (World)</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={worldDrugTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {worldDrugTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* India Drug Type Distribution */}
          <div className="analytics-section">
            <h3>Drug Type Distribution (India)</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={indiaDrugTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {indiaDrugTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="analytics-summary">
          <div className="summary-card">
            <h4>Key Insights</h4>
            <ul>
              <li>Global drug abuse cases increased by 15.4% from 2015 to 2023</li>
              <li>India shows a 50% increase in drug abuse cases over the same period</li>
              <li>Cannabis remains the most commonly abused drug globally and in India</li>
              <li>Opioid-related deaths have been steadily increasing worldwide</li>
              <li>India's drug abuse pattern differs significantly from global trends</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DrugAnalytics


