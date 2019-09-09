import { getGreeting } from '../support/app.po';

describe('orchestration-layer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to orchestration-layer!');
  });
});
