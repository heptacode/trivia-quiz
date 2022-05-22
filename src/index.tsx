import '@/i18n';
import '@/index.css';
import { Router } from '@/Router';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Trivia Quiz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Container component="main" maxWidth="sm">
      <Router />
    </Container>
  </React.StrictMode>
);
