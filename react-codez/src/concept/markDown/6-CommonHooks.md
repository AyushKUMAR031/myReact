Sure, here are the basic details of the commonly used React hooks:

1. **useState**
   - **Purpose:** Manages state in a functional component.
   - **Usage:**
     ```javascript
     const [state, setState] = useState(initialState);
     ```
   - **Example:**
     ```javascript
     const [count, setCount] = useState(0);
     ```

2. **useEffect**
   - **Purpose:** Performs side effects in a functional component, such as data fetching, subscriptions, or manually changing the DOM.
   - **Usage:**
     ```javascript
     useEffect(() => {
       // Your effect logic here
       return () => {
         // Cleanup logic here
       };
     }, [dependencies]);
     ```
   - **Example:**
     ```javascript
     useEffect(() => {
       document.title = `You clicked ${count} times`;
     }, [count]);
     ```

3. **useContext**
   - **Purpose:** Allows components to subscribe to React context without introducing nesting.
   - **Usage:**
     ```javascript
     const contextValue = useContext(MyContext);
     ```
   - **Example:**
     ```javascript
     const user = useContext(UserContext);
     ```

4. **useReducer**
   - **Purpose:** Manages complex state logic in a functional component using a reducer function.
   - **Usage:**
     ```javascript
     const [state, dispatch] = useReducer(reducer, initialState);
     ```
   - **Example:**
     ```javascript
     const [state, dispatch] = useReducer(reducer, { count: 0 });

     function reducer(state, action) {
       switch (action.type) {
         case 'increment':
           return { count: state.count + 1 };
         case 'decrement':
           return { count: state.count - 1 };
         default:
           throw new Error();
       }
     }
     ```

5. **useCallback**
   - **Purpose:** Returns a memoized callback function that only changes if one of the dependencies has changed.
   - **Usage:**
     ```javascript
     const memoizedCallback = useCallback(() => {
       // Your callback logic here
     }, [dependencies]);
     ```
   - **Example:**
     ```javascript
     const memoizedCallback = useCallback(() => {
       doSomething(a, b);
     }, [a, b]);
     ```

6. **useMemo**
   - **Purpose:** Returns a memoized value that only recalculates if one of the dependencies has changed.
   - **Usage:**
     ```javascript
     const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
     ```
   - **Example:**
     ```javascript
     const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
     ```

7. **useRef**
   - **Purpose:** Provides a way to access and store mutable values that persist across renders, typically used for DOM manipulation.
   - **Usage:**
     ```javascript
     const refContainer = useRef(initialValue);
     ```
   - **Example:**
     ```javascript
     const inputEl = useRef(null);
     const focusInput = () => {
       inputEl.current.focus();
     };
     ```

8. **useImperativeHandle**
   - **Purpose:** Customizes the instance value that is exposed to parent components when using `ref` with `forwardRef`.
   - **Usage:**
     ```javascript
     useImperativeHandle(ref, () => ({
       // Expose methods or properties here
     }));
     ```
   - **Example:**
     ```javascript
     useImperativeHandle(ref, () => ({
       focus: () => {
         inputRef.current.focus();
       }
     }));
     ```

9. **useLayoutEffect**
   - **Purpose:** Similar to `useEffect`, but fires synchronously after all DOM mutations. Can be used for reading layout from the DOM and synchronously re-rendering.
   - **Usage:**
     ```javascript
     useLayoutEffect(() => {
       // Your effect logic here
     }, [dependencies]);
     ```
   - **Example:**
     ```javascript
     useLayoutEffect(() => {
       // Measure the layout of an element
       const rect = elementRef.current.getBoundingClientRect();
     }, []);
     ```

10. **useDebugValue**
    - **Purpose:** Used to display a label for custom hooks in React DevTools.
    - **Usage:**
      ```javascript
      useDebugValue(value);
      ```
    - **Example:**
      ```javascript
      useDebugValue(isOnline ? 'Online' : 'Offline');
      ```

These hooks are the most commonly used in React for managing state, side effects, context, memoization, refs, and custom hooks debugging.