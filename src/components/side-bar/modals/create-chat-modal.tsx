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
import { useToast } from '@/components/ui/use-toast'
import { createChat } from '@/services/chats'
import { revalidateServerTags } from '@/utils/cache'
import { SquarePen } from 'lucide-react'
import { useState } from 'react'

export function CreateChatModal() {
  const [name, setName] = useState('')
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const createNewChat = async () => {
    try {
      const { data, error } = await createChat(name, `http://gravatar.com/avatar/${name}?d=identicon`)

      if (error || !data) {
        throw new Error('Hubo un error al crear el chat')
      }
      toast({
        description: 'Chat creado correctamente',
        variant: 'default'
      })
      setOpen(false)
    } catch (e) {
      console.log(e)
      toast({
        description: 'Hubo un error al crear el chat',
        variant: 'destructive'
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
        <div className='grid gap-4 py-4'>
          <div className='flex flex-col items-start gap-2'>
            <Label htmlFor='name' className='text-left text-zinc-300'>
              Name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='Escribe un nombre'
              className='w-full'
            />
          </div>
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
