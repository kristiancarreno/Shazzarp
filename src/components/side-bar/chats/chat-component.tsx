'use client'

import { DEFAULT_IMAGE } from '@/_mocks/chat-list'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { ChatMini } from '@/types/chats'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import DropdownChatMenu from '../dropdown-menu/menu'

type Props = {
  chat: ChatMini
  isMobile: boolean
}

function ChatComponent({ chat, isMobile }: Props) {
  const path = usePathname()
  const getChatId = () => {
    const match = path.match(/\/chat-view\/(\d+)/)
    return match ? match[1] : null
  }
  return (
    <>
      {isMobile ? (
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={`/chat-view/${chat.chatId}`}
                className={cn(
                  'h-12 w-full flex justify-center items-center md:h-16 md:w-16 dark:bg-muted dark:text-muted-foreground hover:bg-hoveredButton rounded-md',
                  chat.chatId.toString() === getChatId() && 'bg-hoveredButton'
                )}
              >
                <Avatar className='flex justify-center items-center'>
                  <AvatarImage
                    src={chat.image || DEFAULT_IMAGE}
                    alt={chat.chatName ?? ''}
                    width={6}
                    height={6}
                    className='w-10 h-10 '
                  />
                </Avatar>{' '}
                <span className='sr-only'>{chat.chatName}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' className='flex items-center gap-4'>
              {chat.chatName}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div className='flex  w-full px-3 py-3 rounded-md items-center'>
          <Link
            key={chat.chatId}
            href={`/chat-view/${chat.chatId}`}
            className={cn(
              'flex gap-1 w-full px-3 py-3 rounded-md hover:bg-hoveredButton',
              chat.chatId.toString() === getChatId() && 'bg-hoveredButton'
            )}
          >
            <Avatar className='flex justify-center items-center'>
              <AvatarImage
                src={chat.image || DEFAULT_IMAGE}
                alt={chat.chatName ?? ''}
                width={6}
                height={6}
                className='w-10 h-10 '
              />
            </Avatar>
            <div className='flex w-full justify-between items-center ml-4'>
              <span className='font-bold text-zinc-300'>{chat.chatName}</span>
            </div>
          </Link>
          <div className='flex justify-center items-center'>
            <DropdownChatMenu id={chat.chatId} />
          </div>
        </div>
      )}
    </>
  )
}

export default ChatComponent
