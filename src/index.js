import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals'; // Import the reporting function
import "./style.css";
import { BrowserRouter } from "react-router-dom"

const root = document.getElementById('root'); // Find the root element in the HTML
ReactDOM.createRoot(root).render( // Create a root and render your App component
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, call the reporting function
// For example: reportWebVitals(console.log)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
