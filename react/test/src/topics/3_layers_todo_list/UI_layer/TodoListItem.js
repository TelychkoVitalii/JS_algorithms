import React from 'react';

export default function TodoListItem(props) {
  return (
    <li>
      <div>{props.todo.title}</div>
      <div>{props.todo.userName}</div>
    </li>
  )
}