import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef();

  const handleFocus = () => inputRef.current.focus();

  return (
    <div className="counter_card">
      <h2>useRef Example</h2>
      <input type="text" ref={inputRef} placeholder="Focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRefExample;
