'use client'
import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Friends from "./components/Friends";
import Mobilenav from "./components/Mobilenav";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Home: React.FC = () => {
   const { data: session } = useSession();
   const [select, setSelect] = useState('')
   const [show,setShow]= useState('friend')
  const handleSelect =  (data: string) => {

     setSelect(data);
    setShow('chat')
   
      console.log(select)
   
  };

  const handleShow = (change :string)=>{
    setShow(change)
  }
  return (
   <>
   <div className=" md:flex w-screen h-screen">
    <div>

          <Navbar/>
          <Mobilenav/>
    </div>
    <div className="md:w-[calc(100vw-80px)] md:h-screen w-screen h-[calc(100vh-60px)] md:flex  block ">

      <div className={`md:w-[35%]  md:h-screen  w-screen h-[100vh-60px] ${show==='friend'? 'max-md:block':"max-md:hidden"}   `}>
        <Friends  onItemselect={handleSelect} />
       
     </div>
      <div className={`md:w-[65%]   md:h-screen h-full w-full] ${show==='chat'? '':"max-md:hidden"} `}>

        <Chat friend={select} onComChange ={handleShow} />
      </div>
    </div>
      </div>
   </>
  );
}
export default Home;
