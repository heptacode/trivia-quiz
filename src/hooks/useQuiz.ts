import { getQuiz } from '@/api';
import { useGlobalStore } from '@/store/useGlobalStore';
import { Choice } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useQuiz() {
  const navigate = useNavigate();
  const {
    setFinishTime,
    quizIndex,
    setQuizIndex,
    correctQuestions,
    setCorrectQuestions,
    incorrectQuestions,
    setIncorrectQuestions,
  } = useGlobalStore();
  const [question, setQuestion] = useState<string>('');
  const [choice, setChoice] = useState<string>('');
  const [choices, setChoices] = useState<Choice[]>([]);
  const [isCorrectSnackbarOpen, setIsCorrectSnackbarOpen] = useState<boolean>(false);
  const [isIncorrectSnackbarOpen, setIsIncorrectSnackbarOpen] = useState<boolean>(false);

  let quiz = getQuiz.results[quizIndex];
  const quizLength = getQuiz.results.length;

  useEffect(() => {
    if (quizIndex < 0) {
      return navigate('/');
    }

    quiz = getQuiz.results[quizIndex];

    setQuestion(quiz.question);

    const _choices: Choice[] = [];
    _choices.push({ value: quiz.correct_answer, isAnswer: true });
    quiz.incorrect_answers.forEach((incorrectAnswer: string) => {
      _choices.push({ value: incorrectAnswer, isAnswer: false });
    });
    _choices.sort(() => Math.random() - 0.5);
    setChoices(_choices);
  }, [quizIndex]);

  function submit() {
    const isAnswer = choices.find((_choice: Choice) => _choice.value === choice)?.isAnswer;

    if (isAnswer) {
      setCorrectQuestions(correctQuestions + 1);
      setIsIncorrectSnackbarOpen(false);
      setIsCorrectSnackbarOpen(true);
    } else {
      setIncorrectQuestions(incorrectQuestions + 1);
      setIsCorrectSnackbarOpen(false);
      setIsIncorrectSnackbarOpen(true);
    }

    setChoice('');

    if (quizIndex < quizLength - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
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
