import React, { Suspense } from 'react';
import { Dropdown, Font, Menu, Spinner } from '@procore/core-react';
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
        <h1>This is orchestration-layer!</h1>
      </header>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <Dropdown
        label="Go to..."
        variant="primary"
      >
        <Menu.Item item="home">
          <Link to="/">
            <Font size="lg" weight="medium" variant="primary">Home</Font>
          </Link>
        </Menu.Item>
        <Menu.Item item="todo">
          <Link to="/todos">
            <Font size="lg" weight="medium" variant="primary">Todos</Font>
          </Link>
        </Menu.Item>
      </Dropdown>
      <Route
        path="/"
        exact
        render={() => (
          <Suspense fallback={<Spinner size="lg" />}>
            <HomePageApp />
          </Suspense>
        )}
      />
      <Route
        path="/todos"
        exact
        render={() => (
          <Suspense fallback={<Spinner size="lg" />}>
            <TodoPageApp />
          </Suspense>
        )}
      />
      {/* END: routes */}
    </div>
  );
};

export default App;
