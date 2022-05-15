import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/component/App';
import axios from 'axios';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
// axios.defaults.baseURL="http://localhost:8080" // 공유하는 도메인 적기
axios.defaults.withCredentials = true;

ReactDOM.render(
      <App />,
  document.getElementById('root')
);
