import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import TodoPageApp from './app';

describe('App', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <TodoPageApp />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TodoPageApp />
      </BrowserRouter>
    );

    expect(getByText('Welcome to todos!')).toBeTruthy();
  });
});
