import React, { useState } from 'react';
import { Presentation, Download, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import './PitchDeckPage.css';

export default function PitchDeckPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const viewer = document.getElementById('ppt-viewer');
    if (!document.fullscreenElement) {
      viewer.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Path to your PowerPoint file in the public folder
  const pptPath = '/pitch-deck.pptx';
  
  // Using Microsoft Office Online viewer
  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + pptPath)}`;

  return (
    <div className="pitch-deck-page">
      {/* Hero Section */}
      <section className="pitch-deck-hero">
        <div className="pitch-deck-hero-content">
          <div className="pitch-deck-badge">
            <Presentation className="pitch-deck-badge-icon" />
            Investment Opportunity
          </div>
          <h1 className="pitch-deck-hero-title">Pitch Deck</h1>
          <p className="pitch-deck-hero-description">
            OPIO-RX: Revolutionizing opioid detection with AI-powered biosensing technology
          </p>
        </div>
      </section>

      <div className="pitch-deck-container">
        {/* Controls */}
        <div className="pitch-deck-controls">
          <div className="pitch-deck-info">
            <Presentation className="pitch-deck-info-icon" />
            <span>Use the controls below to navigate through the presentation</span>
          </div>
          <div className="pitch-deck-actions">
            <a 
              href={pptPath} 
              download 
              className="pitch-deck-btn pitch-deck-btn-download"
              title="Download Presentation"
            >
              <Download className="pitch-deck-btn-icon" />
              Download PPT
            </a>
            <button 
              onClick={toggleFullscreen}
              className="pitch-deck-btn pitch-deck-btn-fullscreen"
              title="Fullscreen Mode"
            >
              <Maximize2 className="pitch-deck-btn-icon" />
              Fullscreen
            </button>
          </div>
        </div>

        {/* PowerPoint Viewer */}
        <div className="pitch-deck-viewer-wrapper" id="ppt-viewer">
          <iframe
            src={viewerUrl}
            className="pitch-deck-viewer"
            frameBorder="0"
            title="Pitch Deck Presentation"
            allowFullScreen
          >
            <p>Your browser does not support iframes. Please <a href={pptPath} download>download the presentation</a> to view it.</p>
          </iframe>
          
          {/* Fallback message */}
          <div className="pitch-deck-fallback">
            <Presentation className="pitch-deck-fallback-icon" />
            <h3>Presentation Viewer</h3>
            <p>If the presentation doesn't load, please try:</p>
            <ul>
              <li>Refreshing the page</li>
              <li>Downloading the file directly</li>
              <li>Opening in a different browser</li>
            </ul>
            <a href={pptPath} download className="pitch-deck-btn pitch-deck-btn-download">
              <Download className="pitch-deck-btn-icon" />
              Download Presentation
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="pitch-deck-footer">
          <div className="pitch-deck-footer-card">
            <h3>About This Presentation</h3>
            <p>
              This pitch deck outlines OPIO-RX's innovative approach to opioid detection, 
              market opportunity, competitive advantages, business model, and growth strategy. 
              It demonstrates our commitment to addressing the global opioid crisis through 
              cutting-edge biosensing technology and AI-powered analysis.
            </p>
          </div>
          
          <div className="pitch-deck-footer-card">
            <h3>Key Highlights</h3>
            <ul>
              <li>Revolutionary aptamer-based FRET detection technology</li>
              <li>AI-powered mobile app for instant results</li>
              <li>Rapid detection in under 3 minutes</li>
              <li>Multiplex detection of 5+ synthetic opioids</li>
              <li>$52.8B total addressable market</li>
              <li>Strong IP portfolio and regulatory pathway</li>
            </ul>
          </div>
        </div>

        {/* Navigation Tips */}
        <div className="pitch-deck-tips">
          <div className="pitch-deck-tip">
            <ChevronLeft className="pitch-deck-tip-icon" />
            <span>Use arrow keys to navigate slides</span>
          </div>
          <div className="pitch-deck-tip">
            <ChevronRight className="pitch-deck-tip-icon" />
            <span>Click fullscreen for better viewing experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}

