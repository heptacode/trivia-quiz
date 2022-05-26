/// <reference types="cypress" />

context('Overall', () => {
  before(() => {
    cy.visit('/');
  });

  it('시작하기 버튼 클릭', () => {
    cy.get('#startQuiz').click();
  });

  it('퀴즈 페이지로 이동', () => {
    cy.url().should('contain', '/quiz');
  });

  it('퀴즈 풀기', () => {
    for (let i = 0; i < 9; i++) {
      cy.get('.choice').first().click();
      cy.get('#submit').click();
    }
  });

  it('결과 페이지로 이동', () => {
    cy.url().should('contain', '/result');
  });
});
