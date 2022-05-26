import { Choice, Quiz } from './quiz';

export interface GlobalState {
  quizzes: Quiz[];
  setQuizzes: (quizzes: Quiz[]) => void;
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
  addCorrectQuestion: () => void;
  incorrectQuestions: number;
  addIncorrectQuestion: () => void;
  records: Choice[];
  addRecord: (record: Choice) => void;
  init: () => void;
}
