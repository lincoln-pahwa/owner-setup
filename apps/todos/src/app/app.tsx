import React, { useState } from 'react';

import './app.scss';

import { Route, Link } from 'react-router-dom';

interface Todo {
  title: string;
}

export const TodoPageApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' }
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`
      }
    ]);
  }

  function deleteAll() {
    setTodos([]);
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map(t => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>

      <button id={'delete-all'} onClick={deleteAll}>
        Delete All
      </button>
    </>
  );
};

export default TodoPageApp;
