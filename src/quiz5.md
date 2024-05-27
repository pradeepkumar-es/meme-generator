1. What is a "side effect" in React? What are some examples?
ans: anything that is out of control of some effect by react. api, local storage, syncing two state
ans: - Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?
ans: anything that is under the envirnoment of react, state, props etc
ans:- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
ans: react run useEffect function after the JSX is get displayed, when dependecy has value is not changed
ans:- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
ans: dependencies array is the 2nd paramenter passed in useEffect hook to determine when to run useEffect function 
ans: - Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function