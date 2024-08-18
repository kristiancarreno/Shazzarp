'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { deleteChat } from '@/services/chats'
import { revalidateServerTags } from '@/utils/cache'
import { EllipsisVertical, Info, Trash } from 'lucide-react'
import React from 'react'

type Props = {
  id: string
}

function DropdownChatMenu({ id }: Props) {
  const deleteChatFromList = async () => {
    try {
      const { error } = await deleteChat(id)
      if (error) {
        throw new Error('Hubo un error al eliminar el chat')
      }
      toast({
        description: 'Chat eliminado correctamente',
        variant: 'default'
      })
      revalidateServerTags('chats')
    } catch (e) {
      console.log(e)
      toast({
        description: 'Hubo un error al eliminar el chat',
        variant: 'destructive'
      })
    }
  }

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
        <DropdownMenuItem onClick={deleteChatFromList}>
          <div className='flex cursor-pointer items-center gap-2'>
            <Trash size={20} color='red' />
            <span className='text-lg font-semibold text-red-500'>Delete</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownChatMenu
