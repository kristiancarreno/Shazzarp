import ChatViewComponent from '@/components/chat/messages-list/chat-view-component'
import ErrorStateComponent from '@/components/chat/states/error-state'
import { getChatDetails } from '@/services/chats'
import React from 'react'

export default async function Home({ params }: { params: { id: string } }) {
  const { data: chat, error } = await getChatDetails(params.id)
  if (error) return
  return chat ? <ChatViewComponent chat={chat.data} /> : <ErrorStateComponent />
}
