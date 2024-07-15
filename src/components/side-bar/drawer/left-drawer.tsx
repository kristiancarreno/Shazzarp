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
import { Avatar } from '@radix-ui/react-avatar'
import { Menu } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

export function LeftDrawer() {
  const { data: session } = useSession()
  return (
    <Drawer direction='left'>
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
          <div className='p-4 pb-0'>
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
          <DrawerFooter>
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
