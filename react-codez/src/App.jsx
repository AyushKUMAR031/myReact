import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Accordian from './components/accordian/acc';
import RandomColor from './components/random-color/color';

function App() {
  return (
    <div className="App">
      <Accordian />

      <RandomColor />
    </div>
  );
}

export default App;
