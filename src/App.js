import React, { Suspense } from 'react';
import { createBrowserHistory} from "history";
import { Spiner } from './components/Spiner';
import MainRoutes from './routes/MainRoutes';
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.scss'

export default function App({ store, persistor }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spiner />}>
          <Router history={createBrowserHistory()}>
            <MainRoutes />
          </Router>
        </Suspense>
      </PersistGate>
      <ToastContainer theme="colored" autoClose={2000} limit={1} />
    </Provider>
  )
}

