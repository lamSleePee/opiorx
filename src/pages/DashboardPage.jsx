import React, { useState, useEffect } from 'react'
import MetricsOverview from '../components/sections/MetricsOverview'
import PatientCharts from '../components/charts/PatientCharts'
import { generatePatientData } from '../data/constants'

const DashboardPage = () => {
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
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Real-time opioid detection monitoring and analytics</p>
      </div>
      <MetricsOverview />
      <PatientCharts patientData={patientData} />
    </div>
  )
}

export default DashboardPage


