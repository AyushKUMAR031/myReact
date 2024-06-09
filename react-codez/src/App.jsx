import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Accordian from './components/accordian/acc';
import RandomColor from './components/random-color/color';
import StarRating from './components/star-rating/star';

function App() {
  return (
    <div className="App">

      {/*component of accordian*/}
      <Accordian />

      {/*component of random color*/}
      <RandomColor />

      {/*component of star rating*/}
      <StarRating />

    </div>
  );
}

export default App;
