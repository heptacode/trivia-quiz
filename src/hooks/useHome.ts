import { useGlobalStore } from '@/store/useGlobalStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHome() {
  const navigate = useNavigate();
  const { init } = useGlobalStore();

  useEffect(() => init(), []);

  function startQuiz() {
    navigate('/quiz');
  }

  return { startQuiz };
}
