import React from"react";
import Counter from "./components/Counter";
import "./App.css"
import ClassCounterComponent from "./components/class-counter-components";

const App = () => {
  return(
    <div>
      {/* <Counter initialCount={0} /> */}
      <ClassCounterComponent initialCount={0} />
    </div>
  )
}

export default App;