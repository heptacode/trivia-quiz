import '@/index.css';
import Router from '@/Router';
import { AppBar, Typography } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppBar position="fixed">
      <Typography variant="h5" noWrap>
        &nbsp;
      </Typography>
    </AppBar>
    <Router />
  </React.StrictMode>
);
