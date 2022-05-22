import { localStorage } from '@/store/useLocalStorage';
import { GlobalState } from '@/types';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

export const useGlobalStore = create<GlobalState>(set => ({
  quizIndex: localStorage.quizIndex,
  setQuizIndex: (quizIndex: number) => {
    set({ quizIndex });
    localStorage.setQuizIndex(quizIndex);
  },
  init: () => {
    set({ quizIndex: -1 });
    localStorage.init();
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GlobalStore', useGlobalStore);
}
