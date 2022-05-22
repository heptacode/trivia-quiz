import { useGlobalStore } from '@/store/useGlobalStore';
import { LocalStorage } from '@/store/useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHome() {
  const navigate = useNavigate();
  const { setQuizIndex, init } = useGlobalStore();

  useEffect(() => init(), []);

  function startQuiz() {
    navigate('/quiz');
    LocalStorage.setStartTime();
    setQuizIndex(0);
  }

  return { startQuiz };
}
