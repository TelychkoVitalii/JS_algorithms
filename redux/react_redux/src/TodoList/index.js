import React, { Component, Fragment } from 'react';
import AddTodo from '../TodoList/containers/AddTodo';
import VisibleTodoList from '../TodoList/containers/VisibleTodoList';
import Footer from '../TodoList/components/Footer';

class TodoListRoot extends Component {
    render() {
        return (
            <Fragment>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </Fragment>
        );
    }
}

export default TodoListRoot;