// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importing BrowserRouter
import App from './App';

ReactDOM.render(
  <Router> {/* Use BrowserRouter here */}
    <App />
  </Router>,
  document.getElementById('root')
);
