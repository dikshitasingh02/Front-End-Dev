import React,{useCallback, useState, useEffect} from"react";
import Counter from "./components/Counter";
import "./App.css"
import ClassCounterComponent from "./components/class-counter-components";
import UseStateExample from "./hooks/UseStateExample";
import UseEffectExample from "./hooks/UseEffectExample";
import UseRefExample from "./hooks/UseRefExample";
import UseReducerExample from "./hooks/UseReducerExample";
import UseContextExample from "./hooks/UseContextExample";
import UseCallbackExample from "./hooks/UseCallbackExample";
import ReactMemoExample from "./hooks/ReactMemoExample";
import UseMemoExample from "./hooks/UseMemoExample";

// const App = () => {
  // const [tasks,setTasks] = useState([]);
  // const [inputValue, setInputValue] = useState("");

  // const addTask = useCallback(() => {
  //   if(inputValue.trim()) {
  //     setTasks([...tasks,{ id: Date.now(), text: inputValue, isCompleted: false},]);

  //     setInputValue("");
  //   }
  // },[inputValue, tasks]);

  // const toggleTaskCompleteion = useCallback((taskId) => {
  //   setTasks(
  //     tasks.map((task) => task.id === taskId ? {...task, isCompleted: !task.isCompleted } : task)
  //   );
  // },[tasks]);

  // const deletetask = useCallback((taskId) => {
  //   setTasks(tasks.filter(task => task.id !== taskId))
  // },[tasks]);

  // return(
    // <div>
    //   {/* <Counter initialCount={0} /> */}
    //   {/* <ClassCounterComponent initialCount={0} /> */}
    //   <div className="container">
    //     <div className="inputBox">
    //       <input type="text" placeholder="type the task"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    //       <button type="button" onClick={addTask}>Add</button>
    //     </div>
    //      {tasks.length > 0 && (
    //       <div className="listContainer">

    //       {/* not completed */}
          
    //       {tasks.filter((task) => !task.isCompleted).length > 0 && (
    //         <>
    //         <h3>Pending Tasks</h3>
    //       {tasks.filter((task) => !task.isCompleted).length === 0 ? (<p>No Pending Task</p>) : (
    //         <ul>{tasks.filter((task) => !task.isCompleted).map((task) => (<li key={task.id}>
    //           <span>{task.text}</span>
    //           <div className="btnGroup">
    //             <button type="button" onClick={() => toggleTaskCompleteion(task.id)}>{task.isCompleted ? "NC" : "C"}</button>               
    //             <button type="button" onClick={() => deletetask(task.id)}>D</button>
    //           </div>
    //         </li>))}</ul>
    //       )}
    //       </>
    //       )}

    //       {/* completed */}

    //       {tasks.filter((task) => task.isCompleted).length > 0 && (
    //         <>
    //         <h3>Completed Tasks</h3>
    //       {tasks.filter((task) => task.isCompleted).length === 0 ? (<p>No Task completed yet</p>) : (
    //         <ul>{tasks.filter((task) => task.isCompleted).map((task) => (<li key={task.id}>
    //           <span>{task.text}</span>
    //           <div className="btnGroup">
    //             <button type="button" onClick={() => toggleTaskCompleteion(task.id)}>{task.isCompleted ? "NC" : "C"}</button>
    //             <button type="button" onClick={() => deletetask(task.id)}>D</button>
    //           </div>
    //         </li>))}</ul>
    //       )}
    //       </>
    //       )}

          
    //     </div>
    //      )}
    //   </div>
    // </div>

//     <>
// <h1 style={{ textAlign: "center", marginBottom: "20px" }}>✨ React Hooks Playground</h1>
//      <div className="hook-wrapper">
      
//       <UseStateExample />
//       <UseEffectExample />
//       <UseRefExample />
//       <UseReducerExample />
//       <UseContextExample />
//       <UseCallbackExample />
//       <ReactMemoExample />
//       <UseMemoExample />
//     </div>
//     </>
//   )
// }

// export default App;







// ✅ Functional Component with Hooks
function FunctionalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🔵 Functional: Mounted or Updated');
    return () => {
      console.log('🟡 Functional: Cleanup before next update or unmount');
    };
  }, [count]);

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Functional Component</h2>
      <p className="text-lg mb-3">Count: <span className="font-semibold">{count}</span></p>
      <button
        onClick={() => setCount(count + 1)}
        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition"
      >
        Increment
      </button>
    </div>
  );
}

// ✅ Class Component
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('🔷 Class: Constructor');
  }

  static getDerivedStateFromProps() {
    console.log('🔷 Class: getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('🟢 Class: componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('🟠 Class: shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('🟣 Class: getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('🔴 Class: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('⚫ Class: componentWillUnmount');
  }

  render() {
    return (
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-green-600 mb-3">Class Component</h2>
        <p className="text-lg mb-3">Count: <span className="font-semibold">{this.state.count}</span></p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition"
        >
          Increment
        </button>
      </div>
    );
  }
}

// ✅ Main App Component
export default function App() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10 space-y-8">
      <button
        onClick={() => setShowComponents(!showComponents)}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-full font-bold shadow-md transition"
      >
        Toggle Components
      </button>

      {showComponents && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FunctionalComponent />
          <ClassComponent />
        </div>
      )}
    </div>
  );
}
