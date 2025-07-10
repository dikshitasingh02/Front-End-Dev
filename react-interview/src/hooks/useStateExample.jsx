import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter_card">
      <h2>useState Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+ Increment</button>
      <button onClick={() => setCount(count - 1)}>- Decrement</button>
    </div>
  );
};

export default UseStateExample;
