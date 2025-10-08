import { useState } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProjectDescription from './pages/ProjectDescription'
import DryLabPage from './pages/DryLabPage'
import WetLabPage from './pages/WetLabPage'
import TeamPage from './pages/TeamPage'
import DryLabResultsPage from './pages/DryLabResultsPage'
import WetLabResultsPage from './pages/WetLabResultsPage'
import './App.css'
import NotebooksPage from './pages/NotebooksPage'
import EntrepreneurshipPage from './pages/EntrepreneurshipPage'
import SafetyPage from './pages/SafetyPage'
import { BusinessAnalysisPage } from './pages/BusinessAnalysisPage'
import PitchDeckPage from './pages/PitchDeckPage'
import ContributionPage from './pages/ContributionPage'
import ProtocolsPage from './pages/ProtocolsPage'

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
      case 'labsafety':
        return <SafetyPage />
      case 'labprotocols':
        return <ProtocolsPage />
      case 'drylabresults':
        return <DryLabResultsPage />
      case 'wetlabresults':
        return <WetLabResultsPage />
      case 'contrib-overview':
        return (
          <div className="page-header">
            <h1>Contribution – Overview</h1>
            <p>Summary of our contributions to methods, documentation, community resources, and tooling.</p>
          </div>
        )
      case 'contrib-parts':
        return (
          <div className="page-header">
            <h1>Contribution – Parts</h1>
            <p>List of biological parts and computational assets we contributed.</p>
          </div>
        )
      case 'contrib-entre-notebook':
        return (
          <div className="page-header">
            <h1>Entrepreneurship Notebook</h1>
            <p>Market studies, validation experiments, and business learnings compiled for iGEM.</p>
          </div>
        )
      case 'contrib-igem-community':
        return (
          <div className="page-header">
            <h1>iGEM Community</h1>
            <p>Outreach, collaborations, and community resources shared with other teams.</p>
          </div>
        )
      case 'contribution':
        return <ContributionPage />
      case 'notebooks':
        return <NotebooksPage />
      case 'humanpractices':
        return (
          <div className="page-header">
            <h1>Human Practices</h1>
            <p>Activities and stakeholder engagement coming soon...</p>
          </div>
        )
      case 'entrepreneurship':
        return <EntrepreneurshipPage />
      case 'business-analysis':
        return <BusinessAnalysisPage />
      case 'pitch-deck':
        return <PitchDeckPage />
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


