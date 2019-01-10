// https://hackernoon.com/everything-you-need-to-know-about-reacts-context-api-e5c8c32ef202

// Updating Context from a Nested Component
import React, { Component, Fragment, createContext } from 'react';

const { Provider, Consumer } = createContext();

// Another variant to pass data in Provider
// const Context = createContext({
//   data: 'some data',
//   num: 56
// });

// ---------- GOOD -------------
export default class MyProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          firstName: 'Bob',
          lastName: 'Johnson',
          age: 42,
          isAdmin: false
        },
        changeName: this.changeName
      };
    }
    changeName = () => {
      this.setState(prevState => ({
        ...prevState,
        user: {
          ...prevState.user,
          firstName: 'Pisun',
          lastName: 'Popo'
        }
      }));
    };
    render() {
      // If you decided to use data from createContext Method directly
      // console.log(Context._currentValue);
       return (
         <Provider value={this.state}>
           <MyConsumer />
         </Provider>
       )
    }
}

// ---------- BAD -------------
class MyNextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: 'Steve',
        lastname: 'Stevenson',
        age: 12,
        isAdmin: true,
        changeAge: this.changeAge
      }
    };
  }

  changeAge = () => this.setState(prevState => ({
    ...prevState,
    user: {
      ...prevState.user,
      age: 15
    }
  }));

  render() {
    return (
      <Provider value={{
        user: this.state.user,
        changeAge: this.changeAge
      }}>
        {this.props.children}
        {/*<MyConsumer />*/}
      </Provider>
    )
  }
}

class MyConsumer extends Component {
    render() {
        return (
          <Fragment>
            <Consumer>
              {({ user, changeName }) => {
                return (
                  <Fragment>
                    <h1>{user.firstName}</h1>
                    <h2>{user.lastName}</h2>
                    <button onClick={changeName}>Click</button>
                  </Fragment>
                )
              }}
              </Consumer>
            <MyNextProvider>
                <Consumer>
                  {context => {
                    console.log(context)
                    return (
                      <Fragment>
                        <h1>{context.user.age}</h1>
                        <button onClick={context.changeAge}>Change</button>
                      </Fragment>
                    )
                  }}
                </Consumer>
            </MyNextProvider>
          </Fragment>
        )
    }
}