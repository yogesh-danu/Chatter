'use client'
import { useSession } from "next-auth/react";
import Chat from "./components/Chat";
import Friends from "./components/Friends";
import { redirect } from "next/navigation";

export default  function Home() {
   const { data: session } = useSession();
// ADD A REDIRECT ROUT HERE IF NOT LOG IN 
  
  return (
   <>
   <div className=" flex ">

      <div className="max-md:w-[35%] w-[40%] h-screen max-md:h-[100vh-60px] ">
        <Friends/>
       
      </div>
      <div className="w-[65%] md:w-[60%]">

        <Chat/>
      </div>
      </div>
   </>
  );
}
