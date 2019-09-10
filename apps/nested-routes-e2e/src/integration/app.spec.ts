import { getGreeting } from '../support/app.po';

describe('nested-routes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nested-routes!');
  });
});
