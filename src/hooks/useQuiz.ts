import { getQuiz } from '@/api';
import { useGlobalStore } from '@/store/useGlobalStore';
import { Choice } from '@/types';
import { useEffect, useState } from 'react';

export default function useQuiz() {
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [question, setQuestion] = useState<string>('');
  const [choice, setChoice] = useState<string>('');
  const [choices, setChoices] = useState<Choice[]>([]);
  const { correctQuestions, setCorrectQuestions, incorrectQuestions, setIncorrectQuestions } =
    useGlobalStore();

  let quiz = getQuiz.results[quizIndex];

  useEffect(() => {
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
    } else {
      setIncorrectQuestions(incorrectQuestions + 1);
    }

    setChoice('');

    setQuizIndex(quizIndex + 1);
  }

  return { quizIndex, question, choice, setChoice, choices, submit };
}
