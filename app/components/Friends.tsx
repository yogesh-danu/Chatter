'use client'
import React from 'react'
import SearchForm from './SearchForm'

const Friends = () => {
  return (  
    <div className='  w-full h-screen bg-gray-950 p-2'>
      <div className="header">
        <h2 className="text-4xl font-extrabold text-blue-100">Chats</h2>
        
      </div>
      <div className="search">
        <SearchForm/>
      </div>
      <ul>

      <li onClick={()=>{console.log("yo ha ha ")}} className="friend w-[80%] h-[45px] text-xl  rounded-xl  font-semibold border cursor-pointer border-orange-100 overflow-hidden text-nowrap text-white  max-md:text-xs  py-1 mx-2 my-3">
        @username of friend
      </li>
      </ul>
    </div>
  )
}

export default Friends
