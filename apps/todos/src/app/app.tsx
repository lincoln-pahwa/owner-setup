import React, { useState } from 'react';
import { Button, Card, Icon, IconLayout } from '@procore/core-react'
import { Todo } from './components/todo';
import { EditTodo } from './edit-todo';
import './app.scss';
import '@procore/core-icons/dist/icons.css';

import { Route, Switch } from 'react-router-dom';

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

  function onIconClick(id: number, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    history.push(`${match.url}/${id}/edit`);
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
            onClick={onTodoClick.bind(null, (index + 1))} 
          >
            <IconLayout>
              {t.title}
              <IconLayout.Icons>
                  <Icon icon="edit" variant="hover-fill" clickable onClick={(event) => onIconClick((index + 1), event)}/>
              </IconLayout.Icons>
            </IconLayout>
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
        
        <Switch>
          <Route
            exact
            path={`${match.url}/:todoId`}
            component={Todo}
          />

          <Route 
            path={`${match.url}/:todoId/edit`}
            render={() => (
              <EditTodo todoId={match.params.todoId}/>
            )}
          />
        </Switch>
        
      ) : <></>}

    </div>
  );
};

export default TodoPageApp;
