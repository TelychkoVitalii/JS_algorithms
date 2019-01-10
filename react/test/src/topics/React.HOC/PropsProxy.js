// import React, { Component, Fragment } from 'react';

// 1. Props Proxy (PP): The HOC manipulates the props being passed to the WrappedComponent W;
/* function ppHOC(WrappedComponent) { // class factory
  return class PP extends Component {
    render() {
      // is equivalent to React.createElement(WrappedComponent, this.props, null)
      return <WrappedComponent {...this.props} />
    }
  }
} */

// 1.1. Manipulating Props
/* function ppHOC(WrappedComponent) { // class factory
  return class PP extends Component {
    render() {
      const newProps = {
        isAuth: 'true'
      };
      // is equivalent to React.createElement(WrappedComponent, this.props, null)
      return <WrappedComponent {...newProps} />
    }
  }
}

class Hello extends Component {
  render() {
    return <h1>{this.props.isAuth}</h1>
  }
}

export default ppHOC(Hello); */

// 1.2. Accessing the instance via Refs
/* function refsHOC(WrappedComponent) {
  return class RefsHOC extends Component {
    static access(wrappedComponentInstance) {
      wrappedComponentInstance.setNewAge();
      wrappedComponentInstance.hi();
    }
    render() {
      const props = Object.assign({}, this.props, { ref: RefsHOC.access.bind(this) });
      return <WrappedComponent {...props} />;
    }
  }
}

class HelloRefs extends Component {
  state = {
    age: 12
  };

  hi = () => console.log('Hi');
  setNewAge = () => this.setState({ age: 13 });
  render() {
    return <h1>{'Hello'}{this.state.age}</h1>;
  }
}

export default refsHOC(HelloRefs); */

// 1.3. State abstraction
/* function saHOC(WrappedComponent) {
  return class PP extends Component {
    state = {
      name: ''
    };

    onNameChanged = event => this.setState({ name: event.target.value });

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChanged
        }
      };
      return <WrappedComponent {...newProps} />;
    }
  }
}

class Example extends Component {
  render() {
    return (
      <Fragment>
        <input {...this.props.name} />
        {this.props.name.value}
      </Fragment>
    )
  }
}

export default saHOC(Example); */