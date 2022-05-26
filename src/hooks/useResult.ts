import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useResult() {
  const navigate = useNavigate();
  const { startTime, finishTime, correctQuestions, incorrectQuestions, init } = useGlobalStore();

  useEffect(() => {
    if (!localStorage.records) {
      return navigate('/');
    }
  }, []);

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
    startTime,
    finishTime,
    correctQuestions,
    incorrectQuestions,
  };
}
