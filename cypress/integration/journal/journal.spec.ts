/// <reference types="cypress" />

describe('The Journal Page', () => {
  it('successfully loads', () => {
    cy.visit('/journal/8EBo67zc4XCcd3SAGZq1');

    cy.contains('제주도 여행');
  });
});
