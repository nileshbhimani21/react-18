import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import AuthRoute from './routes/AuthRoute';
import './styles/custom.scss';
import { userRolesApi } from './pages/Users/redux/userApi';

export default function App() {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userRolesApi())
  },[dispatch])
  return (
    <Router>
      {user !== null ? <PrivateRoute /> : <AuthRoute />}
    </Router>
  )
}


