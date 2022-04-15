import React, {useEffect} from 'react'

import {boardFunctions} from '../utils/board';

const  Board = ({
  board,
  setBoard
}) => {

  const {createBoard, convertToOneDimensional} = boardFunctions

  useEffect(() => {
    console.log("just render on initial render")
    const newBoard = convertToOneDimensional(createBoard('randomize'))
    setBoard(newBoard)
  }, [convertToOneDimensional, createBoard, setBoard])
  return (
    <div className="game-board">
      {
        board.map((cell, cellIndex) => {
          return <div className="cell" key={cellIndex}></div>
        })
      }
    </div>
  )
}

export default Board
