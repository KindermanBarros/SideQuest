import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './pages/router/Router';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
    root
  );
} else {
  throw new Error('Root element not found in the document.');
}

reportWebVitals();