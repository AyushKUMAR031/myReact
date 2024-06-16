//Its a fundamental Hook in React. It helps in managing State.
//It returns a pair : the current State `{StateVariable}`and a function `{setStateFunction}` which helps in updating it.

import React, { useState } from 'react';

export default function UseState() {

    const [toggleState, setToggle] = useState(false);
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [Display, showDisplay] = useState([]);

    function handleToggle() {
        setToggle(!toggleState);
    }

    function handleAddValue() {
        setCount(count + 10);
    }

    function handleSubValue() {
        if (count > 0)
            setCount(count - 1);
    }

    function handleInput(event) {
        setInputValue(event.target.value);
    }

    function handleDisplay() {
        showDisplay([...Display, inputValue]);
    }

    return (
        <div>
            <button onClick={handleToggle}>Toggle Button : {toggleState.toString() === 'true' ? 'ON' : 'OFF'}</button>
            <br />
            <p>Total : {count}</p>
            <button onClick={handleAddValue}>Add Value</button>
            <button onClick={handleSubValue}>Subtract Value</button>
            <br />
            <input type="text" value={inputValue} onChange={handleInput} placeholder='Enter Your text ...' />
            <br />
            <button onClick={handleDisplay}>Display Input</button>
            <p>Message : {Display}</p>
        </div>
    )
}