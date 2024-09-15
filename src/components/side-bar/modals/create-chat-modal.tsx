import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createChat } from '@/services/chats'
import { SquarePen } from 'lucide-react'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify'

export function CreateChatModal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false)
  const createNewChat = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 1000) + 1

      const res = await createChat(name, description, `http://gravatar.com/avatar/${randomNumber}?d=identicon`)

      if (!res) {
        throw new Error('Hubo un error al crear el chat')
      }
      toast.success('Chat Creado', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce
      })
      setName('')
      setDescription('')
      setOpen(false)
    } catch (e) {
      console.log(e)
      toast.error('Hubo un error al crear el chat', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen>
      <DialogTrigger asChild>
        <Button className='hover:bg-hoveredButton' variant={'link'}>
          <SquarePen color='white' size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-lightBlack border-none'>
        <DialogHeader>
          <DialogTitle className='text-zinc-300'>Crea un nuevo Chat</DialogTitle>
          <DialogDescription className='text-zinc-300'>
            Crea un nuevo chat para que todos los miembros puedan acceder.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4 py-4'>
          <div className='flex flex-col items-start gap-2'>
            <Label htmlFor='name' className='text-left text-zinc-300'>
              Name *
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='Escribe un nombre'
              className='w-full'
              required
            />
          </div>
          <Label htmlFor='name' className='text-left text-zinc-300'>
            Description
          </Label>
          <Textarea autoComplete='off' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <DialogFooter>
          <Button onClick={createNewChat} className='w-full' type='submit'>
            Crear
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
