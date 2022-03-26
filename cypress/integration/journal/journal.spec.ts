/// <reference types="cypress" />

describe('The Journal Page', () => {
  it('successfully loads', () => {
    cy.visit('/journal/8EBo67zc4XCcd3SAGZq1');

    cy.contains('loading...');

    cy.intercept('GET', 'https://firestore.googleapis.com/*').then(() => {
      cy.contains('제주도 여행');
    });
  });
});
