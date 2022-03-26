/// <reference types="cypress" />

describe('The Post Page', () => {
  it('successfully loads', () => {
    cy.visit('/post');

    cy.contains('post');
  });

  it('journal을 작성하고 저장할 수 있어야 한다.', () => {
    cy.visit('/post');

    cy.get('input[name=date]').type('2020-03-26');
    cy.get('input[name=price]').type('3000');
    cy.get('input[name=contents]').type('너무 즐거웠다');
    cy.get('[data-testid="map"').click();

    cy.contains('button', '저장하기').click();

    cy.intercept('POST', 'https://firestore.googleapis.com');
  });
});
