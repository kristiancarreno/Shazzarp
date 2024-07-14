import SideBarComponent from '@/components/app/chat-view/side-bar/side-bar-component'
import { getChats } from '@/services/chats'
import { Suspense } from 'react'

export default async function Page() {
  const res = await getChats()
  if (res.error) return
  return <SideBarComponent chatList={res.data ?? []} />
}
