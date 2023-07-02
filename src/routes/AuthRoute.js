import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthImg from '../images/data-points.svg'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import ResetPassword from '../pages/Auth/ResetPassword'

export default function AuthRoute() {
  return (
    <main className="lg:flex min-h-screen">
      <div className='lg:w-50 w-full flex justify-center items-center lg:p-8 p-4'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <div className='lg:w-50 w-full bg-white flex justify-center items-center lg:p-8 p-4'>
        <img src={AuthImg} className='w-full' alt='Login' />
      </div>
    </main>
  )
}
