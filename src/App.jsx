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
      painLevel: Math.floor(Math.random() * 8) + 1,
      heartRate: Math.floor(Math.random() * 40) + 60,
      bloodPressure: Math.floor(Math.random() * 20) + 120,
      medicationEffectiveness: Math.floor(Math.random() * 40) + 60
    })
  }
  return data
}

const patientMetrics = [
  { name: 'Pain Level', value: '3', unit: '/10', trend: '-2', status: 'good' },
  { name: 'Heart Rate', value: '72', unit: 'BPM', trend: '+1', status: 'normal' },
  { name: 'Blood Pressure', value: '128', unit: 'mmHg', trend: '-3', status: 'normal' },
  { name: 'Medication Effect', value: '85', unit: '%', trend: '+5', status: 'excellent' }
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
            <span className="tagline">Precision Pain Management</span>
          </div>
          <div className="nav-menu">
            <a href="#dashboard">Dashboard</a>
            <a href="#monitoring">Monitoring</a>
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
            <h1>Advanced Pain Management Technology</h1>
            <p>Monitor opioid effectiveness with precision biosensor technology. Real-time patient tracking for safer, more effective pain management.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Monitoring</button>
              <button className="btn-secondary">View Dashboard</button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="metrics">
        <div className="metrics-container">
          <h2>Patient Monitoring Metrics</h2>
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
            <h3>Pain Level & Medication Effectiveness (24h)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="painLevel" stroke="#dc2626" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="medicationEffectiveness" stroke="#059669" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-section">
            <h3>Vital Signs Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={patientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="heartRate" fill="#3b82f6" />
                <Bar dataKey="bloodPressure" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2>OpioRX Advanced Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Monitoring</h3>
              <p>Continuous tracking of pain levels and medication effectiveness with instant alerts for any concerning changes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI Analytics</h3>
              <p>Advanced machine learning algorithms analyze patient patterns and predict optimal medication timing and dosages.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety Protocols</h3>
              <p>Built-in safety measures and overdose prevention systems to ensure patient safety at all times.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Integration</h3>
              <p>Seamless integration with mobile apps for patients and healthcare providers for 24/7 monitoring.</p>
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
