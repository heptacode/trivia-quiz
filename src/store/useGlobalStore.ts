import { LocalStorage } from '@/store/useLocalStorage';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

interface GlobalState {
  quizIndex: number;
  setQuizIndex: (quizIndex: number) => void;
  init: () => void;
}

export const useGlobalStore = create<GlobalState>(set => ({
  quizIndex: LocalStorage.quizIndex,
  setQuizIndex: (quizIndex: number) => {
    set({ quizIndex });
    LocalStorage.setQuizIndex(quizIndex);
  },
  init: () => {
    set({ quizIndex: -1 });
    LocalStorage.init();
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GlobalStore', useGlobalStore);
}
