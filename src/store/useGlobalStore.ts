import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

interface GlobalState {
  correctQuestions: number;
  setCorrectQuestions: (correctQuestions: number) => void;
  incorrectQuestions: number;
  setIncorrectQuestions: (incorrectQuestions: number) => void;
}

export const useGlobalStore = create<GlobalState>(set => ({
  correctQuestions: 0,
  setCorrectQuestions: (correctQuestions: number) => {
    set({
      correctQuestions: correctQuestions,
    });
  },
  incorrectQuestions: 0,
  setIncorrectQuestions: (incorrectQuestions: number) => {
    set({
      incorrectQuestions: incorrectQuestions,
    });
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GlobalStore', useGlobalStore);
}
