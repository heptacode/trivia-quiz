import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import '@/i18n';
import '@/index.css';
import { Router } from '@/Router';
import ErrorPage from '@/views/ErrorPage';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Trivia Quiz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <Container component="main" maxWidth="sm" sx={{ height: '100%' }}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </ErrorBoundary>
    </Container>
  </StrictMode>
);
