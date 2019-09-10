import React, { useState } from 'react';
import { Button, Card } from '@procore/core-react'
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
    <div className="app">
      <header className="flex">
        <h1>Todos</h1>
      </header>
      <Card>
        {todos.map(t => (
          <Card  variant="hoverable" className={'todo'}>{t.title}</Card>
        ))}
      </Card>
      
      <Button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </Button>

      <Button variant="tertiary" id={'delete-all'} onClick={deleteAll}>
        Delete All
      </Button>
    </div>
  );
};

export default TodoPageApp;
