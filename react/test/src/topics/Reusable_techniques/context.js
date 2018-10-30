import React, {Component, Fragment, createContext} from 'react';

// create a new context
const { Provider, Consumer } = createContext();

// create a provider Component
class MyProvider extends Component {
    state = {
        name: 'Vitalii',
        age: 28,
        cool: true
    };

    growAYearOlder = () => this.setState({age: this.state.age + 1});

    render() {
        return (
            <Provider value={{
                state: this.state,
                growAYearOlder: this.growAYearOlder
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

class Family extends Component {
    render() {
        return (
            <Person />
        )
    }
}

class Person extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {context => (
                        <Fragment>
                            <p>Name: {context.state.name}</p>
                            <p>Age: {context.state.age}</p>
                            <button onClick={context.growAYearOlder}>Click</button>
                        </Fragment>
                    ) }
                </Consumer>
            </div>
        )
    }
}

export default class Context extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <div>Hi</div>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}