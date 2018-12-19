import React, { Component } from 'react';

export default class TodoSearchForm extends Component {
  state = {
    text: ''
  };

  handleChange = event => {this.setState({ text: event.target.value })};

  search = () => {
    const query = Object.freeze({ text: this.state.text });
    if(this.props.onSearch) {
      this.props.onSearch(query);
    }
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.text} />
        <button type='button' onClick={this.search}>Search</button>
      </form>
    )
  }
}