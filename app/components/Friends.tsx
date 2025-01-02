'use client'
import { useState } from 'react'
import React from 'react'
import SearchForm from './SearchForm'

interface ListComponentProps {
  onItemselect: (data: string) => void;

}
const Friends:React.FC<ListComponentProps> = ({onItemselect}) => {
    const friends:string[]=['yogesh','sanchit', 'naveen'] 
  return (  
    <div className={`  w-full h-screen bg-blue-950 p-2  overflow-y-scroll scrollbar-hide `}>
      <div className="header sticky ">
        <h2 className="text-4xl font-extrabold text-blue-100">Chats</h2>
        
      </div>
      {/*  to-do if i want to add a frriend serach feature its here to add */}
      <ul >
     {friends.map((friend:string)=>(
        <li onClick={()=>{onItemselect(friend);
        
        }} key={friend} className="friend md:w-[80%] md:h-[45px] pl-1 text-xl  rounded-xl  font-semibold border cursor-pointer border-orange-100 overflow-hidden text-nowrap text-white  py-1 mx-2 my-2 max-md:p-3 max-md:font-extrabold max-md:text-xl">
          @{friend}
        </li>
      ))}
    
   
     
      </ul>
    </div>
  )
}

export default Friends
