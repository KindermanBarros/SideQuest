import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './pages/router/MainRouter';

const rootElement = document.getElementById('root');

if (rootElement) {
  const reactRoot = ReactDOM.createRoot(rootElement);
  reactRoot.render(<AppRouter />);
} else {
  throw new Error('Root element not found in the document.');
}

reportWebVitals();