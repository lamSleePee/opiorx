import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import BioSensor from './components/BioSensor'
import './App.css'

// OpioRX data for demonstration
const generatePatientData = () => {
  const data = []
  const now = new Date()
  for (let i = 0; i < 24; i++) {
    const time = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000)
    data.push({
      time: time.getHours() + ':00',
      opioidLevel: Math.floor(Math.random() * 100),
      detectionAccuracy: Math.floor(Math.random() * 10) + 90,
      sampleVolume: Math.floor(Math.random() * 20) + 80,
      testReliability: Math.floor(Math.random() * 15) + 85
    })
  }
  return data
}

const patientMetrics = [
  { name: 'Opioid Detection', value: 'Positive', unit: 'Result', trend: 'Active', status: 'warning' },
  { name: 'Detection Accuracy', value: '99.2', unit: '%', trend: '+0.3', status: 'excellent' },
  { name: 'Test Duration', value: '45', unit: 'seconds', trend: '-5', status: 'good' },
  { name: 'Sample Quality', value: 'High', unit: 'Grade', trend: 'Stable', status: 'excellent' }
]

function App() {
  const [patientData, setPatientData] = useState([])

  useEffect(() => {
    setPatientData(generatePatientData())
    // Update data every 30 seconds
    const interval = setInterval(() => {
      setPatientData(generatePatientData())
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
        <div className="nav-logo">
          <h1>OpioRX</h1>
          <span className="tagline">Saliva-Based Opioid Detection</span>
        </div>
        <div className="nav-menu">
          <a href="#dashboard">Dashboard</a>
          <a href="#detection">Detection</a>
          <a href="#analytics">Analytics</a>
          <a href="#patients">Patients</a>
          <a href="#settings">Settings</a>
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-visual">
            <BioSensor />
          </div>
          <div className="hero-content">
            <h1>Advanced Opioid Detection Technology</h1>
            <p>Detect various opioids in saliva with precision biosensor technology. Instant screening for safer pain management and addiction monitoring.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Detection</button>
              <button className="btn-secondary">View Results</button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
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

      {/* Charts Section */}
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

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
        <h2>OpioRX Detection Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Multi-Opioid Detection</h3>
            <p>Detect various opioids including morphine, oxycodone, fentanyl, and codeine in saliva samples with 99%+ accuracy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>Get detection results in under 60 seconds with real-time biosensor technology for immediate clinical decision making.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Non-Invasive Testing</h3>
            <p>Simple saliva collection eliminates the need for blood draws, making testing more comfortable and accessible.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Quantitative Analysis</h3>
            <p>Measure precise opioid concentrations to determine usage patterns and monitor treatment compliance effectively.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Patients Monitored</p>
          </div>
          <div className="stat-item">
            <h3>99.8%</h3>
            <p>Safety Record</p>
          </div>
          <div className="stat-item">
            <h3>45%</h3>
            <p>Pain Reduction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Continuous Monitoring</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>OpioRX</h3>
              <p>Precision pain management through advanced biosensor technology.</p>
            </div>
            <div className="footer-section">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#patient-monitoring">Patient Monitoring</a></li>
                <li><a href="#clinical-analytics">Clinical Analytics</a></li>
                <li><a href="#safety-protocols">Safety Protocols</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#training">Training</a></li>
                <li><a href="#contact">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 OpioRX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
