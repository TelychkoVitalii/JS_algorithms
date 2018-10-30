import React, { Component, Fragment } from 'react';
import './App.css';
// import TodoListRoot from './TodoList/index';
// import Counter from './Counter/index';

class App extends Component {
  render() {
    const { store } = this.props;
    console.log(store.getState())
    return (
      <Fragment>
        {/*<Counter*/}
            {/*value={store.getState()}*/}
            {/*inc={() => store.dispatch({type: 'INCREMENT'})}*/}
            {/*dec={() => store.dispatch({type: 'DECREMENT'})}*/}
        {/*/>*/}
          {/*<TodoListRoot />*/}
      </Fragment>
    );
  }

}

export default App;
