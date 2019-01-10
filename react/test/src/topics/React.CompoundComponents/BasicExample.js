import React, { Component, Children, Fragment, cloneElement } from 'react';

export default class Demo extends Component {
  render() {
    return (
        <Stepper stage={<One boo={12}/>}>
          <Progress />
          {/*<Progress />*/}
        </Stepper>
    )
  }
}

class Stepper extends Component {
  state = {
    stage: this.props.stage
  };

  handleClick = () => this.setState({ stage: this.state.stage + 1 });

  render() {
    return (
      <Fragment>
        {Children.map(this.props.children, child => {
          return cloneElement(child, { stage: this.props.stage, handleClick: this.handleClick });
        })}
      </Fragment>
    )
  }
}

class One extends Component {
  render() {
    return (
      <Fragment>
        <h1>Fuck You, {this.props.boo}</h1>
      </Fragment>
    )
  }
}

class Progress extends Component {
  render() {
    return <Fragment>{this.props.stage}</Fragment>;
  }
}

