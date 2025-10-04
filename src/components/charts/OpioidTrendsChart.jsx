import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ComposedChart
} from 'recharts'

const OpioidTrendsChart = () => {
  // Exact data based on the provided graph image
  const data = [
    { year: 1999, prescriptionDispensing: 68, syntheticDeaths: 0.1, heroinDeaths: 0.1, prescriptionDeaths: 1.0 },
    { year: 2000, prescriptionDispensing: 70, syntheticDeaths: 0.1, heroinDeaths: 0.2, prescriptionDeaths: 1.2 },
    { year: 2001, prescriptionDispensing: 72, syntheticDeaths: 0.1, heroinDeaths: 0.3, prescriptionDeaths: 1.5 },
    { year: 2002, prescriptionDispensing: 74, syntheticDeaths: 0.1, heroinDeaths: 0.4, prescriptionDeaths: 1.8 },
    { year: 2003, prescriptionDispensing: 76, syntheticDeaths: 0.1, heroinDeaths: 0.5, prescriptionDeaths: 2.2 },
    { year: 2004, prescriptionDispensing: 77, syntheticDeaths: 0.1, heroinDeaths: 0.6, prescriptionDeaths: 2.6 },
    { year: 2005, prescriptionDispensing: 78, syntheticDeaths: 0.1, heroinDeaths: 0.8, prescriptionDeaths: 3.0 },
    { year: 2006, prescriptionDispensing: 79, syntheticDeaths: 0.1, heroinDeaths: 1.0, prescriptionDeaths: 3.4 },
    { year: 2007, prescriptionDispensing: 80, syntheticDeaths: 0.1, heroinDeaths: 1.2, prescriptionDeaths: 3.8 },
    { year: 2008, prescriptionDispensing: 80.5, syntheticDeaths: 0.1, heroinDeaths: 1.4, prescriptionDeaths: 4.2 },
    { year: 2009, prescriptionDispensing: 81, syntheticDeaths: 0.1, heroinDeaths: 1.6, prescriptionDeaths: 4.6 },
    { year: 2010, prescriptionDispensing: 81, syntheticDeaths: 0.1, heroinDeaths: 1.8, prescriptionDeaths: 5.0 },
    { year: 2011, prescriptionDispensing: 80.5, syntheticDeaths: 0.2, heroinDeaths: 2.0, prescriptionDeaths: 5.4 },
    { year: 2012, prescriptionDispensing: 80, syntheticDeaths: 0.3, heroinDeaths: 2.2, prescriptionDeaths: 5.5 },
    { year: 2013, prescriptionDispensing: 79, syntheticDeaths: 0.5, heroinDeaths: 2.4, prescriptionDeaths: 5.4 },
    { year: 2014, prescriptionDispensing: 77, syntheticDeaths: 0.8, heroinDeaths: 2.8, prescriptionDeaths: 5.2 },
    { year: 2015, prescriptionDispensing: 75, syntheticDeaths: 1.2, heroinDeaths: 3.2, prescriptionDeaths: 5.0 },
    { year: 2016, prescriptionDispensing: 72, syntheticDeaths: 2.0, heroinDeaths: 4.0, prescriptionDeaths: 5.2 },
    { year: 2017, prescriptionDispensing: 68, syntheticDeaths: 3.5, heroinDeaths: 4.8, prescriptionDeaths: 5.4 },
    { year: 2018, prescriptionDispensing: 64, syntheticDeaths: 6.0, heroinDeaths: 5.2, prescriptionDeaths: 5.6 },
    { year: 2019, prescriptionDispensing: 60, syntheticDeaths: 9.0, heroinDeaths: 5.0, prescriptionDeaths: 5.8 },
    { year: 2020, prescriptionDispensing: 56, syntheticDeaths: 12.0, heroinDeaths: 4.8, prescriptionDeaths: 6.0 },
    { year: 2021, prescriptionDispensing: 42, syntheticDeaths: 18.0, heroinDeaths: 4.5, prescriptionDeaths: 5.0 }
  ]

  return (
    <div className="opioid-trends-section">
      <div className="opioid-trends-container">
        <div className="opioid-trends-header">
          <h2>Opioid Overdose Death Rates Per 100,000 Persons</h2>
          <p>Analysis of prescription dispensing rates and opioid-related deaths over two decades (1999-2021)</p>
        </div>
        
        <div className="opioid-trends-chart">
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 60,
                left: 60,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="year" 
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                interval={1}
              />
              <YAxis 
                yAxisId="left"
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Prescription Opioid Dispensing Rate', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
                domain={[0, 100]}
                width={80}
                tick={false}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Opioid Overdose Death Rates Per 100,000 Persons', angle: 90, position: 'insideRight', style: { textAnchor: 'middle' } }}
                domain={[0, 20]}
                width={80}
                tick={false}
              />
              <Legend 
                wrapperStyle={{
                  paddingTop: '20px',
                  fontSize: '14px'
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="prescriptionDispensing"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
                name="Prescription Opioid Dispensing Rate"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="syntheticDeaths"
                stroke="#ec4899"
                strokeWidth={3}
                dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#ec4899', strokeWidth: 2 }}
                name="Deaths from Synthetic Opioids"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="heroinDeaths"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                name="Deaths from Heroin"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="prescriptionDeaths"
                stroke="#0891b2"
                strokeWidth={3}
                dot={{ fill: '#0891b2', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#0891b2', strokeWidth: 2 }}
                name="Deaths from Prescription Opioids"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        <div className="opioid-trends-insights">
          <div className="insight-card">
            <h4>Phase 1 (1999-2010): Prescription Opioid Era</h4>
            <ul>
              <li>Prescription dispensing rate rose from 68 to 81 per 100 persons</li>
              <li>Prescription opioid deaths increased from 1.0 to 5.0 per 100,000</li>
              <li>Synthetic opioid deaths remained negligible (0.1 per 100,000)</li>
              <li>Heroin deaths slowly increased from 0.1 to 1.8 per 100,000</li>
            </ul>
          </div>
          <div className="insight-card">
            <h4>Phase 2 (2011-2016): Transition Period</h4>
            <ul>
              <li>Prescription dispensing peaked at 81 in 2010-2011, then declined</li>
              <li>Synthetic opioid deaths began rapid rise from 2013-2014</li>
              <li>Heroin deaths accelerated, peaking at 4.0 per 100,000 in 2016</li>
              <li>Prescription opioid deaths plateaued around 5.0-5.5 per 100,000</li>
            </ul>
          </div>
          <div className="insight-card">
            <h4>Phase 3 (2017-2021): Synthetic Opioid Crisis</h4>
            <ul>
              <li>Prescription dispensing dropped to 42 per 100 persons by 2021</li>
              <li>Synthetic opioid deaths exploded to 18.0 per 100,000 by 2021</li>
              <li>Heroin deaths plateaued and slightly declined to 4.5 per 100,000</li>
              <li>Synthetic opioids became the dominant cause of opioid deaths</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpioidTrendsChart
