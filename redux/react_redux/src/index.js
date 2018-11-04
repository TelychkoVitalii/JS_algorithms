import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
// import todoApp from './TodoList/reducers';
// import counter from './Counter/reducers/change_item';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// let store = createStore(todoApp);
// let store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
