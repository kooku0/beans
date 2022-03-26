/// <reference types="cypress" />

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.contains('home');
  });

  context('journal item을 클릭하면', () => {
    it('journal 상세 페이지로 이동해야 한다.', () => {
      cy.visit('/');
      cy.contains('button', '자세히 보기').click();

      cy.url().should('include', '/journal/');
    });
  });
});
