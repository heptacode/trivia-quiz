import { useGlobalStore } from '@/store/useGlobalStore';
import { LocalStorage } from '@/store/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export function useResult() {
  const navigate = useNavigate();
  const { init } = useGlobalStore();

  function retry() {
    init();
    navigate('/');
  }

  function review() {
    navigate('/review');
  }

  return {
    retry,
    review,
    startTime: LocalStorage.startTime,
    finishTime: LocalStorage.finishTime,
    correctQuestions: LocalStorage.correctQuestions,
    incorrectQuestions: LocalStorage.incorrectQuestions,
  };
}
