'use client'

import { Badge } from '@/components/ui/badge'
import { ChatMini } from '@/types/chats'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  chat: ChatMini
}

function ChatComponent({ chat }: Props) {
  const router = useRouter()
  const selectChat = () => {
    router.push(`/${chat.id}`)
  }
  return (
    <div onClick={selectChat} className='flex flex-row py-4 px-2 justify-center items-center border-b-2 cursor-pointer'>
      <div className='w-1/4'>
        <Image
          src={
            chat.picture ||
            'https://static.vecteezy.com/system/resources/thumbnails/025/337/669/small_2x/default-male-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg'
          }
          width={48}
          height={48}
          className='object-cover rounded-full'
          alt=''
        />
      </div>
      <div className='w-full'>
        <div className='text-lg font-semibold'>{chat.name}</div>
        <p className='text-gray-500 max-w-[180px] overflow-hidden text-ellipsis text-nowrap'>{chat.lastMessage}</p>
      </div>
      {chat.pendingMessages > 0 && (
        <div>
          <Badge className='bg-green-600 hover:bg-green-600 cursor-default' variant={'default'}>
            {chat.pendingMessages}
          </Badge>
        </div>
      )}
    </div>
  )
}

export default ChatComponent
