// also called “threading”

import React, { Component } from 'react';

export const PropDrilling = () => <Grandmother />

class Grandmother extends Component {
  state = {
    lastName: "Sanchez"
  };

  render() {
    return <Mother lastName={this.state.lastName} />
  }
}

const Mother = ({ lastName }) => {
  return <Child lastName={lastName} />
};

const Child = ({ lastName }) => {
  return <p>{lastName}</p>
};