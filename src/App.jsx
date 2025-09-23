import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import DeathCounter from './components/sections/DeathCounter'
import WorldMap from './components/charts/WorldMap'
import GlobalStats from './components/sections/GlobalStats'
import DrugAnalytics from './components/charts/DrugAnalytics'
import TechnologyHero from './components/sections/TechnologyHero'
import MetricsOverview from './components/sections/MetricsOverview'
import PatientCharts from './components/charts/PatientCharts'
import Features from './components/sections/Features'
import Stats from './components/sections/Stats'
import TestingMethods from './components/sections/TestingMethods'
import { generatePatientData } from './data/constants'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [patientData, setPatientData] = useState([])

  useEffect(() => {
    setPatientData(generatePatientData())
    // Update data every 30 seconds
    const interval = setInterval(() => {
      setPatientData(generatePatientData())
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
  return (
          <div className="dashboard-page">
            <div className="page-header">
              <h1>Dashboard</h1>
              <p>Real-time opioid detection monitoring and analytics</p>
            </div>
            <MetricsOverview />
            <PatientCharts patientData={patientData} />
          </div>
        )
      case 'analytics':
        return (
          <div className="analytics-page">
            <div className="page-header">
              <h1>Analytics</h1>
              <p>Comprehensive drug abuse statistics and trends analysis</p>
            </div>
            <GlobalStats />
            <DrugAnalytics />
          </div>
        )
      case 'detection':
        return (
          <div className="detection-page">
            <div className="page-header">
              <h1>Detection</h1>
              <p>Advanced opioid detection technology and features</p>
            </div>
            <TechnologyHero />
            <Features />
          </div>
        )
      case 'patients':
        return <div className="page-header"><h1>Patients</h1><p>Patient management coming soon...</p></div>
      case 'settings':
        return <div className="page-header"><h1>Settings</h1><p>Settings panel coming soon...</p></div>
      default:
        return (
          <div className="home-page">
            <DeathCounter />
            <WorldMap />
            <TestingMethods />
            <GlobalStats />
            <DrugAnalytics />
            <TechnologyHero />
            <MetricsOverview />
            <PatientCharts patientData={patientData} />
            <Features />
            <Stats />
          </div>
        )
    }
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app">
      <Header onNavigate={handleNavigation} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App


