// import React, { Component, Fragment, cloneElement } from 'react';

// Inheritance Inversion (II): The HOC extends the WrappedComponent W.

/*
The returned HOC class (Enhancer) extends the WrappedComponent.
It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class,
it is passively extended by the Enhancer. In this way the relationship between them seems inverse.
 */
/* function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    state = {
      num: 5
    };

    render() {
      this.hi();
      return super.render();
    }
  }
}

class Example extends Component {
  state = {
    number: 0
  };

  hi = () => console.log('Hi');

  render() {
    return <h1>Example</h1>;
  }
}

export default iiHOC(Example); */

// 1.1 Render Highjacking - HOC takes control of the render output of the WrappedComponent and can do all sorts of stuff with it.

/*
You cannot edit or create props of the WrappedComponent instance,
because a React Component cannot edit the props it receives,
but you can change the props of the elements that are outputted from the render method.
 */

// 1.1.1. Conditional rendering. This HOC will render exactly what the WrappedComponent would render unless this.props.loggedIn is not true.
/* function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      if (this.props.loggedIn) {
        super.componentDidMount();
        console.log('iiHOC');
        return super.render();
      } else {
        return null;
      }
    }
  }
}

class Example extends Component {
  componentDidMount() {
    console.log('COMPONENTDIDMOUNT!!!!!!!');
  }

  render() {
    return (
      <Fragment>
        <h1>Example</h1>
        <h2>Logged In</h2>
      </Fragment>
    )
  }
}

Example.defaultProps = {
  loggedIn: 'YES'
};

export default iiHOC(Example); */

// 1.1.2. Modifying the React Elements tree outputted by render.

/* function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};
      if(elementsTree && elementsTree.type === 'input') {
        newProps = { defaultValue: 'may the force be with you' };
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      // const newElementsTree = cloneElement(elementsTree, props);
      return cloneElement(elementsTree, props);
    }
  }
}

class Example extends Component {
  render() {
    return <input type="text" defaultValue='Example Input' />;
  }
}

export default iiHOC(Example); */

// 1.2. Manipulating state

// function stringify(value) {
//   return JSON.stringify(value);
// }

// II debug example
// We are using the Inheritance Inversion technique to display
// the current state and props of the WrappedComponent (the component you want to debug).
// This is based on the technique that Mickael Jackson and Ryan Florence recommend
/* function IIHOC(WrappedComponent) {
  return class II extends WrappedComponent {
    render() {
      this.state.name = 'Bob';
      console.log(this.state);
      return (
        <div>
          <h2>
            HOC Debugger Component
          </h2>
          <p>
            Props
          </p>
          <pre>{stringify(this.props)}</pre>
          <p>
            State
          </p>
          <pre>{stringify(this.state)}</pre>
          {super.render()}
        </div>
      )
    }
  }
}

class Example extends React.Component {
  state = {
    name: 'fran',
    email: 'franleplant@gmail.com'
  };

  render() {
    return (
      <h2>Example Component</h2>
    )
  }
}

export default IIHOC(Example);
*/