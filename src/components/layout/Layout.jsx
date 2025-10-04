import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, showHeader = true, onNavigate }) => {
  return (
    <div className="app">
      {showHeader && <Header onNavigate={onNavigate} />}
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
