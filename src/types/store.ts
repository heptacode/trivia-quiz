import { Choice, Quiz } from './quiz';

export interface GlobalState {
  startTime: number;
  setStartTime: () => void;
  finishTime: number;
  quizzes: Quiz[];
  setQuizzes: (quizzes: Quiz[]) => void;
  quizIndex: number;
  setQuizIndex: (quizIndex: number) => void;
  correctQuestions: number;
  addCorrectQuestion: () => void;
  incorrectQuestions: number;
  addIncorrectQuestion: () => void;
  setFinishTime: () => void;
  init: () => void;
}

export interface LocalStorage {
  startTime: number;
  setStartTime: (startTime: number) => void;
  finishTime: number;
  setFinishTime: (finishTime: number) => void;
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
