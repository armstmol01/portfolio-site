import React from 'react';
import ReactDOM from 'react-dom'; // react-dom/client is v18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(  // v17 of react uses ReactDOM.render, v18 uses root.render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
