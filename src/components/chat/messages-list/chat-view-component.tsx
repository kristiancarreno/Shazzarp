'use client'
import { Chat } from '@/types/chats'
import React, { useEffect } from 'react'
import ChatTopbar from './top-bar'
import { ChatList } from './chat-list-container'
import supabase from '@/utils/supabase'
import { revalidateServerTags } from '@/utils/cache'

export type Props = {
  chat: Chat
}

function ChatViewComponent({ chat }: Props) {
  useEffect(() => {
    const channel = supabase
      .channel(`chat-${chat.chatId}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Message' }, () => {
        revalidateServerTags('chat')
      })
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [chat])

  return (
    <div className='flex flex-col w-full h-screen justify-between'>
      <ChatTopbar selectedChat={chat} />
      <ChatList messages={chat.messages} chatId={chat.chatId} />
    </div>
  )
}

export default ChatViewComponent
