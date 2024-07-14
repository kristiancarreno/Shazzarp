import AuthGuard from '@/auth/auth-guard'
import ChatLayout from '@/components/app/chat-view/chat-layout'
import React from 'react'

export default function Layout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode
  sidebar: React.ReactNode
}>) {
  return (
    <AuthGuard>
      <ChatLayout sidebar={sidebar}>{children}</ChatLayout>
    </AuthGuard>
  )
}
