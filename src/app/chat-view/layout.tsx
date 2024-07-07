import ChatLayout from '@/components/app/chat-view/chat-layout'
import React from 'react'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ChatLayout>{children}</ChatLayout>
}
