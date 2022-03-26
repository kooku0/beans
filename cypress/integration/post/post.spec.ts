/// <reference types="cypress" />

describe('The Post Page', () => {
  it('successfully loads', () => {
    cy.visit('/post');

    cy.contains('post');
  });
});
