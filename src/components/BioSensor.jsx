import { useState } from 'react'
import './BioSensor.css'

const BioSensor = () => {
  const [linesActivated, setLinesActivated] = useState(false)
  const [activatedNode, setActivatedNode] = useState(null)
  const [mainSensorActivated, setMainSensorActivated] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [cardContent, setCardContent] = useState('')
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 })
  const [nodeColor, setNodeColor] = useState('')

  const handleMainSensorClick = () => {
    // Reset any previously activated sensors first
    setLinesActivated(false)
    setActivatedNode(null)
    setMainSensorActivated(false)
    setShowCard(false)
    setCardContent('')
    setNodeColor('')
    
    // Small delay to allow reset to complete, then start new sequence
    setTimeout(() => {
      setLinesActivated(true)
      setMainSensorActivated(true) // Activate main sensor
      
      // After line animation ends (2s), randomly activate a node
      // Lines stay in faint blue state until manual reset
      setTimeout(() => {
        const randomNode = Math.floor(Math.random() * 5) + 1 // 1-5
        setActivatedNode(randomNode)
        // Both lines, main sensor, and node stay activated until manual reset
      }, 2000) // Wait for line animation to complete
    }, 100) // Small delay to ensure reset completes
  }

  const handleNodeClick = (nodeNumber, event) => {
    if (activatedNode === nodeNumber && !showCard) {
      // Get click position relative to the SVG
      const svgRect = event.currentTarget.closest('.biosensor-svg').getBoundingClientRect()
      const clickX = event.clientX - svgRect.left
      const clickY = event.clientY - svgRect.top
      
      // Define what each node represents and their colors
      const nodeData = {
        1: { content: 'Presence of Opioid Metabolites', color: '#e74c3c' },
        2: { content: 'High Cortisol Levels Detected', color: '#9b59b6' },
        3: { content: 'Glucose Concentration Elevated', color: '#27ae60' },
        4: { content: 'Protein Biomarkers Found', color: '#e91e63' },
        5: { content: 'Electrolyte Imbalance Detected', color: '#f39c12' }
      }
      
      setCardPosition({ x: clickX, y: clickY })
      setCardContent(nodeData[nodeNumber].content)
      setNodeColor(nodeData[nodeNumber].color)
      setShowCard(true)
    }
  }


  return (
    <div className="bio-sensor-container">
            <svg 
              width="560" 
              height="400" 
              viewBox="0 0 420 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className={`biosensor-svg ${linesActivated ? 'lines-activated' : ''}`}
            >
        <rect className="sensor-background" width="420" height="300" fill="#D9D9D9"/>
        <rect className="main-horizontal-line" x="70" y="148" width="140" height="3" fill="black"/>
        <rect className="vertical-line" x="210" y="248" width="197" height="3" transform="rotate(-90 210 248)" fill="black"/>
        <rect className="data-line line-1" x="211" y="51" width="140" height="3" fill="black"/>
        <rect className="data-line line-2" x="210" y="100" width="140" height="3" fill="black"/>
        <rect className="data-line line-3" x="210" y="148" width="140" height="3" fill="black"/>
        <rect className="data-line line-4" x="210" y="197" width="140" height="3" fill="black"/>
        <rect className="data-line line-5" x="211" y="245" width="140" height="3" fill="black"/>
        <circle 
          className={`main-sensor ${mainSensorActivated ? 'activated' : ''}`} 
          cx="70.5" 
          cy="149.5" 
          r="9" 
          fill="black" 
          stroke="black"
          onClick={handleMainSensorClick}
        />
        <circle 
          className={`sensor-node node-1 ${activatedNode === 1 ? 'activated' : ''}`} 
          cx="349.5" 
          cy="100.5" 
          r="9.5" 
          fill="black"
          onClick={(e) => handleNodeClick(1, e)}
          style={{ cursor: activatedNode === 1 && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-2 ${activatedNode === 2 ? 'activated' : ''}`} 
          cx="349.5" 
          cy="51.5" 
          r="9.5" 
          fill="black"
          onClick={(e) => handleNodeClick(2, e)}
          style={{ cursor: activatedNode === 2 && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-3 ${activatedNode === 3 ? 'activated' : ''}`} 
          cx="349.5" 
          cy="247.5" 
          r="9.5" 
          fill="black"
          onClick={(e) => handleNodeClick(3, e)}
          style={{ cursor: activatedNode === 3 && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-4 ${activatedNode === 4 ? 'activated' : ''}`} 
          cx="349.5" 
          cy="149.5" 
          r="9.5" 
          fill="black"
          onClick={(e) => handleNodeClick(4, e)}
          style={{ cursor: activatedNode === 4 && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-5 ${activatedNode === 5 ? 'activated' : ''}`} 
          cx="349.5" 
          cy="198.5" 
          r="9.5" 
          fill="black"
          onClick={(e) => handleNodeClick(5, e)}
          style={{ cursor: activatedNode === 5 && !showCard ? 'pointer' : 'default' }}
        />
      </svg>
      
      {showCard && (
        <div 
          className="detection-card"
          style={{
            '--click-x': `${cardPosition.x}px`,
            '--click-y': `${cardPosition.y}px`,
            '--node-color': nodeColor
          }}
        >
          <div className="card-content">
            <h3>Saliva Analysis Result</h3>
            <p>{cardContent}</p>
            <button className="card-close-btn" onClick={() => setShowCard(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BioSensor
