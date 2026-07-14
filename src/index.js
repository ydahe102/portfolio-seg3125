import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the portfolio inside the root element in index.html.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
