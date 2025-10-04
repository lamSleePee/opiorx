import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import ScrollText from '../components/sections/ScrollText'
import DeathCounter from '../components/sections/DeathCounter'
import WorldMap from '../components/charts/WorldMap'
import OpioidTrendsChart from '../components/charts/OpioidTrendsChart'
import GlobalStats from '../components/sections/GlobalStats'
import TechnologyHero from '../components/sections/TechnologyHero'
import MetricsOverview from '../components/sections/MetricsOverview'
import PatientCharts from '../components/charts/PatientCharts'
import Features from '../components/sections/Features'
import Stats from '../components/sections/Stats'
import TestingMethods from '../components/sections/TestingMethods'
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
      <Header onNavigate={onNavigate} />
      <DeathCounter />
      <WorldMap />
      <OpioidTrendsChart />
      <TestingMethods />
      <GlobalStats />
      <TechnologyHero />
      <MetricsOverview />
      <PatientCharts patientData={patientData} />
      <Features />
      <Stats />
    </div>
  )
}

export default HomePage
