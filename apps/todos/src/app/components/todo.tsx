import React from 'react';
import { Icon, IconLayout } from '@procore/core-react'

import './todo.scss';

export const Todo = ({ match, history }) => {
  const todoId: number = match.params.todoId;
  function onIconClick(id: number, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    history.push(`${match.url}/edit`);
  }

  return (
    <div>
      <h1>
      <IconLayout>
        Welcome to todo {todoId}! 
        <IconLayout.Icons>
            <Icon icon="edit" variant="hover-fill" clickable onClick={(event) => onIconClick((todoId + 1), event)}/>
        </IconLayout.Icons>
      </IconLayout>
        
      </h1>
    </div>
  );
};

export default Todo;
