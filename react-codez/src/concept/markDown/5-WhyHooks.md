**Hook in need**



```
export default function Counter(){
    let count = 5;

    function addValue(){
        console.log("clicked",count);
        count++;
    }
    function subValue(){
        console.log("clicked",count);
        count--;
    }
    return(
        <div>
            <h1>Counter</h1>
            <h3>Count: {count}</h3>
            <button onClick={addValue}>Add Value {count}</button>
            <button onClick={subValue}>Subtract Value {count}</button>
            <p>Result: {count}</p>
        </div>
    )
}
```
- with this code the value updation of count variable is working 
- but not  updating in UI
- here for UI updation React takes the Control

```The part of using reference which were used to update each element in front in now done by React with Hooks.```
- for updating data all across the web page.

```React is a declarative library, which means that you tell React what you want to happen, and React does it.```

- With this React gives us Special method called HOOKs for data updation and more.