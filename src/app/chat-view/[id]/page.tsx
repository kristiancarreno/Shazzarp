import ChatViewComponent from '@/components/chat/messages-list/chat-view-component'
import ErrorStateComponent from '@/components/chat/states/error-state'
import { getChatDetails } from '@/services/chats'
import React from 'react'

export default async function Home({ params }: { params: { id: string } }) {
  const chat = await getChatDetails(params.id)

  return chat ? <ChatViewComponent chat={chat} /> : <ErrorStateComponent />
}
