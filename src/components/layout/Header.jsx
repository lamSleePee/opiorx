import React, { useState, useEffect, useRef } from 'react'

const Header = ({ onNavigate }) => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false)
  const [isEngineeringDropdownOpen, setIsEngineeringDropdownOpen] = useState(false)
  const [isResultsDropdownOpen, setIsResultsDropdownOpen] = useState(false)
  const [isEngagementDropdownOpen, setIsEngagementDropdownOpen] = useState(false)
  const [isLabDropdownOpen, setIsLabDropdownOpen] = useState(false)
  const [isEntrepreneurshipDropdownOpen, setIsEntrepreneurshipDropdownOpen] = useState(false)
  const projectDropdownRef = useRef(null)
  const engagementDropdownRef = useRef(null)
  const labDropdownRef = useRef(null)
  const entrepreneurshipDropdownRef = useRef(null)

  const handleClick = (e, page) => {
    e.preventDefault()
    onNavigate(page)
    setIsProjectDropdownOpen(false)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsEngagementDropdownOpen(false)
    setIsLabDropdownOpen(false)
    setIsEntrepreneurshipDropdownOpen(false)
  }

  const toggleProjectDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsProjectDropdownOpen(!isProjectDropdownOpen)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsEngagementDropdownOpen(false)
    setIsLabDropdownOpen(false)
    setIsEntrepreneurshipDropdownOpen(false)
  }


  const toggleEngineeringDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEngineeringDropdownOpen(!isEngineeringDropdownOpen)
    setIsResultsDropdownOpen(false)
    setIsLabDropdownOpen(false)
  }

  const toggleResultsDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResultsDropdownOpen(!isResultsDropdownOpen)
    setIsEngineeringDropdownOpen(false)
    setIsLabDropdownOpen(false)
  }

  const toggleEngagementDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEngagementDropdownOpen(!isEngagementDropdownOpen)
    setIsProjectDropdownOpen(false)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsLabDropdownOpen(false)
  }

  const toggleLabDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLabDropdownOpen(!isLabDropdownOpen)
    setIsProjectDropdownOpen(false)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsEngagementDropdownOpen(false)
    setIsEntrepreneurshipDropdownOpen(false)
  }

  const toggleEntrepreneurshipDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEntrepreneurshipDropdownOpen(!isEntrepreneurshipDropdownOpen)
    setIsProjectDropdownOpen(false)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsLabDropdownOpen(false)
    // Keep Engagement open since Entrepreneurship is nested inside it
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideProject = projectDropdownRef.current && !projectDropdownRef.current.contains(event.target)
      const clickedOutsideEngagement = engagementDropdownRef.current && !engagementDropdownRef.current.contains(event.target)
      const clickedOutsideLab = labDropdownRef.current && !labDropdownRef.current.contains(event.target)
      const clickedOutsideEntrepreneurship = entrepreneurshipDropdownRef.current && !entrepreneurshipDropdownRef.current.contains(event.target)

      if (clickedOutsideProject && clickedOutsideEngagement && clickedOutsideLab && clickedOutsideEntrepreneurship) {
        setIsProjectDropdownOpen(false)
        setIsEngineeringDropdownOpen(false)
        setIsEngagementDropdownOpen(false)
        setIsResultsDropdownOpen(false)
        setIsLabDropdownOpen(false)
        setIsEntrepreneurshipDropdownOpen(false)
      }
    }

    if (isProjectDropdownOpen || isEngineeringDropdownOpen || isEngagementDropdownOpen || isResultsDropdownOpen || isLabDropdownOpen || isEntrepreneurshipDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isProjectDropdownOpen, isEngineeringDropdownOpen, isEngagementDropdownOpen, isResultsDropdownOpen, isLabDropdownOpen, isEntrepreneurshipDropdownOpen])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>OpioRX</h1>
          <span className="tagline">Real Time Non Invasive Detection of Opioids</span>
        </div>
        <div className="nav-menu">
          <a href="#" onClick={(e) => handleClick(e, 'home')}>Home</a>
          <div className="nav-dropdown" ref={projectDropdownRef}>
            <a 
              href="#" 
              onClick={toggleProjectDropdown} 
              className={`nav-dropdown-toggle ${isProjectDropdownOpen ? 'active' : ''}`}
            >
              Project
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {isProjectDropdownOpen && (
              <div className="nav-dropdown-menu">
                <a href="#" onClick={(e) => handleClick(e, 'project')}>
                  <span>Project Description</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'contribution')}>
                  <span>Contribution</span>
                </a>
                <a 
                  href="#" 
                  className={`nav-dropdown-item ${isEngineeringDropdownOpen ? 'active' : ''}`}
                  onClick={toggleEngineeringDropdown}
                >
                  <span>Engineering-DBTL Cycles</span>
                  <svg className="dropdown-arrow" width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {isEngineeringDropdownOpen && (
                  <>
                    <a href="#" onClick={(e) => handleClick(e, 'drylab')} className="nav-dropdown-sub-item">
                      <span>Dry Lab</span>
                    </a>
                    <a href="#" onClick={(e) => handleClick(e, 'wetlab')} className="nav-dropdown-sub-item">
                      <span>Wet Lab</span>
                    </a>
                  </>
                )}
                <a href="#" onClick={toggleResultsDropdown} className={`nav-dropdown-item ${isResultsDropdownOpen ? 'active' : ''}`}>
                  <span>Results</span>
                  <svg className="dropdown-arrow" width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {isResultsDropdownOpen && (
                  <>
                    <a href="#" onClick={(e) => handleClick(e, 'wetlabresults')} className="nav-dropdown-sub-item">
                      <span>Wet Lab Results</span>
                    </a>
                    <a href="#" onClick={(e) => handleClick(e, 'drylabresults')} className="nav-dropdown-sub-item">
                      <span>Dry Lab Results</span>
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="nav-dropdown" ref={labDropdownRef}>
            <a 
              href="#" 
              onClick={toggleLabDropdown} 
              className={`nav-dropdown-toggle ${isLabDropdownOpen ? 'active' : ''}`}
            >
              Lab
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {isLabDropdownOpen && (
              <div className="nav-dropdown-menu">
                <a href="#" onClick={(e) => handleClick(e, 'notebooks')}>
                  <span>Notebooks</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'labsafety')}>
                  <span>Safety</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'labprotocols')}>
                  <span>Protocols</span>
                </a>
              </div>
            )}
          </div>
          <div className="nav-dropdown" ref={engagementDropdownRef}>
            <a 
              href="#" 
              onClick={toggleEngagementDropdown} 
              className={`nav-dropdown-toggle ${isEngagementDropdownOpen ? 'active' : ''}`}
            >
              Engagement
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {isEngagementDropdownOpen && (
              <div className="nav-dropdown-menu">
                <a href="#" onClick={(e) => handleClick(e, 'humanpractices')}>
                  <span>Integrated Human Practices</span>
                </a>
                <div ref={entrepreneurshipDropdownRef}>
                  <a 
                    href="#" 
                    className={`nav-dropdown-item ${isEntrepreneurshipDropdownOpen ? 'active' : ''}`}
                    onClick={toggleEntrepreneurshipDropdown}
                  >
                    <span>Entrepreneurship</span>
                    <svg className="dropdown-arrow" width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  {isEntrepreneurshipDropdownOpen && (
                    <>
                <a href="#" onClick={(e) => handleClick(e, 'entrepreneurship')} className="nav-dropdown-sub-item">
                  <span>Overview</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'business-analysis')} className="nav-dropdown-sub-item">
                  <span>Business Analysis</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'detailed-business-report')} className="nav-dropdown-sub-item">
                  <span>Detailed Business Report</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'pitch-deck')} className="nav-dropdown-sub-item">
                  <span>Pitch Deck</span>
                </a>
                    </>
                  )}
                </div>
                <a href="#" onClick={(e) => handleClick(e, 'education')}>
                  <span>Education</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'artgallery')}>
                  <span>Art Gallery</span>
                </a>
              </div>
            )}
          </div>
          <a href="#" onClick={(e) => handleClick(e, 'team')}>Team</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
