import { Component } from "react"

class ClassCounterComponent extends Component {
    // Initialize a state

    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
        };
    }

    increment = () => {
        this.setState(prevState => ({count : prevState.count + 1 }))
    }

    decrement = () => {
        this.setState(prevState => ({count : prevState.count - 1 }))
    }

    render() {
        return <div className="counter_card">
        <h1>Counter : {this.state.count}</h1>
        <div className="btn_group">
            <button type="button" onClick={this.decrement}>-</button>
            <button type="button" onClick={this.increment}>+</button>
            </div>
            </div>
    }
}

export default ClassCounterComponent;