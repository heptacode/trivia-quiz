import { getQuiz } from '@/api/getQuiz';
import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHome() {
  const navigate = useNavigate();
  const { setQuizIndex, init } = useGlobalStore();
  const [isErrorDialogOpened, setIsErrorDialogOpened] = useState<boolean>(false);

  useEffect(() => init(), []);

  async function startQuiz() {
    const quizzes = await getQuiz();

    if (!!quizzes) {
      localStorage.setQuizzes(quizzes);
      setQuizIndex(0);
      localStorage.setStartTime();
      navigate('/quiz');
    } else {
      setIsErrorDialogOpened(true);
    }
  }

  return { startQuiz, isErrorDialogOpened };
}
