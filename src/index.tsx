import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './pages/router/Router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './themes/theme';

const root = document.getElementById('root');

if (root) {
 ReactDOM.render(
   <ThemeProvider theme={theme}>
       <CssBaseline />
       <AppRouter />
   </ThemeProvider>,
   root
 );
} else {
 throw new Error('Root element not found in the document.');
}

reportWebVitals();