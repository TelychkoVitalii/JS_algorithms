// https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

import React, { Component } from 'react';

function HOC(WrappedComponent, ...props) {
  return class Enhancer extends Component {
    render() {
      return <WrappedComponent data={props} />;
    }
  }
}

function Example(props) {
  return <h1>{props.data} Example</h1>;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

HOC.displayName = `HOC(${getDisplayName(Example)})`;
export default HOC(Example, 'fuck');