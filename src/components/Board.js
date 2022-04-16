import React, {useEffect} from 'react'

import {boardFunctions} from '../utils/board';

const  Board = ({
  board,
  setBoard
}) => {

  const {createBoard, convertToOneDimensional} = boardFunctions

  const changeColor = (cellValue) => {
    if (cellValue === 1) {
      return '#66ff33'
    }
    return ''
  }

  useEffect(() => {
    console.log("just render on initial render")
    const newBoard = convertToOneDimensional(createBoard('randomize'))
    setBoard(newBoard)
  }, [convertToOneDimensional, createBoard, setBoard])
  return (
    <div className="game-board">
      {
        board.map((cell, cellIndex) => {
          console.log(cell)
          return <div className="cell" 
          key={cellIndex} 
          id={cellIndex}
          style = {{backgroundColor: changeColor(cell)}}
          >
          </div>
        })
      }
    </div>
  )
}

export default Board
