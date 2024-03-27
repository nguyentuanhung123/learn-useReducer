import { useReducer } from 'react'

const initialState = {
  count: 0,
  numOperation: 0
}

const counterReducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      // return state + 1;
      return {
        count: state.count + 1,
        numOperation: state.numOperation + 1
      }
    case "DECREMENT":
      // return state - 1;
      return {
        count: state.count - 1,
        numOperation: state.numOperation + 1
      }
  }
}

const App = () => {

  //const [count, dispatch] = useReducer(counterReducer, 0);
  const [operations, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {/* <h1>Count: {count}</h1> */}
      <h1>Count: {operations.count}</h1>
      <h1>Number of operations: {operations.numOperation}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </div>
  )
}

export default App
