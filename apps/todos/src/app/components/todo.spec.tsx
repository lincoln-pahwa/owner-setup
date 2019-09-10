import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Todo from './todo';

describe(' Todo', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Todo match={ {url: ''}} />);
    expect(baseElement).toBeTruthy();
  });
});
