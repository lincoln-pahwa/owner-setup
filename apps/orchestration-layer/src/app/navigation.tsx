import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Font, Menu } from '@procore/core-react';

export const Navigation = () => {
  return (
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
      <Menu.Item item="nested-routes">
        <Link to="/nested">
          <Font size="lg" weight="medium" variant="primary">Nested Routes</Font>
        </Link>
      </Menu.Item>
    </Dropdown>
  );
}

export default Navigation;
