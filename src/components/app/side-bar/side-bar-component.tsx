import React from 'react'
import ChatComponent from './chats/chat-component'
import { ChatMini } from '@/types/chats'
import TopBarComponent from '../top-bar/top-bar-component'

type Props = {
  chatList: ChatMini[]
}

function SideBarComponent({ chatList }: Props) {
  return (
    <div className='flex flex-col h-screen w-5/6 lg:w-2/6 border-r-2'>
      <TopBarComponent />
      <div className='h-full overflow-y-auto'>
        {chatList.map((chat, index) => (
          <ChatComponent key={index} chat={chat} />
        ))}
      </div>
    </div>
  )
}

export default SideBarComponent
