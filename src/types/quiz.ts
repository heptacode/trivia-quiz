import { ResponseCode } from './enums';
import { QuizDifficulty, QuizType } from './types';

export interface Choice {
  value: string;
  isAnswer: boolean;
}

export interface Quiz {
  category: string;
  type: QuizType;
  difficulty: QuizDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizResponse {
  response_code: ResponseCode;
  results: Quiz[];
}
