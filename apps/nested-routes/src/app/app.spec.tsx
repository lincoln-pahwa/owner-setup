import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import NestedRouteApp from './app';

describe('App', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <NestedRouteApp 
          match={{params: {id: 1}, isExact: true, path: "", url: ""}}
        />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
