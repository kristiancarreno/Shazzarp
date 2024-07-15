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
import { SquarePen } from 'lucide-react'

export function CreateChatModal() {
  return (
    <Dialog>
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
            <Input id='name' placeholder='Escribe un nombre' className='w-full' />
          </div>
        </div>
        <DialogFooter>
          <Button className='w-full' type='submit'>
            Crear
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
