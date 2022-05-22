import { useGlobalStore } from '@/store/useGlobalStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHome() {
  const navigate = useNavigate();
  const { setQuizIndex, setStartTime, init } = useGlobalStore();

  useEffect(() => init(), []);

  function startQuiz() {
    navigate('/quiz');
    setStartTime();
    setQuizIndex(0);
  }

  return { startQuiz };
}
