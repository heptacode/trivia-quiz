import { localStorage } from '@/store/useLocalStorage';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useReview() {
  const navigate = useNavigate();
  const [showCorrectQuestions, setShowCorrectQuestions] = useState<boolean>(true);

  function toggleShowCorrectQuestions(event: SyntheticEvent) {
    setShowCorrectQuestions((event.target as HTMLInputElement).checked);
  }

  function result() {
    navigate('/result');
  }

  function retry() {
    navigate('/');
  }

  return {
    quizzes: localStorage.quizzes,
    records: localStorage.records,
    showCorrectQuestions,
    toggleShowCorrectQuestions,
    result,
    retry,
  };
}
