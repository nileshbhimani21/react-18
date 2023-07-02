import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import AuthRoute from './routes/AuthRoute';
import './styles/custom.scss';

export default function App({ store }) {
  const { user } = useSelector(state => state.auth)
  return (
    <Router>
      {user !== null ? <PrivateRoute /> : <AuthRoute />}
    </Router>
  )
}


