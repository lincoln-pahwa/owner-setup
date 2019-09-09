import { getAddTodoButton, getDeleteAllButton, getTodos } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
  });

  it('should delete all todos', () => {
    getDeleteAllButton().click();
    getTodos().should(t => expect(t.length).equal(0));
  });
});