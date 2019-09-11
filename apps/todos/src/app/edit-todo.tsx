import React from 'react';

import './edit-todo.scss';

/* eslint-disable-next-line */
export interface EditTodoProps {
  todoId: number;
}

export const EditTodo = (props: EditTodoProps) => {
  return (
    <div>
      <h1>Welcome to edit-todo {props.todoId}!</h1>
    </div>
  );
};

export default EditTodo;
