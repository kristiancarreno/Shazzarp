import { chatList } from '@/_mocks/chat-list'
import SideBarComponent from '@/components/app/chat-view/side-bar/side-bar-component'
import React from 'react'

export default function ChatLayout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode
  sidebar: React.ReactNode
}>) {
  return (
    <main className='flex flex-1  w-screen '>
      {sidebar}
      <div className='max-w-screen-2xl w-full'>{children}</div>
    </main>
  )
}
