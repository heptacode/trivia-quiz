import { getQuiz } from '@/api/getQuiz';
import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
import { Choice, Quiz } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useQuiz() {
  const navigate = useNavigate();
  const {
    setStartTime,
    setFinishTime,
    quizzes,
    setQuizzes,
    quizIndex,
    setQuizIndex,
    addCorrectQuestion,
    addIncorrectQuestion,
  } = useGlobalStore();
  const [quiz, setQuiz] = useState<Quiz>(quizzes[quizIndex]);
  const [choiceValue, setChoiceValue] = useState<string>();
  const [isCorrectSnackbarOpen, setIsCorrectSnackbarOpen] = useState<boolean>(false);
  const [isIncorrectSnackbarOpen, setIsIncorrectSnackbarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!quizzes.length) {
      (async function () {
        const quizzes = await getQuiz();

        if (!!quizzes) {
          setQuizzes(quizzes);
          setQuizIndex(0);
          setStartTime();
        } else {
          throw new Error('퀴즈 데이터를 가져오지 못했어요.');
        }
      })();
    } else {
      if (quizIndex < 0) {
        return navigate('/');
      } else if (quizIndex >= quizzes.length) {
        return navigate('/result');
      }
    }
  }, []);

  useEffect(() => {
    if (quizIndex >= 0) {
      setQuiz(quizzes[quizIndex]);
    }
  }, [quizIndex]);

  function submit() {
    const choice: Choice = quiz.choices.find(choice => choice.value === choiceValue)!;
    localStorage.addRecord(choice);

    if (choice.isAnswer) {
      addCorrectQuestion();
      setIsIncorrectSnackbarOpen(false);
      setIsCorrectSnackbarOpen(true);
    } else {
      addIncorrectQuestion();
      setIsCorrectSnackbarOpen(false);
      setIsIncorrectSnackbarOpen(true);
    }

    setChoiceValue('');

    if (quizIndex < quizzes.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizIndex(quizIndex + 1);
      setFinishTime();
      navigate('/result');
    }
  }

  function closeSnackbar(event?: any, reason?: any) {
    if (reason === 'clickaway') {
      return;
    }

    setIsCorrectSnackbarOpen(false);
    setIsIncorrectSnackbarOpen(false);
  }

  return {
    quiz,
    quizIndex,
    quizLength: quizzes.length,
    choiceValue,
    setChoiceValue,
    submit,
    isCorrectSnackbarOpen,
    isIncorrectSnackbarOpen,
    closeSnackbar,
  };
}
