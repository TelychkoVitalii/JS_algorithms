import React from 'react';

// These methods called in following order when instance of component created and inserted in DOM
// 1. constructor
// 2. static getDerivedStateFromProps()
// 3. render()
// 4. componentDidMount()
// 5. http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// 6. rename-unsafe-lifecycles codemod - to automatically update for new versions

class ComponentES6 extends React.Component {
    // 1. Called before component is mounted
    // 2. Need only for initialize state and bind methods
    // 3. Do not call setState here!
    constructor(props) {
        super(props);
        this.state = {
            message: 'My Component',
            done: false
        }
    }

    // 1. Invoked right before calling the render method(on init and each update)
    // 2. Update its internal state as the result of changes in props
    // 3. This method is fired on every render, regardless of the cause
    // 4. componentWillReceiveProps deprecated. Goal: update state in response to a change in props
    static getDerivedStateFromProps(props, state) {
        return state || props;
    }

    // 1. Invoked before rendering when new props or state are being received
    // 2. Returning false does not prevent child components from re-rendering when their state changes.
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true || false;
    }

    // Invoked immediately after a component is mounted
    componentDidMount() {
        // asynchronous
        this.setState({message: 'Updated Component'});
    }

    // 1. Invoked right before the most recently rendered output is committed to e.g. the DOM
    // 2. Sitting on update phase after render and before componentDidUpdate
    // 3. As a third param into componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return prevState || prevProps;
    }

    // 1. Invoked immediately after updating occurs (e.g setState)
    // 2. componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
    componentDidUpdate(prevProps, prevState, snapshot) {
        // need condition otherwise infinite loop
        if(prevState.done !== this.state.done) {
            this.setState({done: true})
        }
    }

    // 1. Invoked immediately before a component is unmounted and destroyed.
    // 2. Should not call setState() because will never be re-rendered
    componentWillUnmount() {}

    // Catch JavaScript errors anywhere in their child component tree
    static componentDidCatch(error, info) {}

    forceUpdateHandler = () => {
        // Will cause render() to be called on the component, skipping shouldComponentUpdate()
        this.forceUpdate();
        console.log('forceUpdate')
    };

    // 1. The only mandatory method
    // 2. Should be pure function and does not modify component state
    // 3. Need JSX
    render() {
        return (
            <div>
                <h1>Hello, {!this.state.done ? <span>Vitalii</span> : null}!</h1>
                {this.state.message}
                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <h4>Random Number : { Math.random() }</h4>
            </div>
        )
    }
}

export default ComponentES6;