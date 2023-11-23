import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  const reactRoot = ReactDOM.createRoot(rootElement);
  reactRoot.render(<App />);
} else {
  throw new Error('Root element not found in the document.');
}

reportWebVitals();