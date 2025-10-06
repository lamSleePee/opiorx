import { useState } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProjectDescription from './pages/ProjectDescription'
import DryLabPage from './pages/DryLabPage'
import WetLabPage from './pages/WetLabPage'
import TeamPage from './pages/TeamPage'
import DryLabResultsPage from './pages/DryLabResultsPage'
import './App.css'
import EntrepreneurshipPage from './pages/EntrepreneurshipPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'project':
        return <ProjectDescription />
        case 'drylab':
          return <DryLabPage />
        case 'wetlab':
          return <WetLabPage />
      case 'lab':
  return (
          <div className="page-header">
            <h1>Lab</h1>
            <p>Laboratory information and protocols coming soon...</p>
          </div>
        )
      case 'drylabresults':
        return <DryLabResultsPage />
      case 'humanpractices':
        return (
          <div className="page-header">
            <h1>Human Practices</h1>
            <p>Activities and stakeholder engagement coming soon...</p>
          </div>
        )
      case 'entrepreneurship':
        return <EntrepreneurshipPage />
      case 'team':
        return <TeamPage />
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


