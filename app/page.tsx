'use client'
import { useSession } from "next-auth/react";
import Chat from "./components/Chat";
import Friends from "./components/Friends";
import { redirect } from "next/navigation";

export default  function Home() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }
  return (
   <>
   <div className="pr flex w-screen md:w-[calc(100vw-70px)] h-[100vh-60px] md:h-screen">{ /*container for pararalle route */}

      <div className="max-md:w-[35%] w-[250px] h-screen max-md:h-[100vh-60px] cursor-pointer bg-green-950  p-2">
        <Friends/>
       
      </div>
      <div className="w-[65%] h-screen">

        <Chat/>
      </div>
      </div>
   </>
  );
}
