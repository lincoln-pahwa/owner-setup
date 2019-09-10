import React, { lazy, Suspense } from 'react';
import { Spinner } from '@procore/core-react';

import './app.scss';

import { Route, Link } from 'react-router-dom';

const HomePageApp = lazy(() => import('@homepage/app'));
const TodoPageApp = lazy(() => import('@todopage/app'));

export const NestedRouteApp = ({ match }) => {
  return (
    <div className="app">
      <header className="flex">
        <h1>Welcome to nested-routes!</h1>
      </header>
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to={`${match.url}`}>Nested Default</Link>
          </li>
          <li>
            <Link to={`${match.url}/nested-home`}>Nested Home</Link>
          </li>
          <li>
            <Link to={`${match.url}/nested-todos`}>Nested Todos</Link>
          </li>
        </ul>
      </div>
      <Route 
        exact
        path={`${match.url}`}
        render={() => (
          <div>
            Nested App Default
          </div>
        )}
      />
      <Route
        path={`${match.url}/nested-home`}
        render={() => (
          <Suspense fallback={<Spinner size="lg" />}>
            <HomePageApp isNested={true}/>
          </Suspense>
        )}
      />
      <Route
        exact
        path={`${match.url}/nested-todos`}
        render={(props) => (
          <Suspense fallback={<Spinner size="lg" />}>
            <TodoPageApp { ...props } match={{ params: {todoId: null }, url: `${match.url}/nested-todos` }}/>
          </Suspense>
        )}
      />
      <Route
        path={`${match.url}/nested-todos/:todoId`}
        render={(props) => (
          <Suspense fallback={<Spinner size="lg" />}>
            <TodoPageApp { ...props } match={{ params: {todoId: props.match.params.todoId }, url: `${match.url}/nested-todos` }}/>
          </Suspense>
        )}
      />
    </div>
  );
};

export default NestedRouteApp;
