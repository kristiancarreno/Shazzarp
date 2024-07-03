import { MessageSended } from '@/types/chats'
import React from 'react'
type Props = {
  message: MessageSended
  picture?: string
}
function SendedMessage({ message, picture }: Props) {
  return (
    <div className={`${message.username === 'kris' ? 'justify-end' : 'justify-start'} flex mb-4`}>
      <div
        className={`${message.username === 'kris' ? 'bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl' : 'bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl'} mr-2 py-3 px-4  text-white`}
      >
        <p className='font-bold'>{message.username}</p>
        {message.message}
      </div>
      <img
        src={
          picture ||
          'https://static.vecteezy.com/system/resources/thumbnails/025/337/669/small_2x/default-male-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg'
        }
        className='object-cover h-8 w-8 rounded-full'
        alt=''
      />
    </div>
  )
}

export default SendedMessage
