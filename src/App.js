import React from 'react';
import './App.css';
import Timer from './component/Timer'
// import Clock from './component/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        {/* <Clock /> */}
      </header>
    </div>
  );
}

export default App;
