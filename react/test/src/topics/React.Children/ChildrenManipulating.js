// What they are essentially telling us is that props.children can be any type, such as an array, a function, an object, etc.
// Since you can pass anything, you can never know for sure.
import React, { Component, Fragment, Children } from 'react';

class IgnoreFirstChild extends Component {
  state = {
    name: 'Jimmy'
  };

  render() {
    return (
      <Fragment>
        {Children.count(this.props.children)}
        <pre>{Children.toArray(this.props.children)}</pre>
        {/*<pre>{Children.only(this.props.children)}</pre>*/}
        {Children.map(this.props.children, (child, i) => {
          if(i < 1) return;
          return child;
        }, {})}
      </Fragment>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <IgnoreFirstChild>
        <h1>First</h1>
        <h1>Second</h1>
      </IgnoreFirstChild>
    )
  }
}