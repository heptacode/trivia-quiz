import { ResponseCode } from './enums';
import { QuizDifficulty, QuizType } from './types';

/**
 * 퀴즈 API 응답 결과
 *
 * @member {ResponseCode} response_code: 응답 코드
 * @member {Quiz[]} results: 결과
 */
export interface QuizResponse {
  response_code: ResponseCode;
  results: RawQuiz[];
}

/**
 * API에서 받아온 퀴즈
 *
 * @member {string} category: 범주
 * @member {QuizType} type: 종류
 * @member {QuizDifficulty} difficulty: 난이도
 * @member {string} question: 질문
 * @member {string} correct_answer: 정답
 * @member {string[]} incorrect_answers: 오답 배열
 */
export interface RawQuiz {
  category: string;
  type: QuizType;
  difficulty: QuizDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

/**
 * API에서 받아온 퀴즈에 선택지를 가공하여 추가한 Object
 *
 * @extends {RawQuiz}
 * @member {Choice[]} choices: 선택지
 */
export interface Quiz extends RawQuiz {
  choices: Choice[];
}

/**
 * 선택지
 *
 * @member {string} value: 선택항목
 * @member {boolean} isAnswer: 정답여부
 */
export interface Choice {
  value: string;
  isAnswer: boolean;
}
