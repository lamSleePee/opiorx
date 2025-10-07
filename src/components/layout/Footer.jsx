import React from 'react'

const Footer = () => {
  return (
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
          <div className="footer-social">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a4.5 4.5 0 0 0-3.16-3.18C18.5 2.5 12 2.5 12 2.5s-6.5 0-8.34.52A4.5 4.5 0 0 0 .5 6.2 47.4 47.4 0 0 0 0 12a47.4 47.4 0 0 0 .5 5.8 4.5 4.5 0 0 0 3.16 3.18C5.5 21.5 12 21.5 12 21.5s6.5 0 8.34-.52a4.5 4.5 0 0 0 3.16-3.18A47.4 47.4 0 0 0 24 12a47.4 47.4 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </a>
          </div>
          <p>&copy; 2024 OpioRX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



