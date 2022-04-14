import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/component/App';
// import axios from 'axios';

// axios.defaults.baseURL="https://www.~~" // 공유하는 도메인 적기
// axios.defaults.withCredentials = true;

ReactDOM.render(
  // <BrowserRouter>
    <App />,
  // </BrowserRouter>,
  document.getElementById('root')
);
