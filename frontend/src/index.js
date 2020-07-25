import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import axios from 'axios';

import { getToken } from './services/auth';
import Routes from './routes';
import store from './redux/store';

axios.defaults.baseURL = 'http://localhost:3333/api';
axios.interceptors.request.use(function (config) {
  let token = getToken()
  if (token) {
    token = `Bearer ${token}`;
    config.headers.Authorization = token;
  }

  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
