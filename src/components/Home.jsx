import React from 'react';
import Spline from '@splinetool/react-spline';
import DataSection from './DataSection';
import Navbar from './Navbar';

const Home = () => {

  return (
    <div className="app">
      <Navbar />
      <div id="home" className="hero-section">
        <Spline scene="/scene.splinecode" />
        <div className="hero-content">
          <h1 className="hero-title">BREAK THE CHAIN</h1>
        </div>
      </div>
      <DataSection />
    </div>
  );
};

export default Home;