import React from 'react'
import GlobalStats from '../components/sections/GlobalStats'
import DrugAnalytics from '../components/charts/DrugAnalytics'

const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Comprehensive drug abuse statistics and trends analysis</p>
      </div>
      <GlobalStats />
      <DrugAnalytics />
    </div>
  )
}

export default AnalyticsPage



