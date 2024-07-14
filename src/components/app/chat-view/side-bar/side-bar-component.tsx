'use client'
import React, { useEffect, useState } from 'react'
import { ChatMini } from '@/types/chats'
import Link from 'next/link'
import { LogOut, MoreHorizontal, Outdent, SquarePen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import ChatComponent from './chats/chat-component'
import { signOut } from 'next-auth/react'

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
    <div
      data-collapsed={isMobile}
      className='relative group flex flex-col h-screen gap-4 p-2 data-[collapsed=true]:w-1/5 w-96 data-[collapsed=true]:p-2 border-r-2'
    >
      {isMobile && <p className='font-medium'>Chats</p>}
      {!isMobile && (
        <div className='flex justify-between p-2 items-center'>
          <div className='flex gap-2 items-center text-2xl'>
            <p className='font-medium'>Chats</p>
            <span className='text-zinc-300'>({chatList.length})</span>
          </div>

          <div>
            <Button onClick={handleSignOut} variant={'ghost'}>
              <LogOut size={20} />
            </Button>

            <Link href='#' className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9')}>
              <SquarePen size={20} />
            </Link>
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
  )
}

export default SideBarComponent
