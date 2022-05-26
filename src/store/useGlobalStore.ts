import { localStorage } from '@/store/useLocalStorage';
import { GlobalState, Quiz } from '@/types';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

export const useGlobalStore = create<GlobalState>((set, get) => ({
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
  init: () => {
    set({ quizzes: [], quizIndex: -1 });
    localStorage.init();
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GlobalStore', useGlobalStore);
}
