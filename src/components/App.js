import React from 'react';
import './App.css';

import Simulator from './sim/Simulator';
import Calculator from './calc/Calculator';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Sunrise Battle Simulator
      </header>
      <div className="body">
        <Simulator/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
