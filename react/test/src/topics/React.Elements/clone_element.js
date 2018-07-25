import React, { Component } from 'react';
import CreateReactClass from '../React.Component/create_react_class';

class CloneElement extends Component {
    render() {
        const newClass = React.cloneElement(<CreateReactClass />); // cloning
        console.log(React.isValidElement(<CreateReactClass />)); // boolean
        console.log(React.Children.count(this.props.children)); // quantity of children (this.props.children)
        console.log(React.Children); // map, foreach, toArray, only
        return <div>{newClass}</div>
    }
}

export default CloneElement;