import React from 'react';

import './todo.scss';

export const Todo = ({ match }) => {
  return (
    <div>
      <h1>Welcome to todo {match.params.todoId}!</h1>
    </div>
  );
};

export default Todo;
