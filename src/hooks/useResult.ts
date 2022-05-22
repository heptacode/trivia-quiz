import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
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
    startTime: localStorage.startTime,
    finishTime: localStorage.finishTime,
    correctQuestions: localStorage.correctQuestions,
    incorrectQuestions: localStorage.incorrectQuestions,
  };
}
