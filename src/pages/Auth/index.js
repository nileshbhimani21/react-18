import React from 'react'
import AuthImg from '../../images/data-points.svg'

export default function Auth() {
  return (
    <main className="container lg:flex justify-center items-center min-h-screen">
      <div className='lg:w-50 w-full'>
        <h1 className="text-primary">
          Welcome to Next.js!
        </h1>
      </div>
      <div className='lg:w-50 w-full'>
        <img src={AuthImg} className='w-full' alt='Login' />
      </div>
    </main>
  )
}
