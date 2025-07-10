import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="counter_card">
      <h2>useReducer Example</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
    </div>
  );
};

export default UseReducerExample;
