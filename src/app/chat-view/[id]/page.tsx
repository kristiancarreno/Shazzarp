import { chatsData } from '@/_mocks/chat-list'
import ChatViewComponent from '@/components/chat/messages-list/chat-view-component'
import ErrorStateComponent from '@/components/chat/states/error-state'
import React from 'react'

export default async function Home({ params }: { params: { id: number } }) {
  const chat = chatsData.find((chat) => chat.id.toString() === params.id.toString())
  return chat ? <ChatViewComponent chat={chat} /> : <ErrorStateComponent />
}
