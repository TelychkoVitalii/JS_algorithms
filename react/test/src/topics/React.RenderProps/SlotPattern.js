import React, { Component, Fragment } from 'react';

const Euro = ({ amount }) => <p>Euro: { amount * 0.86 }</p>;
const Pound = ({ amount }) => <p>Pound: { amount * 0.76 }</p>;

class Amount extends Component {
  state = {
    amount: 0
  };

  onIncrement = () => this.setState(state => ({ amount: state.amount + 1 }));
  onDecrement = () => this.setState(state => ({ amount: state.amount - 1 }));

  render() {
    return (
      <div>
        {this.props.renderOne(this.state.amount)}
        <span>US Dollar: {this.state.amount} </span>
        <button type="button" onClick={this.onIncrement}>+</button>
        <button type="button" onClick={this.onDecrement}>-</button>
        {this.props.renderTwo(this.state.amount)}
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Amount renderOne={amount => (
        <Fragment>
          <h2>My one Amount</h2>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </Fragment>
      )} renderTwo={amount => (
        <Fragment>
          <h2>My two Amount</h2>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </Fragment>
      )}/>
    )
  }
}