import React, {useState} from 'react';
import Controls from './components/Controls'

function App() {
  const [showPatterns, setShowPatterns] = useState(false)
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Controls
        showPatterns = {showPatterns}
        setShowPatterns = {setShowPatterns}
      />
    </div>
  );
}

export default App;
