import { useGlobalStore } from '@/store/useGlobalStore';
import { localStorage } from '@/store/useLocalStorage';
import { Choice, Quiz } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useQuiz() {
  const navigate = useNavigate();
  const { quizIndex, setQuizIndex } = useGlobalStore();
  const [question, setQuestion] = useState<string>('');
  const [choice, setChoice] = useState<string>('');
  const [choices, setChoices] = useState<Choice[]>([]);
  const [isCorrectSnackbarOpen, setIsCorrectSnackbarOpen] = useState<boolean>(false);
  const [isIncorrectSnackbarOpen, setIsIncorrectSnackbarOpen] = useState<boolean>(false);
  let currentQuiz: Quiz = localStorage.quizzes[quizIndex];
  const quizLength: number = localStorage.quizzes.length;

  useEffect(() => {
    if (quizIndex < 0) {
      return navigate('/');
    } else if (quizIndex >= quizLength) {
      return navigate('/result');
    }

    currentQuiz = localStorage.quizzes[quizIndex];

    setQuestion(currentQuiz.question);

    const _choices: Choice[] = [];
    _choices.push({ value: currentQuiz.correct_answer, isAnswer: true });
    currentQuiz.incorrect_answers.forEach((incorrectAnswer: string) => {
      _choices.push({ value: incorrectAnswer, isAnswer: false });
    });
    _choices.sort(() => Math.random() - 0.5);
    setChoices(_choices);
  }, [quizIndex]);

  function submit() {
    const isAnswer = choices.find((_choice: Choice) => _choice.value === choice)?.isAnswer;

    if (isAnswer) {
      localStorage.addCorrectQuestions();
      setIsIncorrectSnackbarOpen(false);
      setIsCorrectSnackbarOpen(true);
    } else {
      localStorage.addIncorrectQuestions();
      setIsCorrectSnackbarOpen(false);
      setIsIncorrectSnackbarOpen(true);
    }

    setChoice('');

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
    quizIndex,
    quizLength,
    question,
    choice,
    setChoice,
    choices,
    submit,
    isCorrectSnackbarOpen,
    isIncorrectSnackbarOpen,
    closeSnackbar,
  };
}
