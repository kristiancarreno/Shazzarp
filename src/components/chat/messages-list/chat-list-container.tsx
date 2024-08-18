'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSended } from '@/types/chats'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import ChatBottombar from '../input-area/chat-bottom-bar'
import { DEFAULT_IMAGE } from '@/_mocks/chat-list'
import { getRandomLightColor } from '@/utils/style'
import { useSession } from 'next-auth/react'
import { sendMessageToChat } from '@/services/message'

interface ChatListProps {
  messages?: MessageSended[]
  chatId: string
}

export function ChatList({ messages: data, chatId }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()

  const sendMessage = (newMessage: { message: string }) => {
    sendMessageToChat(chatId, session?.user.id ?? '', newMessage.message)
  }

  return (
    <div
      style={{ backgroundImage: `url('/images/BG.jpeg')` }}
      className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'
    >
      <div ref={messagesContainerRef} className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
        <AnimatePresence>
          {data?.map((message, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: data.indexOf(message) * 0.05 + 0.2
                }
              }}
              style={{
                originX: 0.5,
                originY: 0.5
              }}
              className={cn(
                'flex flex-col gap-2 p-4 whitespace-pre-wrap',
                message.user.name === session?.user?.name ? 'items-end' : 'items-start'
              )}
            >
              <div className='flex gap-3 items-center'>
                {message.user.name !== session?.user?.name && (
                  <Avatar className='flex justify-center items-center'>
                    <AvatarImage
                      src={message.user.image || DEFAULT_IMAGE}
                      alt={message.user.name ?? ''}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
                <span
                  className={cn(
                    'bg-otherUserMessage p-3 rounded-md max-w-xs flex flex-col gap-1',
                    message.user.name === session?.user?.name && 'bg-loggedUserMessage'
                  )}
                >
                  {message.user.name !== session?.user?.name && (
                    <span style={{ color: getRandomLightColor() }} className={`font-semibold`}>
                      {message.user.name}
                    </span>
                  )}
                  <p className='text-zinc-300'>{message.message}</p>
                </span>
                {message.user.name === session?.user?.name && (
                  <Avatar className='flex justify-center items-center'>
                    <AvatarImage
                      src={message.user.image || DEFAULT_IMAGE}
                      alt={message.user.name ?? ''}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ChatBottombar sendMessage={sendMessage} />
    </div>
  )
}
