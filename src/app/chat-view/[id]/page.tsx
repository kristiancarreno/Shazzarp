import { chatsData } from '@/_mocks/chat-list'
import ChatViewComponent from '@/components/app/chat-view/chat-list/chat-view-component'
import React from 'react'

export default async function Home({ params }: { params: { id: number } }) {
  const chat = chatsData.find((chat) => chat.id.toString() === params.id.toString())
  return chat ? <ChatViewComponent chat={chat} /> : <></>
}
