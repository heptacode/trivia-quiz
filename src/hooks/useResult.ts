import { useGlobalStore } from '@/store/useGlobalStore';
import { useNavigate } from 'react-router-dom';

export function useResult() {
  const navigate = useNavigate();
  const { startTime, finishTime, correctQuestions, incorrectQuestions, init } = useGlobalStore();

  function retry() {
    init();
    navigate('/');
  }

  return { retry, startTime, finishTime, correctQuestions, incorrectQuestions };
}
