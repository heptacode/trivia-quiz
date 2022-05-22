import { LocalStorage } from '@/store/localStorage';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

interface GlobalState {
  startTime: Date;
  setStartTime: () => void;
  finishTime: Date;
  setFinishTime: () => void;
  quizIndex: number;
  setQuizIndex: (quizIndex: number) => void;
  correctQuestions: number;
  setCorrectQuestions: (correctQuestions: number) => void;
  incorrectQuestions: number;
  setIncorrectQuestions: (incorrectQuestions: number) => void;
  init: () => void;
}

export const useGlobalStore = create<GlobalState>(set => ({
  startTime: LocalStorage.startTime,
  setStartTime: () => {
    const startTime = new Date();
    set({ startTime });
    LocalStorage.setStartTime(startTime);
  },
  finishTime: LocalStorage.finishTime,
  setFinishTime: () => {
    const finishTime = new Date();
    set({ finishTime });
    LocalStorage.setFinishTime(finishTime);
  },
  quizIndex: LocalStorage.quizIndex,
  setQuizIndex: (quizIndex: number) => {
    set({ quizIndex });
    LocalStorage.setQuizIndex(quizIndex);
  },
  correctQuestions: LocalStorage.correctQuestions,
  setCorrectQuestions: (correctQuestions: number) => {
    set({ correctQuestions });
    LocalStorage.setCorrectQuestions(correctQuestions);
  },
  incorrectQuestions: LocalStorage.incorrectQuestions,
  setIncorrectQuestions: (incorrectQuestions: number) => {
    set({ incorrectQuestions });
    LocalStorage.setIncorrectQuestions(incorrectQuestions);
  },
  init: () => {
    set({ quizIndex: -1, correctQuestions: 0, incorrectQuestions: 0 });
    LocalStorage.init();
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GlobalStore', useGlobalStore);
}
