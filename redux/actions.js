// Action is a structure which pass data from the app to the store. Action is only source of truth for store.
// We need to use store.dispatch();

const ADD_TODO = 'ADD_TODO'; // constant name of action

// Must be a simple object
{
  type: ADD_TODO; // required field
  text: 'My First Redux App' // your field (payload)
}

// Action Creators is a function which create action (function which return object)
// It makes actions more portable
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

dispatch(addTodo(text)); // to push action

// to invoke action directly
const boundAddTodo = (text) => dispatch(addTodo(text));
boundAddTodo(text);