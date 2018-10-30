// Reducer is a pure function which have previous state and action then return next state
// (previousState, action) => newState
// Do not do that: change params in fn, any side-effects, use route system

// Initial State
const initialState = {
    todos: []
};

// Reducer
function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                text: action.text
            });
        case 'UPDATE_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text
                    }
                ]
            });
        default:
            return state;
    }
}

// combineReducers
import {combineReducers} from 'redux';

const todoApp = combineReducers({
    firstReducer,
    secondReducers
});

export default todoApp;


