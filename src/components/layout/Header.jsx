import React, { useState, useEffect, useRef } from 'react'

const Header = ({ onNavigate }) => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false)
  const [isEngineeringDropdownOpen, setIsEngineeringDropdownOpen] = useState(false)
  const [isResultsDropdownOpen, setIsResultsDropdownOpen] = useState(false)
  const [isEngagementDropdownOpen, setIsEngagementDropdownOpen] = useState(false)
  const projectDropdownRef = useRef(null)
  const engagementDropdownRef = useRef(null)

  const handleClick = (e, page) => {
    e.preventDefault()
    onNavigate(page)
    setIsProjectDropdownOpen(false)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsEngagementDropdownOpen(false)
  }

  const toggleProjectDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsProjectDropdownOpen(!isProjectDropdownOpen)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
    setIsEngagementDropdownOpen(false)
  }

  const toggleEngineeringDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEngineeringDropdownOpen(!isEngineeringDropdownOpen)
    setIsResultsDropdownOpen(false)
  }

  const toggleResultsDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResultsDropdownOpen(!isResultsDropdownOpen)
    setIsEngineeringDropdownOpen(false)
  }

  const toggleEngagementDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEngagementDropdownOpen(!isEngagementDropdownOpen)
    setIsProjectDropdownOpen(false)
    setIsEngineeringDropdownOpen(false)
    setIsResultsDropdownOpen(false)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideProject = projectDropdownRef.current && !projectDropdownRef.current.contains(event.target)
      const clickedOutsideEngagement = engagementDropdownRef.current && !engagementDropdownRef.current.contains(event.target)

      if (clickedOutsideProject && clickedOutsideEngagement) {
        setIsProjectDropdownOpen(false)
        setIsEngineeringDropdownOpen(false)
        setIsEngagementDropdownOpen(false)
        setIsResultsDropdownOpen(false)
      }
    }

    if (isProjectDropdownOpen || isEngineeringDropdownOpen || isEngagementDropdownOpen || isResultsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isProjectDropdownOpen, isEngineeringDropdownOpen, isEngagementDropdownOpen, isResultsDropdownOpen])

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
                    <a href="#" onClick={(e) => handleClick(e, 'project')} className="nav-dropdown-sub-item">
                      <span>In Silico</span>
                    </a>
                    <a href="#" onClick={(e) => handleClick(e, 'drylabresults')} className="nav-dropdown-sub-item">
                      <span>Dry Lab Results</span>
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
          <a href="#" onClick={(e) => handleClick(e, 'lab')}>Lab</a>
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
                  <span>Human Practices</span>
                </a>
                <a href="#" onClick={(e) => handleClick(e, 'entrepreneurship')}>
                  <span>Entrepreneurship</span>
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
