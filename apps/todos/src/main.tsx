import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import TodoPageApp from './app/app';

ReactDOM.render(
  <BrowserRouter>

    <Route
      exact
      path="/"
      render={(props) => (
        <TodoPageApp { ...props } match={{...props.match, url: ""}}/>
      )}
    />
    <Route
      path="/:todoId"
      render={(props) => (
        <TodoPageApp { ...props } match={{...props.match, url: ""}}/>
      )}
    />


  </BrowserRouter>,
  document.getElementById('root')
);
