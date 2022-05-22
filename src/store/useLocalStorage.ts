import { LocalStorage, Quiz } from '@/types';

const prefix = 'triviaQuiz';
const property = {
  startTime: 'startTime',
  finishTime: 'finishTime',
  quizzes: 'quizzes',
  quizIndex: 'quizIndex',
  correctQuestions: 'correctQuestions',
  incorrectQuestions: 'incorrectQuestions',
};

export const localStorage: LocalStorage = {
  get startTime(): Date {
    const time = window.localStorage.getItem(`${prefix}:${property.startTime}`) || '';
    return new Date(time);
  },
  setStartTime() {
    window.localStorage.setItem(`${prefix}:${property.startTime}`, new Date().toISOString());
  },

  get finishTime(): Date {
    const time = window.localStorage.getItem(`${prefix}:${property.finishTime}`) || '';
    return new Date(time);
  },
  setFinishTime() {
    window.localStorage.setItem(`${prefix}:${property.finishTime}`, new Date().toISOString());
  },

  get quizzes(): Quiz[] {
    return JSON.parse(
      window.localStorage.getItem(`${prefix}:${property.quizzes}`) || '[]'
    ) as Quiz[];
  },
  setQuizzes(quizzes: Quiz[]) {
    window.localStorage.setItem(`${prefix}:${property.quizzes}`, JSON.stringify(quizzes));
  },

  get quizIndex(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.quizIndex}`) || -1);
  },
  setQuizIndex(quizIndex: number) {
    window.localStorage.setItem(`${prefix}:${property.quizIndex}`, String(quizIndex));
  },

  get correctQuestions(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.correctQuestions}`) || 0);
  },
  addCorrectQuestions() {
    window.localStorage.setItem(
      `${prefix}:${property.correctQuestions}`,
      String(this.correctQuestions + 1)
    );
  },

  get incorrectQuestions(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.incorrectQuestions}`) || 0);
  },
  addIncorrectQuestions() {
    window.localStorage.setItem(
      `${prefix}:${property.incorrectQuestions}`,
      String(this.incorrectQuestions + 1)
    );
  },

  init() {
    window.localStorage.removeItem(`${prefix}:${property.startTime}`);
    window.localStorage.removeItem(`${prefix}:${property.finishTime}`);
    window.localStorage.removeItem(`${prefix}:${property.quizIndex}`);
    window.localStorage.removeItem(`${prefix}:${property.correctQuestions}`);
    window.localStorage.removeItem(`${prefix}:${property.incorrectQuestions}`);
  },
};
