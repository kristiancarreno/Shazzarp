import { DEFAULT_IMAGE } from '@/_mocks/chat-list'
import AppIco from '@/assets/app-ico'
import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ChatMini } from '@/types/chats'
import { Avatar } from '@radix-ui/react-avatar'
import { Menu } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import ChatComponent from '../chats/chat-component'
import { useState } from 'react'

type Props = {
  chatList: ChatMini[]
}

export function LeftDrawer({ chatList }: Props) {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  return (
    <Drawer direction='left' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='hover:bg-hoveredButton' variant={'link'}>
          <Menu color='white' size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='w-[320px] h-full bg-customDarkGray border-customDarkGray'>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <div className='flex justify-center items-center gap-4'>
              <AppIco width={64} height={64} />
              <p className='font-semibold text-xl text-zinc-300'>Shazzapp</p>
            </div>
          </DrawerHeader>
          <nav className='flex lg:hidden flex-col overflow-y-auto gap-2 items-start w-full group-[[data-collapsed=true]]:items-center group-[[data-collapsed=true]]:px-2'>
            {chatList.length ? (
              chatList.map((link, index) => (
                <div className='w-full' key={index} onClick={() => setOpen(false)}>
                  <ChatComponent chat={link} isMobile={false} />
                </div>
              ))
            ) : (
              <p className='ml-2'>No chats found</p>
            )}
          </nav>
          <div className='p-4 pb-0 hidden lg:block'>
            <div className='flex flex-col items-center justify-center space-x-2 gap-2'>
              <div className='flex-1 text-center'>
                <Avatar className='flex justify-center items-center'>
                  <AvatarImage
                    src={session?.user?.image || DEFAULT_IMAGE}
                    width={96}
                    height={96}
                    className='rounded-md w-[96px] h-[96px] '
                  />
                </Avatar>
              </div>
              <DrawerTitle className='font-semibold text-zinc-300'>{session?.user?.name}</DrawerTitle>
              <DrawerDescription className='text-zinc-300'>{session?.user?.email}</DrawerDescription>
            </div>
          </div>
          <DrawerFooter className='hidden lg:flex flex-col gap-2'>
            <Button variant='destructive' onClick={() => signOut()}>
              Cerrar Sesión
            </Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cerrar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
