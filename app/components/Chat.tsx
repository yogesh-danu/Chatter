import React, { useEffect, useState } from 'react';
import { IoSendOutline } from 'react-icons/io5';
import { BiLeftArrowAlt } from 'react-icons/bi';

interface FriendProp {
  friend: string;
  onComChange :(change:string)=>void;
}

const Chat: React.FC<FriendProp> = ({ friend, onComChange }) => {
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (friend === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [friend]);

  return (
    <>
      {empty ? (<>
      
      

        <div className="no-friend bg-red-500 text-white w-full h-full flex items-center justify-center max-md:hidden">

          <p className="text-3xl font-bold">Please select a friend to start chatting.</p>
        </div>
      </>
      ) : (
        <div className="chat bg-indigo-600 w-full h-full relative ">
          {/* Chat Header */}
          <div className="chat-header bg-blue-800 w-full rounded-xl max-md:py-3 max-md:flex md:h-14 md:p-5  ">
          <div className="back md:hidden"><BiLeftArrowAlt onClick={()=>onComChange('friend')} className='hover:text-black text-white size-6 '/></div>
            <h2 className="text-slate-300 md:text-3xl text-xl font-semibold text-center absolute left-[35%] top-1">
              @{friend}
            </h2>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages w-full max-md:h-[calc(100%-36px)] md:h-[calc(100%-56px)] relative  overflow-y-scroll  scrollbar-hide ">
            <div className="receive-chat"></div>
            <div className="send-chat"></div>

            {/* Chat Input */}
            <div className="chat-input absolute px-1 w-full max-md:bottom-3 bottom-[2px] justify-center  items-center ml-2 ">
              <form action="" method="post" className="flex w-full items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="md:w-[85%] min-h-9 rounded-lg overflow-y-scroll w-[85%] lg:w-[93%] p-2"
                />
                <button
                  className="bg-blue-500 text-white rounded-full size-11 text-sm hover:bg-blue-900 font-semibold  hover:font-bold ml-1 flex items-center justify-center"
                  type="submit"
                >
                  <IoSendOutline className="text-lg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;

