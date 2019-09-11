import React from 'react';
import { render, cleanup } from '@testing-library/react';

import EditTodo from './edit-todo';

describe(' EditTodo', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<EditTodo />);
    expect(baseElement).toBeTruthy();
  });
});
