import { Choice } from '@/types';

context('Overall', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('시작하기 버튼을 클릭하면 퀴즈 페이지로 이동되는가', () => {
    cy.get('#startQuiz').click();
    cy.url().should('contain', '/quiz');
  });

  it('LocalStorage에 Quiz 데이터가 저장되는가', () => {
    expect(cy.getLocalStorage('triviaQuiz:quizzes')).to.not.be.a('null');
  });

  it('퀴즈가 잘 풀리는가', () => {
    cy.get('.choice', { timeout: 10000 });

    for (let i = 0; i < 10; i++) {
      cy.get('.choice').first().click();
      cy.get('#submit').click();
    }
  });

  it('문제를 모두 풀면 결과 페이지로 이동되는가', () => {
    cy.url().should('contain', '/result');
  });

  it('정오답 개수가 맞게 표기되는가', () => {
    cy.getLocalStorage('triviaQuiz:correctQuestions').then(correctQuestions => {
      cy.get('#correctQuestions').should('contain', correctQuestions);
    });
    cy.getLocalStorage('triviaQuiz:incorrectQuestions').then(correctQuestions => {
      cy.get('#incorrectQuestions').should('contain', correctQuestions);
    });
  });

  it('오답 노트 버튼을 클릭하면 오답 노트 페이지로 이동되는가', () => {
    cy.get('#review').click();
    cy.url().should('contain', '/review');
  });

  it('맞은 문제 포함 체크박스를 선택 해제하면 틀린 문제만 보여지는가', () => {
    cy.get('#toggleCorrectQuestions').click();

    const questions = [];
    cy.get('.question').each(element => questions.push(element.text()));

    cy.getLocalStorage('triviaQuiz:records').then(records => {
      const correctQuestions = JSON.parse(records).filter((record: Choice) => record.isAnswer);
      if (correctQuestions.length) {
        expect(questions).to.not.contain(correctQuestions[0]);
      }
    });
  });

  it('다시 풀기 버튼을 클릭하면 홈으로 돌아가는가', () => {
    cy.get('#retry').click();
    cy.url().then(url => expect(url.charAt(url.length - 1)).to.equal('/'));
  });
});
