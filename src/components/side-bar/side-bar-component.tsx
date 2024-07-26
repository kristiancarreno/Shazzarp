'use client'
import React, { useEffect, useState } from 'react'
import { ChatMini } from '@/types/chats'
import Link from 'next/link'
import { LogOut, MoreHorizontal, Outdent, Search, SquarePen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import ChatComponent from './chats/chat-component'
import { signOut } from 'next-auth/react'
import AppIco from '@/assets/app-ico'
import { Textarea } from '../ui/textarea'
import { CreateChatModal } from './modals/create-chat-modal'
import { LeftDrawer } from './drawer/left-drawer'

type Props = {
  chatList: ChatMini[]
}

function SideBarComponent({ chatList }: Props) {
  const [isMobile, setIsMobile] = useState(false)

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

  const handleSignOut = () => {
    signOut()
  }

  return (
    <div className='flex'>
      {!isMobile && <LeftDrawer />}
      <div
        data-collapsed={isMobile}
        className='bg-customDarkGray relative group flex flex-col h-screen gap-2 pl-2 pt-2  data-[collapsed=true]:w-4/5 w-96 data-[collapsed=true]:p-2 border-hoveredButton border-r-2'
      >
        {isMobile && <p className='font-medium text-zinc-300'>Chats</p>}
        {!isMobile && (
          <div className='flex justify-between p-2 items-center border-hoveredButton border-b-2'>
            <div className='flex gap-2 items-center text-2xl'>
              <AppIco />
              <p className='font-medium text-zinc-300'>Chats</p>
              <span className='text-zinc-300'>({chatList.length})</span>
            </div>

            <div>
              <Button className='hover:bg-hoveredButton' onClick={handleSignOut} variant={'link'}>
                <LogOut color='white' size={20} />
              </Button>
              <CreateChatModal />
            </div>
          </div>
        )}
        {!isMobile && (
          <div className='flex flex-col gap-2 pr-2.5'>
            <div className='px-2 border rounded-lg border-hoveredButton bg-lightBlack'>
              <Textarea
                autoComplete='off'
                name='message'
                placeholder='Aa'
                prependicon={<Search color='white' size={20} />}
                className='w-full border rounded-md flex items-center h-9 resize-none overflow-hidden bg-transparent border-none text-zinc-300 target:border-none'
              />
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
