// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/app.css'; // Import your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
