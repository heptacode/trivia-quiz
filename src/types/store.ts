import { Quiz } from './quiz';

export interface GlobalState {
  quizIndex: number;
  setQuizIndex: (quizIndex: number) => void;
  init: () => void;
}

export interface LocalStorage {
  startTime: Date;
  setStartTime: () => void;
  finishTime: Date;
  setFinishTime: () => void;
  quizzes: Quiz[];
  setQuizzes: (quizzes: Quiz[]) => void;
  quizIndex: number;
  setQuizIndex: (quizIndex: number) => void;
  correctQuestions: number;
  addCorrectQuestions: () => void;
  incorrectQuestions: number;
  addIncorrectQuestions: () => void;
  init: () => void;
}
