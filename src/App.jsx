import { useReducer } from 'react'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

const initialState = {
  count: 0,
  numOperation: 0
}

const counterReducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT_BY_TEN":
      // return state + 1;
      return {
        count: state.count + 10,
        numOperation: state.numOperation + 1
      }
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
    <>
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
        <button onClick={() => dispatch({ type: "INCREMENT_BY_TEN" })}>
          + 10
        </button>
      </div>
      <Example1 />
      <Example2 />
      <Example3 />
    </>
  )
}

export default App
