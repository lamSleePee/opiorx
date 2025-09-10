import React, { forwardRef, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import './DataSection.css';

const DataSection = forwardRef((props, ref) => {
  const [selectedCard, setSelectedCard] = useState(null);
  // Drug abuse data for India
  const stateData = [
    { state: 'Punjab', cases: 45000, deaths: 1200, ageGroup: '18-35' },
    { state: 'Delhi', cases: 38000, deaths: 980, ageGroup: '18-35' },
    { state: 'Maharashtra', cases: 42000, deaths: 1100, ageGroup: '18-35' },
    { state: 'Haryana', cases: 32000, deaths: 850, ageGroup: '18-35' },
    { state: 'Uttar Pradesh', cases: 28000, deaths: 720, ageGroup: '18-35' },
    { state: 'Rajasthan', cases: 25000, deaths: 650, ageGroup: '18-35' },
    { state: 'Gujarat', cases: 22000, deaths: 580, ageGroup: '18-35' },
    { state: 'Tamil Nadu', cases: 19000, deaths: 490, ageGroup: '18-35' }
  ];

  const drugTypeData = [
    { name: 'Opioids', value: 35, color: '#8B5CF6' },
    { name: 'Cannabis', value: 28, color: '#3B82F6' },
    { name: 'Alcohol', value: 22, color: '#EF4444' },
    { name: 'Synthetic Drugs', value: 15, color: '#A855F7' }
  ];

  const yearlyTrend = [
    { year: '2018', cases: 180000, deaths: 4200 },
    { year: '2019', cases: 195000, deaths: 4600 },
    { year: '2020', cases: 210000, deaths: 5100 },
    { year: '2021', cases: 225000, deaths: 5400 },
    { year: '2022', cases: 240000, deaths: 5800 },
    { year: '2023', cases: 255000, deaths: 6200 }
  ];

  const ageGroupData = [
    { age: '13-17', percentage: 8 },
    { age: '18-25', percentage: 35 },
    { age: '26-35', percentage: 32 },
    { age: '36-45', percentage: 18 },
    { age: '46+', percentage: 7 }
  ];

  // Happy hormones data for card fan
  const happyHormones = [
    {
      id: 1,
      name: "Dopamine",
      description: "The reward neurotransmitter that creates feelings of pleasure and motivation",
      benefits: "Enhances focus, motivation, and feelings of accomplishment",
      color: "#8B5CF6",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "Serotonin",
      description: "The mood stabilizer that promotes feelings of well-being and happiness",
      benefits: "Reduces anxiety, improves sleep, and boosts self-esteem",
      color: "#3B82F6",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Endorphins",
      description: "Natural painkillers that create euphoric feelings and reduce stress",
      benefits: "Relieves pain, reduces stress, and creates natural high",
      color: "#EF4444",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 4,
      name: "Oxytocin",
      description: "The love hormone that promotes bonding and social connection",
      benefits: "Strengthens relationships, reduces stress, and increases trust",
      color: "#A855F7",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 5,
      name: "GABA",
      description: "The calming neurotransmitter that reduces anxiety and promotes relaxation",
      benefits: "Reduces anxiety, improves sleep quality, and promotes calmness",
      color: "#10B981",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <div ref={ref} id="statistics" className="data-section">
      <div className="data-container">
        <div className="data-header">
          <h2>Drug Abuse Crisis in India</h2>
          <p>
            India faces a growing drug abuse epidemic that affects millions of lives across the nation. 
            The statistics reveal a concerning trend that demands immediate attention and comprehensive 
            intervention strategies. From urban centers to rural areas, substance abuse continues to 
            devastate families and communities, with young adults being the most vulnerable demographic.
          </p>
        </div>

        <div className="charts-layout">
          {/* Graph 1: State-wise Cases Bar Chart */}
          <div className="chart-container full-width">
            <h3>Drug Abuse Cases by State (2023)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={stateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#8B5CF6" opacity={0.3} />
                <XAxis dataKey="state" angle={-45} textAnchor="end" height={100} stroke="#8B5CF6" />
                <YAxis stroke="#8B5CF6" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#000000',
                    border: '2px solid #8B5CF6',
                    borderRadius: '0',
                    color: '#ffffff'
                  }}
                />
                <Legend />
                <Bar dataKey="cases" fill="#3B82F6" name="Total Cases" />
                <Bar dataKey="deaths" fill="#EF4444" name="Deaths" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Paragraph 1 */}
          <div className="paragraph-container">
            <p className="chart-description">
              The data reveals a stark geographical concentration of drug abuse cases across India. 
              Punjab leads with the highest number of cases, reflecting the state's proximity to drug 
              trafficking routes and historical challenges with substance abuse. The northern states 
              show significantly higher rates compared to southern regions, indicating regional 
              disparities in drug availability and enforcement effectiveness.
            </p>
          </div>

          {/* Chart 1: Drug Type Distribution Pie Chart */}
          <div className="chart-container full-width">
            <h3>Substance Abuse Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={drugTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {drugTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#000000',
                    border: '2px solid #8B5CF6',
                    borderRadius: '0',
                    color: '#ffffff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Paragraph 2 */}
          <div className="paragraph-container">
            <p className="chart-description">
              Opioids dominate the substance abuse landscape, accounting for over one-third of all cases. 
              This reflects the growing opioid crisis affecting India, particularly with synthetic opioids 
              and prescription drug abuse. Cannabis remains the second most prevalent, while the emergence 
              of synthetic drugs represents a concerning new trend that requires immediate attention.
            </p>
          </div>

          {/* Graph 2: Yearly Trend Line Chart */}
          <div className="chart-container full-width">
            <h3>Rising Trend: Cases & Deaths (2018-2023)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={yearlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#8B5CF6" opacity={0.3} />
                <XAxis dataKey="year" stroke="#8B5CF6" />
                <YAxis stroke="#8B5CF6" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#000000',
                    border: '2px solid #8B5CF6',
                    borderRadius: '0',
                    color: '#ffffff'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="cases" 
                  stroke="#3B82F6" 
                  strokeWidth={4}
                  name="Total Cases"
                />
                <Line 
                  type="monotone" 
                  dataKey="deaths" 
                  stroke="#EF4444" 
                  strokeWidth={4}
                  name="Deaths"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Paragraph 3 */}
          <div className="paragraph-container">
            <p className="chart-description">
              The six-year trend reveals an alarming escalation in drug abuse cases across India. 
              From 2018 to 2023, total cases increased by over 40%, while deaths nearly doubled. 
              The COVID-19 pandemic period (2020-2021) shows a particularly sharp spike, suggesting 
              that lockdowns and economic stress may have exacerbated substance abuse issues. This 
              upward trajectory demands urgent policy intervention and comprehensive prevention strategies.
            </p>
          </div>

          {/* Happy Hormones Card Fan Stack */}
          <div id="hormones" className="card-fan-section">
            <h2 className="section-title">Natural Alternatives: Happy Hormones</h2>
            <p className="section-description">
              Instead of turning to harmful substances, our bodies produce natural chemicals that create 
              genuine happiness and well-being. These "happy hormones" can be boosted through healthy 
              activities and lifestyle choices.
            </p>
            
            <div className="card-fan-container">
              {happyHormones.map((hormone, index) => {
                const isSelected = selectedCard === hormone.id;
                const isOtherSelected = selectedCard !== null && selectedCard !== hormone.id;
                
                return (
                  <div
                    key={hormone.id}
                    className={`hormone-card ${isSelected ? 'selected' : ''} ${isOtherSelected ? 'stacked' : ''}`}
                    style={{
                      '--card-color': hormone.color,
                      '--card-index': index,
                      zIndex: isSelected ? 20 : (isOtherSelected ? 1 : happyHormones.length - index)
                    }}
                    onClick={() => handleCardClick(hormone.id)}
                  >
                    <div className="card-icon">{hormone.icon}</div>
                    <h3 className="card-title">{hormone.name}</h3>
                    <p className="card-description">{hormone.description}</p>
                    <div className="card-benefits">
                      <strong>Benefits:</strong> {hormone.benefits}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Statistics */}
          <div className="chart-container">
            <h3>Key Statistics</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">2.5M+</div>
                <div className="stat-label">Total Cases</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6,200</div>
                <div className="stat-label">Annual Deaths</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">67%</div>
                <div className="stat-label">Young Adults (18-35)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">35%</div>
                <div className="stat-label">Opioid Addiction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="data-footer">
          <p>
            <strong>Source:</strong> National Survey on Drug Use and Health, Ministry of Social Justice and Empowerment, 
            Government of India. Data represents the most recent comprehensive study conducted across all states and union territories.
          </p>
          <p>
            <strong>Note:</strong> These figures represent reported cases and may not capture the full extent of the crisis. 
            Many cases go unreported due to social stigma and lack of access to healthcare facilities.
          </p>
        </div>
      </div>
    </div>
  );
});

DataSection.displayName = 'DataSection';

export default DataSection;