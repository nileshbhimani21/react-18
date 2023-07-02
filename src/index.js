import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import * as _redux from "./redux/index";
import axios from "axios";
import { Provider } from 'react-redux';
import { Spiner } from './components/Spiner';
import { ToastContainer } from 'react-toastify';

_redux.setupAxios(axios, store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spiner />}>
        <App />
      </Suspense>
      <ToastContainer autoClose={2000} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
