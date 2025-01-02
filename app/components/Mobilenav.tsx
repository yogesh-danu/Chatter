'use client'
import React, {useEffect, useState} from 'react'
import { useSession,signOut  } from 'next-auth/react';
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { CiLogout } from 'react-icons/ci'
import { RiLoginBoxLine } from 'react-icons/ri'
const Mobilenav = () => {
      const pathname = usePathname()
        const session = useSession();
      
      const isactive = (route : string)=>pathname === route
      const [auth, setauth] = useState(false)
        useEffect(() => {

          if (session.status ==="authenticated") {
            setauth(true)
          }
        
          else{
            setauth(false)
          
          }
         
          
          
        }, [])
        
        const handleSignOut = () => {
          signOut();
        };

    
  return (
    <>
  <nav className="text-white md:hidden bg-blue-800 h-[60px] p-1 opacity-50 justify-between w-screen flex">
    <div className="logo pt-1.5">
        <Image src='/logo.png' height={50} width={70} alt='logo' className='bg-transparent'/>
    </div>

    <ul className='flex gap-2 py-3 '>
    <Link href='/' className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer' ><IoChatboxEllipsesOutline className={`size-6   hover:shadow-sm hover:shadow-black  ${  isactive('/') ? 'text-white' :' text-gray-800' }`}/></Link>     
    <Link href='/friends' className='ml-2 size-8 rounded-full flex justify-center items-center cursor-pointer' >
                <LiaUserFriendsSolid className={`size-6   hover:shadow-sm hover:shadow-black  ${  isactive('/friends') ? 'text-white' :'text-gray-800' }`} /></Link>
                <Link href='/dashboard' className='ml-2 size-8 rounded-full  flex justify-center items-center  cursor-pointer'><CgProfile className={`size-6   hover:shadow-sm hover:shadow-black  ${  isactive('/dashboard') ? 'text-white' :'text-gray-800'}`}/></Link>  
                {auth?(<>
           <li onClick={handleSignOut} className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer'> <CiLogout className='size-6   hover:shadow-sm hover:shadow-black invert'/></li>
          </>
          ):( <Link className='ml-2 size-8 rounded-full flex justify-center items-center  cursor-pointer' href='/login'> <RiLoginBoxLine className={`size-6   hover:shadow-sm hover:shadow-black  ${  isactive('/login') ? 'text-white' :' text-gray-800' }`}/></Link>)
          }     </ul>
  </nav>
    </>
  )
}

export default Mobilenav