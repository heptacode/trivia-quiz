import { getQuiz } from '@/api/getQuiz';
import { getRequest } from '@/api/httpRequest';
import { Quiz } from '@/types';

const expectedQuizzes = {
  category: expect.any(String),
  type: expect.any(String),
  difficulty: expect.any(String),
  question: expect.any(String),
  correct_answer: expect.any(String),
  incorrect_answers: expect.any(Array),
  choices: expect.any(Array),
};

describe('getQuiz', () => {
  it('HTTP 상태 코드가 200인가', async () => {
    const response = await getRequest<any>(`?amount=1`);
    expect(response).toBeTruthy();
  });

  it('커스텀 모듈을 통해 퀴즈 데이터를 가져올 수 있는가', async () => {
    const result: Quiz[] | undefined = await getQuiz();
    expect(result).toBeTruthy();
  });

  it('퀴즈는 모든 속성을 갖고 있는가', async () => {
    const result: Quiz[] | undefined = await getQuiz();
    expect(result && result[0]).toMatchObject(expectedQuizzes);
  });
});
