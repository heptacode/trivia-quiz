import { getQuiz } from '@/api';
import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHome() {
  const navigate = useNavigate();
  const { setQuizIndex, init } = useGlobalStore();

  useEffect(() => init(), []);

  function startQuiz() {
    navigate('/quiz');
    localStorage.setStartTime();
    localStorage.setQuizzes(getQuiz.results);
    setQuizIndex(0);
  }

  return { startQuiz };
}
