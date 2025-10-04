import React from 'react'

const Header = ({ onNavigate }) => {
  const handleClick = (e, page) => {
    e.preventDefault()
    onNavigate(page)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>OpioRX</h1>
          <span className="tagline">Saliva-Based Opioid Detection</span>
        </div>
        <div className="nav-menu">
          <a href="#" onClick={(e) => handleClick(e, 'home')}>Home</a>
          <a href="#" onClick={(e) => handleClick(e, 'project')}>Project</a>
          <a href="#" onClick={(e) => handleClick(e, 'igem')}>iGEM Poster</a>
          <a href="#" onClick={(e) => handleClick(e, 'dashboard')}>Dashboard</a>
          <a href="#" onClick={(e) => handleClick(e, 'detection')}>Detection</a>
          <a href="#" onClick={(e) => handleClick(e, 'analytics')}>Analytics</a>
          <a href="#" onClick={(e) => handleClick(e, 'patients')}>Patients</a>
          <a href="#" onClick={(e) => handleClick(e, 'settings')}>Settings</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
