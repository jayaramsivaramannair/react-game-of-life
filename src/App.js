import React, {useState} from 'react';
import Controls from './components/Controls'
import Board from './components/Board'

function App() {
  const [showPatterns, setShowPatterns] = useState(false)
  const [board, setBoard] = useState([])
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className="container">
        <Board 
          board = {board}
          setBoard = {setBoard}
        />
        <Controls
          showPatterns = {showPatterns}
          setShowPatterns = {setShowPatterns}
        />
      </div>
    </div>
  );
}

export default App;
