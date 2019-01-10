import React, { Component, Fragment } from 'react';

export default class App extends Component {
  state = {
    amount: 0
  };

  onIncrement = () => this.setState(state => ({ amount: state.amount + 1 }));
  onDecrement = () => this.setState(state => ({ amount: state.amount - 1 }));

  render() {
    return (
      <Fragment>
        <Amount
          amount={this.state.amount}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement} />
        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
      </Fragment>
    )
  }
}

const Euro = ({ amount }) => <p>Euro: { amount * 0.86 }</p>;
const Pound = ({ amount }) => <p>Pound: { amount * 0.76 }</p>;
const Amount = ({ amount, onIncrement, onDecrement }) => (
  <Fragment>
    <span>US Dollar: {amount} </span>
    <button type="button" onClick={onIncrement}>+</button>
    <button type="button" onClick={onDecrement}>-</button>
  </Fragment>
);