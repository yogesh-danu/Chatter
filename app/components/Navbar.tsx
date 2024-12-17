//  this is a navbar component
'use client'
import { useSession,signOut  } from 'next-auth/react';
import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineGroups } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { RiLoginBoxLine } from "react-icons/ri";
import Link from 'next/link';
import { useEffect,useState } from 'react';

const Navbar = () => {
  const session = useSession();
  const [auth, setauth] = useState(false)
  useEffect(() => {
    if (session.status ==="authenticated") {
      setauth(true)
    }
  
    else{
      setauth(false)
    }
    
  }, )
  
  const handleSignOut = () => {
    signOut();
  };

  return (
    

    <>
        <nav className= 'md:w-[70px] md:h-[100vh] w-screen h-[60px] flex md:flex-col bg-slate-800 md:justify-between md:gap-2 justify-center gap-3 p-2 '>
            <ul className='flex md:flex-col gap-3 justify-center '>
                <li className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer' ><IoChatboxEllipsesOutline className='size-6   hover:shadow-sm hover:shadow-black invert'/></li>
                <li className='ml-2 size-8 rounded-full flex justify-center items-center cursor-pointer' >
                <LiaUserFriendsSolid className='size-6   hover:shadow-sm hover:shadow-black invert' /></li>
                <li className='ml-2  size-8 rounded-full flex justify-center items-center  cursor-pointer' >
                <MdOutlineGroups className='size-6  hover:shadow-sm hover:shadow-black invert'/>
                </li>
                
            </ul>
         
           <ul className='flex md:flex-col gap-3'>
             <li className='ml-2 size-8 rounded-full  flex justify-center items-center  cursor-pointer'><CgProfile className='size-6   hover:shadow-sm hover:shadow-black invert'/></li>
             <li className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer'><IoIosSettings className='size-6   hover:shadow-sm hover:shadow-black invert' /></li>
            {auth?(<>
           <li onClick={handleSignOut} className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer'> <CiLogout className='size-6   hover:shadow-sm hover:shadow-black invert'/></li>
          </>
          ):( <Link className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer' href='/login'> <RiLoginBoxLine className='size-6   hover:shadow-sm hover:shadow-black invert'/></Link>)
          } 
             
           </ul>
        </nav>
    </>
  )
}

export default Navbar
