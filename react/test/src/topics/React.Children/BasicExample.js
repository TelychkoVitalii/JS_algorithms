import React, { Component } from 'react';

class Grid extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

class Row extends Component {
  render() {
    return <div>Fuck</div>
  }
}

export default class App extends Component {
  render() {
    return (
      <Grid>
        Here is a row:
        <Row />
        Here is another row:
        <Row />
      </Grid>
    )
  }
}