import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import NestedRouteApp from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <NestedRouteApp match={{ url: "" }}/>
  </BrowserRouter>,
  document.getElementById('root')
);
