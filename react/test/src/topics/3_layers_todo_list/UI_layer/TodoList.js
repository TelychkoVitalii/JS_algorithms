import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList(props) {
  function renderTodoItem(todo) {
    return <TodoListItem todo={todo} key={todo.id} />;
  }

  return <div className="todo-list">
    <ul>{props.todos.map(renderTodoItem)}</ul>
  </div>;
}