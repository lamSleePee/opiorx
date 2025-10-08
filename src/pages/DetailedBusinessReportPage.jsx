import React, { useEffect, useRef } from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import './DetailedBusinessReportPage.css';

export default function DetailedBusinessReportPage() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        const loadingElement = document.querySelector('.dbr-pdf-loading');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
      };

      const handleError = () => {
        const fallbackElement = document.querySelector('.dbr-fallback');
        const containerElement = document.querySelector('.dbr-pdf-viewer-container');
        if (fallbackElement && containerElement) {
          fallbackElement.style.display = 'flex';
          containerElement.style.display = 'none';
        }
      };

      // Timeout fallback - if PDF doesn't load in 10 seconds, show fallback
      const timeout = setTimeout(() => {
        const loadingElement = document.querySelector('.dbr-pdf-loading');
        const fallbackElement = document.querySelector('.dbr-fallback');
        const containerElement = document.querySelector('.dbr-pdf-viewer-container');
        
        if (loadingElement && fallbackElement && containerElement) {
          loadingElement.style.display = 'none';
          fallbackElement.style.display = 'flex';
          containerElement.style.display = 'none';
        }
      }, 10000);

      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', handleError);

      return () => {
        clearTimeout(timeout);
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/entpNoteBook.pdf';
    link.download = 'entpNoteBook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open('/entpNoteBook.pdf', '_blank');
  };

  return (
    <div className="dbr-page">
      {/* Hero Section */}
      <section className="dbr-hero">
        <div className="dbr-hero-bg"></div>
        <div className="dbr-hero-content">
          <div className="dbr-hero-text">
            <h1 className="dbr-hero-title">
              <FileText className="dbr-hero-icon" />
              Detailed Business Report
            </h1>
            <p className="dbr-hero-description">
              Comprehensive business analysis and market research for OpioRx opioid detection technology
            </p>
          </div>
        </div>
      </section>

      <div className="dbr-container">
        {/* Controls Section */}
        <section className="dbr-controls">
          <div className="dbr-controls-content">
            <div className="dbr-controls-left">
              <h2 className="dbr-controls-title">Business Report Viewer</h2>
              <p className="dbr-controls-description">
                Access our comprehensive business analysis, market research, and financial projections
              </p>
            </div>
            <div className="dbr-controls-right">
              <button 
                className="dbr-btn dbr-btn-primary"
                onClick={handleDownload}
              >
                <Download className="dbr-btn-icon" />
                Download PDF
              </button>
              <button 
                className="dbr-btn dbr-btn-secondary"
                onClick={handleOpenInNewTab}
              >
                <ExternalLink className="dbr-btn-icon" />
                Open in New Tab
              </button>
            </div>
          </div>
        </section>

        {/* PDF Viewer Section */}
        <section className="dbr-viewer">
          <div className="dbr-viewer-container">
            <div className="dbr-viewer-header">
              <h3 className="dbr-viewer-title">Detailed Business Report</h3>
              <div className="dbr-viewer-actions">
                <span className="dbr-viewer-status">PDF Document</span>
              </div>
            </div>
            
            <div className="dbr-pdf-container">
              <div className="dbr-pdf-viewer-container">
                <iframe
                  ref={iframeRef}
                  src="/entpNoteBook.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                  className="dbr-pdf-viewer"
                  title="Entrepreneurship Notebook PDF"
                />
                <div className="dbr-pdf-loading">
                  <div className="dbr-loading-spinner"></div>
                  <p>Loading PDF...</p>
                </div>
              </div>
              
              <div className="dbr-fallback" style={{display: 'none'}}>
                <div className="dbr-fallback-content">
                  <FileText className="dbr-fallback-icon" />
                  <h4 className="dbr-fallback-title">PDF Viewer Not Available</h4>
                  <p className="dbr-fallback-description">
                    Your browser doesn't support PDF viewing. Please download the report to view it.
                  </p>
                  <button 
                    className="dbr-btn dbr-btn-primary"
                    onClick={handleDownload}
                  >
                    <Download className="dbr-btn-icon" />
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Information */}
        <section className="dbr-info">
          <div className="dbr-info-grid">
            <div className="dbr-info-card">
              <h4 className="dbr-info-title">Report Contents</h4>
              <ul className="dbr-info-list">
                <li>Executive Summary</li>
                <li>Market Analysis</li>
                <li>Financial Projections</li>
                <li>Risk Assessment</li>
                <li>Implementation Strategy</li>
              </ul>
            </div>
            
            <div className="dbr-info-card">
              <h4 className="dbr-info-title">Key Metrics</h4>
              <div className="dbr-metrics">
                <div className="dbr-metric">
                  <span className="dbr-metric-label">Market Size</span>
                  <span className="dbr-metric-value">$2.1B</span>
                </div>
                <div className="dbr-metric">
                  <span className="dbr-metric-label">Projected Revenue</span>
                  <span className="dbr-metric-value">$50M</span>
                </div>
                <div className="dbr-metric">
                  <span className="dbr-metric-label">ROI Timeline</span>
                  <span className="dbr-metric-value">3 Years</span>
                </div>
              </div>
            </div>
            
            <div className="dbr-info-card">
              <h4 className="dbr-info-title">Document Details</h4>
              <div className="dbr-details">
                <div className="dbr-detail">
                  <span className="dbr-detail-label">Format</span>
                  <span className="dbr-detail-value">PDF Document</span>
                </div>
                <div className="dbr-detail">
                  <span className="dbr-detail-label">Pages</span>
                  <span className="dbr-detail-value">45+ Pages</span>
                </div>
                <div className="dbr-detail">
                  <span className="dbr-detail-label">Last Updated</span>
                  <span className="dbr-detail-value">December 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
