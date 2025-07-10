import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  const expensiveSquare = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <div className="counter_card">
      <h2>useMemo Example</h2>
      <p>Count: {count}</p>
      <p>Square: {expensiveSquare}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseMemoExample;
