import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthImg from '../../images/data-points.svg'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'

export default function AuthRoute() {
  return (
    <main className="container lg:flex justify-center items-center min-h-screen">
      <div className='lg:w-50 w-full'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <div className='lg:w-50 w-full'>
        <img src={AuthImg} className='w-full' alt='Login' />
      </div>
    </main>
  )
}
