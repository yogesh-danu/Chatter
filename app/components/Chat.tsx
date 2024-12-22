import React from 'react'

const Chat = () => {
  return (
  <>
  <div className="chat bg-gray-600 w-full h-screen relative">
    <div className="chat-header bg-gray-800 w-full rounded-2xl h-16 p-3">
      <h2 className='text-slate-300   text-3xl   font-semibold   text-center'>@friends 's username</h2>
    </div>

    <div className="chat-messages w-full h-[calc(100%-64px)]">   


    <div className="chat-input absolute px-2 w-full bottom-0">
      <input type="text" placeholder="Type a message..."  className='md:w-[94%] min-h-10 rounded-lg text-wrap'/>
      <button className='bg-blue-500 text-white rounded-lg px-4 py-3 text-sm active:bg-blue-700 font-semibold hover:font-bold ml-1'>Send</button>
    </div>
    </div>
  </div>
  </>
  )
}

export default Chat