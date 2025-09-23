import React from 'react'
import TechnologyHero from '../components/sections/TechnologyHero'
import Features from '../components/sections/Features'

const DetectionPage = () => {
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
}

export default DetectionPage


