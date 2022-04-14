const createBoard = (cells) => {
  let config = []
  for (let i = 0; i < 30; i++) {
    //Create the Board with 30 Rows
    config.push([])
    for (let j = 0; j < 50; j++) {
      if (cells === 'randomize') {
        // Populate each row with 50 cells of either 1 or 0
        config[i].push(Math.random() < 0.5 ? 0 : 1);
      } else {
        config[i].push(cells)
      }
    }
  }

  return config;
}

//Based on pre-loaded patterns, create a board
const createPattern = (patternArray) => {
  //Create a Board with dead cells
  let pattern = createBoard(0)
  for(let i = 0; i < patternArray.length; i++) {
    let row = patternArray[i][0]
    let column = patternArray[i][1]
    //Based on the identifying cell numbers in the pattern, make the specific cells alive
    pattern[row][column] = 1;
  }

  return pattern;
}

//Based on Conway's Rules for the Game of Life, Update the Board
const updateBoard = (currentBoard) => {
  //Create a new array for the updated board
  let updatedBoard = [];
  currentBoard.forEach((row, rowIndex) => {
    //For each row in the current board, create a new row in the updated board
    updatedBoard.push([])
    row.forEach((col, colIndex) => {
      //Get all the neighbors surrounding the current cell
      let neighbors = countCellNeighbors(rowIndex, colIndex, currentBoard)
      let life = 1, death = 0, status;

      //Apply the rules for Conway's game of life
      //A cell with anywhere between two to three neighbors will live on if it is currently alive
      // If the cell is alive
      if (col === 1) {
        status = neighbors >= 2 && neighbors <= 3 ? life : death;
      // If the cell is dead
      // A dead cell with exactly three neighbors will become alive
      } else {
        status = neighbors === 3 ? life : death;
      }

      //Update the cells in each rows based on the outcome of foregoing rules
      updatedBoard[rowIndex].push(status)
    })
  });

  return updatedBoard
}

const countCellNeighbors = (rowIndex, colIndex, currentBoard) => {

  //Function to check if the cell exists or not
  const cellAlive = (rowIndex, colIndex) => {
    if (currentBoard[rowIndex] !== undefined) {
      return currentBoard[rowIndex][colIndex]
    }
  }

  //Find the number of active neighbors for the current cell
  let neighbors = 0
  //[-1, -1] => Top Left
  //[-1,  0] => Top Center
  //[-1, +1] => Top Right

  //[0, -1] => Left on current row
  //[0, 0] => Current Cell
  //[0, +1] => Right on current row

  //[+1, -1] => Bottom Left
  //[+1, 0] => Bottom Middle
  //[+1, +1] => Bottom Right

  if (cellAlive(rowIndex - 1, colIndex - 1)) {
    neighbors++
  }

  if (cellAlive(rowIndex - 1, colIndex)) {
    neighbors++
  }

  if (cellAlive(rowIndex - 1, colIndex + 1)) {
    neighbors++
  }

  if (cellAlive(rowIndex, colIndex - 1)) {
    neighbors++
  }

  if (cellAlive(rowIndex, colIndex + 1)) {
    neighbors++
  }

  if (cellAlive(rowIndex + 1, colIndex - 1)) {
    neighbors++
  }

  if (cellAlive(rowIndex + 1, colIndex)) {
    neighbors++
  }

  if (cellAlive(rowIndex + 1, colIndex + 1)) {
    neighbors++
  }

  return neighbors;
}



export const boardFunctions = {
  createBoard,
  createPattern,
  updateBoard,
}