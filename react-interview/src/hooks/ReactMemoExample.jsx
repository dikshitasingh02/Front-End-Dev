import React, { useState, memo } from "react";

const Child = memo(({ name }) => {
  console.log("Child rendered");
  return <h4>Hello {name}!</h4>;
});

const ReactMemoExample = () => {
  const [name, setName] = useState("React");
  const [count, setCount] = useState(0);

  return (
    <div className="counter_card">
      <h2>React.memo Example</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <Child name="React Memo" />
    </div>
  );
};

export default ReactMemoExample;
