import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/component/App';
import axios from 'axios';
import {RecoilRoot, atom} from 'recoil';

axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080';
axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://192.168.0.170:8080';

axios.defaults.withCredentials = true;

ReactDOM.render(
  <RecoilRoot>
      <App />
  </RecoilRoot>,
  document.getElementById('root')
);
