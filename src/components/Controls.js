import React from 'react'

const Controls = ({showPatterns, setShowPatterns}) => {
  const togglePatterns = () => {
    setShowPatterns(!showPatterns)
  }
  return (
      <div>
      {
        (!showPatterns) ?
        <div className="controls">
          <div className="display">
            Generation
            <p>0</p>
          </div>
          <div className="option">
            Start/Pause/Resume
          </div>
          <div className="option">
            Randomize
          </div>
          <div className="option">
            Clear Board
          </div>
          <div className="option" onClick={togglePatterns}>
            Patterns
          </div>
        </div>
         : 
        <div className="controls"> 
          <div className="option">Glider Gun</div>
          <div className="option">Pulsar</div>
          <div className="option">Crazy Corners</div>
          <div className="option">Pentadecathlon</div>
          <div className="option">Baby Pulsar</div>
          <div className="option">Load Pattern</div>
          <div className="option">Maximum Density Still Life</div>
          <div className="option" onClick={togglePatterns}>Back To Controls</div>
        </div>
      }
      </div>
  )
}

export default Controls;
