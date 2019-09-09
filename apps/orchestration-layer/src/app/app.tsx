import React, { Suspense } from 'react';

import './app.scss';

import { Route, Link } from 'react-router-dom';

const HomePageApp = React.lazy(() => import('@homepage/app'));
const TodoPageApp = React.lazy(() => import('@todopage/app'));

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <header className="flex">
        <img
          alt=""
          width="75"
          src="https://nx.dev/assets/images/nx-logo-white.svg"
        />
        <h1>Welcome to orchestration-layer!</h1>
      </header>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePageApp />
          </Suspense>
        )}
      />
      <Route
        path="/todos"
        exact
        render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <TodoPageApp />
          </Suspense>
        )}
      />
      {/* END: routes */}
    </div>
  );
};

export default App;
