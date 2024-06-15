import { useState } from "react";

// with this default code the value updation of count variable is working 
// but not in UI
// here for UI updation React takes the Control 
// for updating data all across the web page.

// React is a declarative library, which means that you tell React what you want to happen, and React does it.
//With this React gives us Special method called HOOKs for data updation and more.

// here we are using useState hook for data updation
export default function Counter() {
    //let count = 5;
    let [count, setcount] = useState(5);// useState is a Hook that lets you add state to function components

    function addValue() {
        //count++;
        setcount(++count);
        console.log("clicked", count);
    }
    function subValue() {
        //count--;
        if (count > 0) setcount(--count);
        console.log("clicked", count);
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count: {count}</h3>
            <button onClick={addValue}>Add Value {count}</button>
            <button onClick={subValue}>Subtract Value {count}</button>
            <p>Result: {count}</p>
        </div>
    )
}
