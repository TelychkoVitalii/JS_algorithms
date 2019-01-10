import React, { Component } from 'react';

class FunctionAsChild extends Component {
  state = {
    name: 'Jimmy'
  };

  render() {
    return <div>{this.props.children(this.state.name)}</div>
  }
}

export default class App extends Component {
  render() {
    return (
      <FunctionAsChild>
        {name => <h1>Hello, World! ...{name}</h1>}
      </FunctionAsChild>
    )
  }
}