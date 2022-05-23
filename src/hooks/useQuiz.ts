import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
import { Choice, Quiz } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useQuiz() {
  const navigate = useNavigate();
  const { quizIndex, setQuizIndex } = useGlobalStore();
  const [quiz, setQuiz] = useState<Quiz>(localStorage.quizzes[quizIndex]);
  const [choiceValue, setChoiceValue] = useState<string>();
  const [isCorrectSnackbarOpen, setIsCorrectSnackbarOpen] = useState<boolean>(false);
  const [isIncorrectSnackbarOpen, setIsIncorrectSnackbarOpen] = useState<boolean>(false);
  const quizLength: number = localStorage.quizzes.length;

  useEffect(() => {
    if (!localStorage.quizzes) {
      return navigate('/');
    }
  }, []);

  useEffect(() => {
    if (quizIndex < 0) {
      return navigate('/');
    } else if (quizIndex >= quizLength) {
      return navigate('/result');
    }

    setQuiz(localStorage.quizzes[quizIndex]);
  }, [quizIndex]);

  function submit() {
    const choice: Choice = quiz.choices.find(choice => choice.value === choiceValue)!;
    localStorage.addRecord(choice);

    if (choice.isAnswer) {
      localStorage.addCorrectQuestion();
      setIsIncorrectSnackbarOpen(false);
      setIsCorrectSnackbarOpen(true);
    } else {
      localStorage.addIncorrectQuestion();
      setIsCorrectSnackbarOpen(false);
      setIsIncorrectSnackbarOpen(true);
    }

    setChoiceValue('');

    if (quizIndex < quizLength - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizIndex(quizIndex + 1);
      localStorage.setFinishTime();
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
    quizLength,
    choiceValue,
    setChoiceValue,
    submit,
    isCorrectSnackbarOpen,
    isIncorrectSnackbarOpen,
    closeSnackbar,
  };
}
