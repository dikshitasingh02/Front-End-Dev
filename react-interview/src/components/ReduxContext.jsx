import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/counterSlice";

const ReduxContext = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <p>Counter : {count}</p>
            <button type="button" onClick={() => dispatch(increment())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
            <button type="button" onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default ReduxContext;