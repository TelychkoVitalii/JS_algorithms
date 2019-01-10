import React, { Component } from 'react';

function InputAbstractHOC(WrappedComponent) {
  return class PP extends React.Component {
    state = {
      fields: {}
    };

    getField = fieldName => {
      if (!this.state.fields[fieldName]) {
        this.state.fields[fieldName] = {
          value: '',
          onChange: event => {
            this.state.fields[fieldName].value = event.target.value;
            this.forceUpdate();
          }
        }
      }

      return {
        value: this.state.fields[fieldName].value,
        onChange: this.state.fields[fieldName].onChange
      }
    };

    render() {
      const props = Object.assign({}, this.props, {
        fields: this.getField.bind(this),
      });
      return <WrappedComponent {...props} />;
    }
  }
}

class Example extends Component {
  render() {
    return (
        <form>
          <label>Automatically controlled input!</label>
          <input type="email" {...this.props.fields('email')} />
          <input type="text" {...this.props.fields('firstName')} />
          <p>Email: {this.props.fields('email').value}</p>
          <p>First Name: {this.props.fields('firstName').value}</p>
        </form>
    )
  }
}

export default InputAbstractHOC(Example);