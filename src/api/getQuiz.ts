import { getRequest } from '@/api/httpRequest';
import { Quiz, QuizResponse, RawQuiz, ResponseCode } from '@/types';

export async function getQuiz(): Promise<Quiz[] | undefined> {
  try {
    const quizResponse = await getRequest<QuizResponse>('?amount=10&type=multiple');

    if (quizResponse.response_code !== ResponseCode.SUCCESS) {
      throw new Error(`Request failed with ResponseCode: ${quizResponse.response_code}`);
    }

    return quizResponse.results.map((rawQuiz: RawQuiz) => {
      return {
        ...rawQuiz,
        choices: [
          { value: rawQuiz.correct_answer, isAnswer: true },
          ...rawQuiz.incorrect_answers.map((incorrectAnswer: string) => {
            return { value: incorrectAnswer, isAnswer: false };
          }),
        ].sort(() => Math.random() - 0.5),
      };
    });
  } catch (error) {
    console.error(error);
  }
}
