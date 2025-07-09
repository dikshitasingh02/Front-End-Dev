import React,{useCallback, useState} from"react";
import Counter from "./components/Counter";
import "./App.css"
import ClassCounterComponent from "./components/class-counter-components";

const App = () => {
  const [tasks,setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = useCallback(() => {
    if(inputValue.trim()) {
      setTasks([...tasks,{ id: Date.now(), text: inputValue, isCompleted: false},]);

      setInputValue("");
    }
  },[inputValue, tasks]);

  const toggleTaskCompleteion = useCallback((taskId) => {
    setTasks(
      tasks.map((task) => task.id === taskId ? {...task, isCompleted: !task.isCompleted } : task)
    );
  },[tasks]);

  const deletetask = useCallback((taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  },[tasks]);

  return(
    <div>
      {/* <Counter initialCount={0} /> */}
      {/* <ClassCounterComponent initialCount={0} /> */}
      <div className="container">
        <div className="inputBox">
          <input type="text" placeholder="type the task"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button type="button" onClick={addTask}>Add</button>
        </div>
         {tasks.length > 0 && (
          <div className="listContainer">

          {/* not completed */}
          
          {tasks.filter((task) => !task.isCompleted).length > 0 && (
            <>
            <h3>Pending Tasks</h3>
          {tasks.filter((task) => !task.isCompleted).length === 0 ? (<p>No Pending Task</p>) : (
            <ul>{tasks.filter((task) => !task.isCompleted).map((task) => (<li key={task.id}>
              <span>{task.text}</span>
              <div className="btnGroup">
                <button type="button" onClick={() => toggleTaskCompleteion(task.id)}>{task.isCompleted ? "NC" : "C"}</button>               
                <button type="button" onClick={() => deletetask(task.id)}>D</button>
              </div>
            </li>))}</ul>
          )}
          </>
          )}

          {/* completed */}

          {tasks.filter((task) => task.isCompleted).length > 0 && (
            <>
            <h3>Completed Tasks</h3>
          {tasks.filter((task) => task.isCompleted).length === 0 ? (<p>No Task completed yet</p>) : (
            <ul>{tasks.filter((task) => task.isCompleted).map((task) => (<li key={task.id}>
              <span>{task.text}</span>
              <div className="btnGroup">
                <button type="button" onClick={() => toggleTaskCompleteion(task.id)}>{task.isCompleted ? "NC" : "C"}</button>
                <button type="button" onClick={() => deletetask(task.id)}>D</button>
              </div>
            </li>))}</ul>
          )}
          </>
          )}

          
        </div>
         )}
      </div>
    </div>
  )
}

export default App;