import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
const Quiz = lazy(() => import('@/views/Quiz'));
const Result = lazy(() => import('@/views/Result'));
const Review = lazy(() => import('@/views/Review'));
const ErrorPage = lazy(() => import('@/views/ErrorPage'));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
