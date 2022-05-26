import { localStorage } from '@/store/useLocalStorage';
import { GlobalState, Quiz } from '@/types';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

export const useGlobalStore = create<GlobalState>((set, get) => ({
  startTime: localStorage.startTime,
  setStartTime: () => {
    const startTime = new Date().getTime();
    localStorage.setStartTime(startTime);
    set({ startTime });
  },
  finishTime: localStorage.finishTime,
  setFinishTime: () => {
    const finishTime = new Date().getTime();
    localStorage.setStartTime(finishTime);
    set({ finishTime });
  },
  quizzes: localStorage.quizzes,
  setQuizzes: (quizzes: Quiz[]) => {
    set({ quizzes });
    localStorage.setQuizzes(quizzes);
  },
  quizIndex: localStorage.quizIndex,
  setQuizIndex: (quizIndex: number) => {
    set({ quizIndex });
    localStorage.setQuizIndex(quizIndex);
  },
  correctQuestions: localStorage.correctQuestions,
  addCorrectQuestion: () => {
    set({ correctQuestions: get().correctQuestions + 1 });
    localStorage.addCorrectQuestion();
  },
  incorrectQuestions: localStorage.incorrectQuestions,
  addIncorrectQuestion: () => {
    set({ incorrectQuestions: get().incorrectQuestions + 1 });
    localStorage.addIncorrectQuestion();
  },
  init: () => {
    set({ quizzes: [], quizIndex: -1 });
    localStorage.init();
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GlobalStore', useGlobalStore);
}
