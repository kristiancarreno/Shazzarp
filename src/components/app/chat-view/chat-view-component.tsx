import { Chat } from '@/types/chats'
import React from 'react'
import SendedMessage from './sended-message'
import Image from 'next/image'

export type Props = {
  chat: Chat
}

function ChatViewComponent({ chat }: Props) {
  return (
    <div className='flex flex-col w-full h-screen px-5  justify-between'>
      <div className='py-5 flex justify-start items-center bg-white border-b-2 '>
        <Image
          src={
            chat.userFriend.picture ||
            'https://static.vecteezy.com/system/resources/thumbnails/025/337/669/small_2x/default-male-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg'
          }
          width={48}
          height={48}
          className='object-cover rounded-full'
          alt=''
        />
        <div className='font-semibold text-2xl ml-2'>{chat.userFriend.username}</div>
      </div>
      <div className='flex h-full flex-col overflow-y-auto mt-5'>
        {chat.messages.map((message, index) => (
          <SendedMessage key={index} message={message} picture={chat.userFriend.picture} />
        ))}
      </div>
      <div className='py-5'>
        <input
          className='w-full bg-gray-300 py-5 px-3 rounded-xl'
          type='text'
          placeholder='Type your message here...'
        />
      </div>
    </div>
  )
}

export default ChatViewComponent
