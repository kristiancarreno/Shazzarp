'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { revalidateServerTags } from '@/utils/cache'
import { EllipsisVertical, Info, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  id: string
}

function DropdownChatMenu({ id }: Props) {
  const router = useRouter()
  // const deleteChatFromList = async () => {
  //   try {
  //     const { error } = await deleteChat(id)
  //     if (error) {
  //       throw new Error('Hubo un error al eliminar el chat')
  //     }
  //     toast({
  //       description: 'Chat eliminado correctamente',
  //       variant: 'default'
  //     })
  //     router.push('/chat-view')
  //     revalidateServerTags('chats')
  //   } catch (e) {
  //     console.log(e)
  //     toast({
  //       description: 'Hubo un error al eliminar el chat',
  //       variant: 'destructive'
  //     })
  //   }
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical color='white' size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem>
          <div className='flex cursor-pointer items-center gap-2'>
            <Info size={20} />
            <span className='text-lg font-semibold'>Info</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownChatMenu
