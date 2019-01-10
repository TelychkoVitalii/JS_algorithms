import React, { Component, Fragment } from 'react';

const Euro = ({ amount }) => <p>Euro: { amount * 0.86 }</p>;
const Pound = ({ amount }) => <p>Pound: { amount * 0.76 }</p>;

export default class Amount extends Component {
  state = {
    amount: 0
  };

  onIncrement = () => this.setState(state => ({ amount: state.amount + 1 }));
  onDecrement = () => this.setState(state => ({ amount: state.amount - 1 }));

  render() {
    return (
      <Fragment>
        <span>US Dollar: {this.state.amount}</span>
        <button type='button' onClick={this.onIncrement}>+</button>
        <button type='button' onClick={this.onDecrement}>-</button>
        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
      </Fragment>
    )
  }
}