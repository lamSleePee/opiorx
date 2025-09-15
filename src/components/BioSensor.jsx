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
  const [selectedOpioids, setSelectedOpioids] = useState([])

  // Opioid types and their corresponding node mappings
  const opioidTypes = {
    codeine: { node: 1, name: 'Codeine' },
    oxycodone: { node: 2, name: 'Oxycodone' },
    tramadol: { node: 3, name: 'Tramadol' },
    fentanyl: { node: 4, name: 'Fentanyl' },
    methadone: { node: 5, name: 'Methadone' }
  }

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
      
      // After line animation ends (2s), activate nodes based on selection
      setTimeout(() => {
        let nodesToActivate
        if (selectedOpioids.length > 0) {
          // If opioids are selected, activate their corresponding nodes
          nodesToActivate = selectedOpioids.map(opioid => opioidTypes[opioid].node)
        } else {
          // If no opioids are selected, randomly activate a node
          nodesToActivate = [Math.floor(Math.random() * 5) + 1] // 1-5
        }
        setActivatedNode(nodesToActivate)
        // Both lines, main sensor, and nodes stay activated until manual reset
      }, 2000) // Wait for line animation to complete
    }, 100) // Small delay to ensure reset completes
  }

  const handleOpioidToggle = (opioidKey) => {
    if (selectedOpioids.includes(opioidKey)) {
      // If clicking a selected opioid, deselect it
      setSelectedOpioids(selectedOpioids.filter(opioid => opioid !== opioidKey))
    } else {
      // Add the new opioid to selection
      setSelectedOpioids([...selectedOpioids, opioidKey])
    }
  }

  const handleNodeClick = (nodeNumber, event) => {
    if (Array.isArray(activatedNode) ? activatedNode.includes(nodeNumber) : activatedNode === nodeNumber) {
      if (!showCard) {
      // Get click position relative to the SVG
      const svgRect = event.currentTarget.closest('.biosensor-svg').getBoundingClientRect()
      const clickX = event.clientX - svgRect.left
      const clickY = event.clientY - svgRect.top
      
      // Define what each node represents and their colors based on opioid types
      const nodeData = {
        1: { content: 'Codeine Metabolites Detected', color: '#e74c3c' },
        2: { content: 'Oxycodone Metabolites Detected', color: '#9b59b6' },
        3: { content: 'Tramadol Metabolites Detected', color: '#27ae60' },
        4: { content: 'Fentanyl Metabolites Detected', color: '#e91e63' },
        5: { content: 'Methadone Metabolites Detected', color: '#f39c12' }
      }
      
        setCardPosition({ x: clickX, y: clickY })
        setCardContent(nodeData[nodeNumber].content)
        setNodeColor(nodeData[nodeNumber].color)
        setShowCard(true)
      }
    }
  }


  return (
    <div className="bio-sensor-container">
      {/* Opioid Selection Buttons */}
      <div className="opioid-selection">
        <h3>Select Opioid Type for Detection</h3>
        <div className="opioid-buttons">
          {Object.entries(opioidTypes).map(([key, opioid]) => (
            <button
              key={key}
              className={`opioid-button ${selectedOpioids.includes(key) ? 'selected' : ''}`}
              onClick={() => handleOpioidToggle(key)}
            >
              {opioid.name}
            </button>
          ))}
        </div>
        {selectedOpioids.length > 0 && (
          <p className="selection-info">
            Selected: <strong>{selectedOpioids.map(opioid => opioidTypes[opioid].name).join(', ')}</strong> 
            {' - Click the main sensor to detect these opioids'}
          </p>
        )}
        {selectedOpioids.length === 0 && (
          <p className="selection-info">
            No opioids selected - Click the main sensor for random detection
          </p>
        )}
      </div>

      <svg 
        width="560" 
        height="400" 
        viewBox="0 0 420 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`biosensor-svg ${linesActivated ? 'lines-activated' : ''}`}
      >
        <rect className="sensor-background" width="420" height="300"/>
        <rect className="main-horizontal-line" x="70" y="148" width="140" height="3"/>
        <rect className="vertical-line" x="210" y="248" width="197" height="3" transform="rotate(-90 210 248)"/>
        <rect className="data-line line-1" x="211" y="51" width="140" height="3"/>
        <rect className="data-line line-2" x="210" y="100" width="140" height="3"/>
        <rect className="data-line line-3" x="210" y="148" width="140" height="3"/>
        <rect className="data-line line-4" x="210" y="197" width="140" height="3"/>
        <rect className="data-line line-5" x="211" y="245" width="140" height="3"/>
        <circle 
          className={`main-sensor ${mainSensorActivated ? 'activated' : ''}`} 
          cx="70.5" 
          cy="149.5" 
          r="9" 
          onClick={handleMainSensorClick}
        />
        <circle 
          className={`sensor-node node-1 ${Array.isArray(activatedNode) ? (activatedNode.includes(1) ? 'activated' : '') : (activatedNode === 1 ? 'activated' : '')}`} 
          cx="349.5" 
          cy="100.5" 
          r="9.5" 
          onClick={(e) => handleNodeClick(1, e)}
          style={{ cursor: (Array.isArray(activatedNode) ? activatedNode.includes(1) : activatedNode === 1) && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-2 ${Array.isArray(activatedNode) ? (activatedNode.includes(2) ? 'activated' : '') : (activatedNode === 2 ? 'activated' : '')}`} 
          cx="349.5" 
          cy="51.5" 
          r="9.5" 
          onClick={(e) => handleNodeClick(2, e)}
          style={{ cursor: (Array.isArray(activatedNode) ? activatedNode.includes(2) : activatedNode === 2) && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-3 ${Array.isArray(activatedNode) ? (activatedNode.includes(3) ? 'activated' : '') : (activatedNode === 3 ? 'activated' : '')}`} 
          cx="349.5" 
          cy="247.5" 
          r="9.5" 
          onClick={(e) => handleNodeClick(3, e)}
          style={{ cursor: (Array.isArray(activatedNode) ? activatedNode.includes(3) : activatedNode === 3) && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-4 ${Array.isArray(activatedNode) ? (activatedNode.includes(4) ? 'activated' : '') : (activatedNode === 4 ? 'activated' : '')}`} 
          cx="349.5" 
          cy="149.5" 
          r="9.5" 
          onClick={(e) => handleNodeClick(4, e)}
          style={{ cursor: (Array.isArray(activatedNode) ? activatedNode.includes(4) : activatedNode === 4) && !showCard ? 'pointer' : 'default' }}
        />
        <circle 
          className={`sensor-node node-5 ${Array.isArray(activatedNode) ? (activatedNode.includes(5) ? 'activated' : '') : (activatedNode === 5 ? 'activated' : '')}`} 
          cx="349.5" 
          cy="198.5" 
          r="9.5" 
          onClick={(e) => handleNodeClick(5, e)}
          style={{ cursor: (Array.isArray(activatedNode) ? activatedNode.includes(5) : activatedNode === 5) && !showCard ? 'pointer' : 'default' }}
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
