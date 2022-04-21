import React from 'react'
import {boardFunctions} from '../utils/board';
import {allPatterns} from '../utils/preloadedpatterns';

const Controls = ({showPatterns, setShowPatterns, board, setBoard}) => {
  const togglePatterns = () => {
    setShowPatterns(!showPatterns)
  }

  const {
    createBoard, 
    nextGeneration, 
    updateBoard, 
    convertToOneDimensional,
    createPattern,
  } = boardFunctions
  const {running} = board

  const startSimulation = () => {
    if(running) {
      return
    }
    setBoard(board => {
      return {...board, currentSimulationID : setInterval(
        () => {nextGeneration(board, setBoard, updateBoard)}, 300
        )
      }
    })
  }


 const pauseSimulation = () => {
   console.log('Button Clicked!')
   if (running) {
     clearInterval(board.currentSimulationID)
      setBoard(board => {
        return {...board, running: false, currentSimulationID: ''}
      })
   } else {
     startSimulation()
   }
 }

 const patternSelection = (e) => {
   let pattern = e.target.innerText;
   let patterns = {
     'Glider Gun': 'gliderGun',
     'Crazy Corners': 'crazyCorners',
     'Pentadecathlon': 'pentadecathlon',
     'Pulsar': 'pulsar',
     'Baby Pulsar': 'firstGenPulsar',
     'Maximum Density Still Life': 'maxDensityStillLife',
     'Load Pattern': 'gliderGunAndPulsars',
   }

   if (pattern !== 'Load Pattern') {
    const selectedPattern = createPattern(allPatterns[patterns[pattern]])
    setBoard((board) => {return {...board, grid: selectedPattern}})
   } else {
     const selectedPattern = allPatterns[patterns[pattern]]
     setBoard((board) => {return {...board, grid: selectedPattern}})
   }
 }

 const randomizeBoard = () => {
   setBoard(board => {
     return {...board, 
      grid: createBoard('randomize'),
      oneDimensionalBoard: convertToOneDimensional(board.grid),
      generation: 0,
      running: false,
      currentSimulationID: ''
    }
   })
 }

 const clearBoard = () => {
   setBoard(board => {
      return {
        grid: createBoard(0),
        oneDimensionalBoard: convertToOneDimensional(board.grid),
        generation: 0,
        running: false,
        currentSimulationID: '',
      }
   })
 }

  return (
      <div>
      {
        (!showPatterns) ?
        <div className="controls">
          <div className="display">
            Generation
            <p>{board.generation}</p>
          </div>
          <div className="option" onClick={pauseSimulation}>
            Start/Pause/Resume
          </div>
          <div 
            className="option"
            onClick={randomizeBoard}
          >
            Randomize
          </div>
          <div 
            className="option"
            onClick={clearBoard}
          >
            Clear Board
          </div>
          <div className="option" onClick={togglePatterns}>
            Patterns
          </div>
        </div>
         : 
        <div className="controls"> 
          <div className="option" onClick={(e) => patternSelection(e)}>Glider Gun</div>
          <div className="option" onClick={(e) => patternSelection(e)}>Pulsar</div>
          <div className="option" onClick={(e) => patternSelection(e)}>Crazy Corners</div>
          <div className="option" onClick={(e) => patternSelection(e)}>Pentadecathlon</div>
          <div className="option" onClick={(e) => patternSelection(e)}>Baby Pulsar</div>
          <div className="option" onClick={(e) => patternSelection(e)}>Load Pattern</div>
          <div className="option" onClick={(e) => patternSelection(e)}>Maximum Density Still Life</div>
          <div className="option" onClick={togglePatterns}>Back To Controls</div>
        </div>
      }
      </div>
  )
}

export default Controls;
