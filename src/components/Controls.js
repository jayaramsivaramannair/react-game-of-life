import React from 'react'
import {boardFunctions} from '../utils/board';

const Controls = ({showPatterns, setShowPatterns, board, setBoard}) => {
  const togglePatterns = () => {
    setShowPatterns(!showPatterns)
  }

  const {createBoard, nextGeneration, updateBoard, convertToOneDimensional} = boardFunctions
  const {running} = board

  const startSimulation = () => {
    if (!running) {
      setBoard(board => {
        return {...board, currentSimulationID : setInterval(
          () => {nextGeneration(board, setBoard, updateBoard)}, 300
          ),
          running: true
      }
    })
  }
  return 
 }


 const pauseSimulation = () => {
   if (running) {
      setBoard(board => {
        return {...board, running: false, currentSimulationID: ''}
      })
   } else {
     startSimulation()
   }
 }

 const randomizeBoard = () => {
   setBoard(board => {
     const grid = board.grid
     return {...board, 
      grid: createBoard('randomize'),
      oneDimensionalBoard: convertToOneDimensional(grid),
      generation: 0,
      running: false,
      currentSimulationID: ''
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
            <p>0</p>
          </div>
          <div className="option">
            Start/Pause/Resume
          </div>
          <div 
            className="option"
            onClick={randomizeBoard}
          >
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
