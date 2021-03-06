import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import TodoPageApp from './app';

describe('App', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <TodoPageApp match={{url: '/todos'}}/>
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
