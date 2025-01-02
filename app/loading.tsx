import React from 'react'
import './globals.css'

const loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen '>
          <p className='text-xl font-semibold text-gray-700'>Loading...</p>
      <div className='loader bg-yellow-200    md:w-20 md:h-2 h-20 w-20'></div>
    </div>
  )
}

export default loading