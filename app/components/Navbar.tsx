//  this is a navbar component
'use client'
import { useSession,signOut  } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { RiLoginBoxLine } from "react-icons/ri";
import Link from 'next/link';
import { useEffect,useState } from 'react';

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname()
  const isactive = (route : string)=>pathname === route
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
        <nav className= 'md:w-[80px] md:h-[100vh] w-screen h-[60px] flex md:flex-col bg-slate-800 md:justify-between  justify-center max-md:gap-3 p-2 '>
            <ul className='flex md:flex-col gap-3 justify-center '>
                <Link href='/' className='ml-2 size-12 rounded-full flex justify-center items-center  cursor-pointer' ><IoChatboxEllipsesOutline className={`size-10   hover:shadow-sm hover:shadow-black  ${  isactive('/') ? 'text-blue-500' :' text-white' }`}/></Link>
                <Link href='/friends' className='ml-2 size-12 rounded-full flex justify-center items-center cursor-pointer' >
                <LiaUserFriendsSolid className={`size-10   hover:shadow-sm hover:shadow-black  ${  isactive('/friends') ? 'text-blue-500' :'text-white' }`} /></Link>
                
            </ul>
         
           <ul className='flex md:flex-col gap-3'>
             <Link href='/dashboard' className='ml-2 size-12 rounded-full  flex justify-center items-center  cursor-pointer'><CgProfile className={`size-10   hover:shadow-sm hover:shadow-black  ${  isactive('/dashboard') ? 'text-blue-500' :'text-white' }`}/></Link>
            {auth?(<>
           <li onClick={handleSignOut} className='ml-2 size-12 rounded-full flex justify-center items-center  cursor-pointer'> <CiLogout className='size-10   hover:shadow-sm hover:shadow-black invert'/></li>
          </>
          ):( <Link className='ml-2 size-12 rounded-full flex justify-center items-center  cursor-pointer' href='/login'> <RiLoginBoxLine className={`size-10   hover:shadow-sm hover:shadow-black  ${  isactive('/login') ? 'text-blue-500' :'text-white' }`}/></Link>)
          } 
             
           </ul>
        </nav>
    </>
  )
}

export default Navbar
 