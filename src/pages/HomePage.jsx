import React, { useState, useEffect } from 'react'
import ScrollText from '../components/sections/ScrollText'
import DeathCounter from '../components/sections/DeathCounter'
import InsightsHero from '../components/sections/InsightsHero'
import HeroPitch from '../components/sections/HeroPitch'
import WorldMap from '../components/charts/WorldMap'
import OpioidTrendsChart from '../components/charts/OpioidTrendsChart'
import GlobalStats from '../components/sections/GlobalStats'
import TechnologyHero from '../components/sections/TechnologyHero'
// import PatientCharts from '../components/charts/PatientCharts'
import Features from '../components/sections/Features'
// import Stats from '../components/sections/Stats'
import TestingMethods from '../components/sections/TestingMethods'
import BreakthroughInnovations from '../components/sections/BreakthroughInnovations'
import { generatePatientData } from '../data/constants'

const HomePage = ({ onNavigate }) => {
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
      <ScrollText />
      <DeathCounter />
      <HeroPitch />
      <WorldMap />
      <OpioidTrendsChart />
      <GlobalStats />
      <TestingMethods />
      <BreakthroughInnovations />
      <TechnologyHero />
      {/* <PatientCharts patientData={patientData} /> */}
      <Features />
      {/* <Stats /> */}
    </div>
  )
}

export default HomePage
