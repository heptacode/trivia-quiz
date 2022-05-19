import Home from '@/views/Home';
import NotFound from '@/views/NotFound';
import Quiz from '@/views/Quiz';
import Result from '@/views/Result';
import Review from '@/views/Review';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/review" element={<Review />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
