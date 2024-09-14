import React from 'react'
import { Info, Phone, Video } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Chat, User } from '@/types/chats'
import { DEFAULT_IMAGE } from '@/_mocks/chat-list'
import ChatDetailsModal from '@/components/side-bar/modals/chat-details-modal'

interface ChatTopbarProps {
  selectedChat: Chat
}

export const TopbarIcons = [{ icon: Info }]

export default function ChatTopbar({ selectedChat }: ChatTopbarProps) {
  return (
    <div className='w-full h-19 p-3 flex justify-between items-center border-hoveredButton border-b-2'>
      <div className='flex items-center gap-2'>
        <Avatar className='flex justify-center items-center'>
          <AvatarImage
            src={selectedChat?.image || DEFAULT_IMAGE}
            alt={selectedChat?.chatName}
            width={6}
            height={6}
            className='w-10 h-10 '
          />
        </Avatar>
        <div className='flex flex-col'>
          <span className='font-bold text-zinc-300'>{selectedChat?.chatName}</span>
        </div>
      </div>

      <div>
        <ChatDetailsModal chat={{ ...selectedChat, messages: selectedChat.messages.length }} />
      </div>
    </div>
  )
}
