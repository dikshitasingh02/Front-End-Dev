import React, { useContext, useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeToggler = () => {
  const isDark = useContext(ThemeContext);
  return <p>Current Theme: {isDark ? "Dark" : "Light"}</p>;
};

const UseContextExample = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={isDark}>
      <div className="counter_card">
        <h2>useContext Example</h2>
        <ThemeToggler />
        <button onClick={() => setIsDark((prev) => !prev)}>Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContextExample;
