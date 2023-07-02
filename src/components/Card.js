import React from 'react'

export default function Card({children}) {
  return (
    <div className='bg-white lg:p-8 p-4 rounded-lg mb-5 shadow'>{children}</div>
  )
}
