import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    if (input.trim()) {
      setTasks((prev) => [...prev, input]);
      setInput("");
    }
  }, [input]);

  return (
    <div className="container">
      <h2>useCallback Example</h2>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="listContainer">
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCallbackExample;
