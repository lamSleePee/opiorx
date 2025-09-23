import React, { useState, useEffect } from 'react'
import DeathCounter from '../components/sections/DeathCounter'
import WorldMap from '../components/charts/WorldMap'
import GlobalStats from '../components/sections/GlobalStats'
import DrugAnalytics from '../components/charts/DrugAnalytics'
import TechnologyHero from '../components/sections/TechnologyHero'
import MetricsOverview from '../components/sections/MetricsOverview'
import PatientCharts from '../components/charts/PatientCharts'
import Features from '../components/sections/Features'
import Stats from '../components/sections/Stats'
import { generatePatientData } from '../data/constants'

const HomePage = () => {
  const [patientData, setPatientData] = useState([])

  useEffect(() => {
    setPatientData(generatePatientData())
    // Update data every 30 seconds
    const interval = setInterval(() => {
      setPatientData(generatePatientData())
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home-page">
      <DeathCounter />
      <WorldMap />
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

export default HomePage
