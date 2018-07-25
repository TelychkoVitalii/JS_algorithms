import React from 'react';
import createReactClass from 'create-react-class'; // you need to npm install create-react-class

var SetIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },
    setInterval: function() {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function() {
        this.intervals.forEach(clearInterval);
    }
};

var CreateReactClass = createReactClass({
    // 1. Need to share common functionality between components (cross-cutting concerns)
    // 2. Used only with createReactClass
    // 3. Deprecated
    mixins: [SetIntervalMixin],
    // 1. Can use only with createReactClass
    // 2. It has less weight than defaultProps
    // 3. Is used to define default values and cached when class is created
    getDefaultProps: function () {
        return {
            name: 'John'
        }
    },
    // Set initial state only for createReactClass syntax
    getInitialState: function () {
        return {
            seconds: 0,
            done: false,
            message: 'Hello'
        }
    },
    // No need to use autobinding
    handleClick: function () {
        alert(this.state.message);
    },
   render: function () {
        const {name} = this.props; // destructuring ES6
       return (
           <div>
               <h1>Hello, {name}</h1>
               <button onClick={this.handleClick}>Say Hello</button>
           </div>
       )
   }
});

// 1. Only after class declared
// 2. Can use in ES6 class variant too
// 3. It has bigger weight than getDefaultProps
CreateReactClass.defaultProps = {
    name: 'Steve'
};

export default CreateReactClass;