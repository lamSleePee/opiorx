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
          <p>&copy; 2024 OpioRX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



