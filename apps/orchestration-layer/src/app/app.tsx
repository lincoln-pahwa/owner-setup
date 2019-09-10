import React, { lazy, Suspense } from 'react';
import { Spinner } from '@procore/core-react';
import './app.scss';

import { Route, Link, Switch } from 'react-router-dom';

const HomePageApp = lazy(() => import('@homepage/app'));
const TodoPageApp = lazy(() => import('@todopage/app'));
const NestedRoutesApp = lazy(() => import('@nestedroutes/app'));

import { Navigation } from './navigation';

function Header() {
  return (
    <header className="flex">
      <h1>This is the orchestration layer!</h1>
    </header>
  )
}

export const App = () => {
  return (
    <div className="app">
      <Header />
      <hr/>
      <Navigation />
      <hr />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Suspense fallback={<Spinner size="lg" />}>
              <HomePageApp isNested={false}/>
            </Suspense>
          )}
        />
        <Route
          exact
          path="/todos"
          render={(props) => (
            <Suspense fallback={<Spinner size="lg" />}>
              <TodoPageApp { ...props } match={{ params: {todoId: null }, url: "/todos" }}/>
            </Suspense>
          )}
        />
        <Route
          path="/todos/:todoId"
          render={(props) => (
            <Suspense fallback={<Spinner size="lg" />}>
              <TodoPageApp { ...props } match={{ params: {todoId: props.match.params.todoId }, url: "/todos" }}/>
            </Suspense>
          )}
        />

        <Route
          path="/nested"
          render={(props) => (
            <Suspense fallback={<Spinner size="lg" />}>
              <NestedRoutesApp { ...props } match={{ url: "/nested" }}/>
            </Suspense>
          )}
        />

        <Route 
          exact={true}
          render={() => (
          <div>
            !!404!!
            <Link to="/"> Click here to go back to root page.</Link>
          </div>
        )}/>
      </Switch>
    </div>
  );
};

export default App;
