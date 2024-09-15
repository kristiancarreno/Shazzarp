'use client'
import React, { useEffect, useState } from 'react'
import { ChatMini } from '@/types/chats'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ChatComponent from './chats/chat-component'
import { signOut } from 'next-auth/react'
import AppIco from '@/assets/app-ico'
import { CreateChatModal } from './modals/create-chat-modal'
import { LeftDrawer } from './drawer/left-drawer'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { revalidateServerPath } from '@/utils/cache'

type Props = {
  chatList: ChatMini[]
}

function SideBarComponent({ chatList }: Props) {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)
    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  useEffect(() => {
    const channel = supabase
      .channel('realtime Chats')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Chats' }, () => {
        revalidateServerPath('/chat-view/@sidebar')
      })
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [router])

  const handleSignOut = () => {
    signOut()
  }

  return (
    <div className='flex'>
      <div className='flex flex-col gap-2'>
        <LeftDrawer chatList={chatList} />
        <CreateChatModal />
        <Button className='hover:bg-hoveredButton' onClick={handleSignOut} variant={'link'}>
          <LogOut color='white' size={20} />
        </Button>
      </div>
      <div
        data-collapsed={isMobile}
        className='hidden lg:flex bg-customDarkGray relative group flex-col h-screen gap-2 pl-2 pt-2  data-[collapsed=true]:w-4/5 w-96 data-[collapsed=true]:p-2 border-hoveredButton border-r-2'
      >
        {isMobile && <p className='font-medium text-zinc-300'>Chats</p>}
        {!isMobile && (
          <div className='flex justify-between p-2 items-center border-hoveredButton border-b-2'>
            <div className='flex gap-2 items-center text-2xl'>
              <AppIco />
              <p className='font-medium text-zinc-300'>Chats</p>
              <span className='text-zinc-300'>({chatList.length})</span>
            </div>
          </div>
        )}
        <nav className='flex flex-col overflow-y-auto gap-2 items-start w-full group-[[data-collapsed=true]]:items-center group-[[data-collapsed=true]]:px-2'>
          {chatList.length ? (
            chatList.map((link, index) => <ChatComponent key={index} chat={link} isMobile={isMobile} />)
          ) : (
            <p className='ml-2'>No chats found</p>
          )}
        </nav>
      </div>
    </div>
  )
}

export default SideBarComponent
