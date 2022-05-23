import { localStorage } from '@/store/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export function useReview() {
  const navigate = useNavigate();

  function retry() {
    navigate('/');
  }

  return { quizzes: localStorage.quizzes, records: localStorage.records, retry };
}
