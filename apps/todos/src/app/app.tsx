import React, { useState } from 'react';
import { Button, Card } from '@procore/core-react'
import { Todo } from './components/todo';
import './app.scss';

import { Route, Link } from 'react-router-dom';

interface Todo {
  title: string;
}

export const TodoPageApp = ({ match, history }) => {
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

  function onTodoClick(id: number) {
    history.push(`${match.url}/${id}`);
  }

  return (
    <div className="app">
      <header className="flex">
        <h1>Todos</h1>
      </header>
      <Card>
        {todos.map((t, index) => (
          <Card 
            key={t.title}
            variant="hoverable"
            className={'todo'}
            onClick={onTodoClick.bind(null, index)} 
          >
            {t.title}
          </Card>
        ))}
      </Card>
      
      <Button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </Button>

      <Button variant="tertiary" id={'delete-all'} onClick={deleteAll}>
        Delete All
      </Button>

      <br/>
      <hr />

      {match.params.todoId && todos.length ? (
        
        <Route 
          path={`${match.url}/:todoId`}
          component={Todo}
        />
      ) : <></>}

    </div>
  );
};

export default TodoPageApp;
