import React, { Component } from 'react';

class CreateElement extends Component {
    render() {
        return React.createElement('h2', null, `Hello, ${this.props.toWhat}`);
    }
}

export default CreateElement;