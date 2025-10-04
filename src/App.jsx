import { useState } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'
import DetectionPage from './pages/DetectionPage'
import ProjectDescription from './pages/ProjectDescription'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />
      case 'analytics':
        return <AnalyticsPage />
      case 'detection':
        return <DetectionPage />
      case 'project':
        return <ProjectDescription />
      case 'patients':
  return (
          <div className="page-header">
            <h1>Patients</h1>
            <p>Patient management coming soon...</p>
          </div>
        )
      case 'settings':
        return (
          <div className="page-header">
            <h1>Settings</h1>
            <p>Settings panel coming soon...</p>
          </div>
        )
      default:
        return <HomePage onNavigate={handleNavigation} />
    }
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  return (
    <Layout onNavigate={handleNavigation}>
      {renderPage()}
    </Layout>
  )
}

export default App


