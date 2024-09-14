import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ChatMini } from '@/types/chats'
import { Info } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function ChatDetailsModal({ chat }: { chat: ChatMini }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen>
      <DialogTrigger asChild>
        <Button className='hover:bg-hoveredButton' variant={'link'}>
          <Info color='white' size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-lightBlack border-none'>
        <DialogHeader>
          <DialogTitle className='text-zinc-300'>{chat.chatName}</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col justify-center items-center gap-4 py-4'>
          <Image className='rounded-lg' src={chat.image || ''} alt={chat.chatName ?? ''} width={100} height={100} />
          {chat.description && <p className='text-zinc-300 w-full'>Descripción: {chat.description}</p>}
          <p className='text-zinc-300 w-full'>Cantidad de Mensajes: {chat.messages}</p>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} className='w-full' type='submit'>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ChatDetailsModal
