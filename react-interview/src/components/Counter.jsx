import { useState } from "react";

const Counter = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);

    // handle increment
    const increment = () => {
        setCount(count + 1);
    }

    // handle decrement
    const decrement = () => {
        setCount(count - 1);
    }

    return (<div className="counter_card">
        <h1>Counter : {count}</h1>
        <div className="btn_group">
            <button type="button" onClick={decrement}>-</button>
            <button type="button" onClick={increment}>+</button>
            </div>
            </div>);
};

export default Counter;