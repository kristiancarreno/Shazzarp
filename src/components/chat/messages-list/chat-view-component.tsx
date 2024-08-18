import { Chat } from '@/types/chats'
import React from 'react'
import ChatTopbar from './top-bar'
import { ChatList } from './chat-list-container'

export type Props = {
  chat: Chat
}

function ChatViewComponent({ chat }: Props) {
  return (
    <div className='flex flex-col w-full h-screen justify-between'>
      <ChatTopbar selectedChat={chat} />
      <ChatList messages={chat.messages} />
    </div>
  )
}

export default ChatViewComponent
