'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSended } from '@/types/chats'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import ChatBottombar from './chat-bottom-bar'
import { DEFAULT_IMAGE } from '@/_mocks/chat-list'

interface ChatListProps {
  messages?: MessageSended[]
}

export function ChatList({ messages: data }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState(data ?? [])

  const sendMessage = (newMessage: MessageSended) => {
    messages.push(newMessage)
    setMessages(messages)
  }

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
      <div ref={messagesContainerRef} className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
        <AnimatePresence>
          {messages?.map((message, index) => (
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
                  duration: messages.indexOf(message) * 0.05 + 0.2
                }
              }}
              style={{
                originX: 0.5,
                originY: 0.5
              }}
              className={cn(
                'flex flex-col gap-2 p-4 whitespace-pre-wrap',
                message.username === 'kris' ? 'items-end' : 'items-start'
              )}
            >
              <div className='flex gap-3 items-center'>
                {message.username !== 'kris' && (
                  <Avatar className='flex justify-center items-center'>
                    <AvatarImage src={message.avatar || DEFAULT_IMAGE} alt={message.username} width={6} height={6} />
                  </Avatar>
                )}
                <span
                  className={cn(
                    'bg-gray-300 p-3 rounded-md max-w-xs flex flex-col gap-1',
                    message.username === 'kris' && 'bg-blue-400'
                  )}
                >
                  <span className='font-semibold'>{message.username}</span>
                  {message.message}
                </span>
                {message.username === 'kris' && (
                  <Avatar className='flex justify-center items-center'>
                    <AvatarImage src={message.avatar || DEFAULT_IMAGE} alt={message.username} width={6} height={6} />
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
