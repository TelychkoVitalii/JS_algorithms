// Store is an object which connect action with reducers.
// Store contains all app state
// access to store only through 'store.getState()'
// update store only through 'store.dispatch(action)'

// create store
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
store.dispatch(action);