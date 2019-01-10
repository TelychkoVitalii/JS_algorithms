import React, { Component, Children, cloneElement } from 'react';

export default class App extends Component {
  render() {
    return (
      <h1>{Children.map(this.props.children, child => {
        return cloneElement(child, { name: 'Yes!!!' });
      }, {})}</h1>
    )
  }
}