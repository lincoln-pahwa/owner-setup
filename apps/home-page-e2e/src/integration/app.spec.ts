import { getGreeting } from '../support/app.po';

describe('home-page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to home-page!');
  });
});
