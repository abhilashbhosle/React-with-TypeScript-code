import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Addition from "./Addition"
import Multiplication from './Multiplication';
import Subtraction from './Subtraction';

ReactDOM.render(
  <React.StrictMode>
    <Addition />
    <hr></hr>
    <Multiplication/>
    <hr></hr>
    <Subtraction/>
    <hr></hr>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
