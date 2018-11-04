import React, {Component} from 'react';

class Counter extends Component {

    onIncrement = () => this.props.inc();

    onDecrement = () => this.props.dec();

    render() {
        const { value } = this.props;
        return (
            <div>
                <h1>Counter</h1>
                <button onClick={() => this.onIncrement.bind(this)}>+</button>
                <button onClick={() => this.onDecrement.bind(this)}>-</button>
                <div>{value}</div>
            </div>
        )
    }
}

export default Counter;