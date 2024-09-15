import { FileImage, Mic, Paperclip, PlusCircle, SendHorizontal, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { DEFAULT_IMAGE } from '@/_mocks/chat-list'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { buttonVariants } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { EmojiPicker } from './emoji-picker'

interface ChatBottombarProps {
  sendMessage: (newMessage: { message: string }) => void
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }]

export default function ChatBottombar({ sendMessage }: ChatBottombarProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleThumbsUp = () => {
    const newMessage = {
      message: '👍'
    }
    sendMessage(newMessage)
    setMessage('')
  }

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        message: message.trim()
      }
      sendMessage(newMessage)
      setMessage('')

      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }

    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault()
      setMessage((prev) => prev + '\n')
    }
  }

  return (
    <div className='p-2 flex justify-between w-full items-center gap-2'>
      <div className='flex'>
        <Popover>
          <PopoverContent side='top' className='w-full p-2'>
            {message.trim() ? (
              <div className='flex gap-2'>
                <Link
                  href='#'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'h-9 w-9',
                    'dark:bg-muted dark:text-muted-foreground hover:bg-hoveredButton'
                  )}
                >
                  <Mic color='white' size={20} className='text-muted-foreground' />
                </Link>
                {BottombarIcons.map((icon, index) => (
                  <Link
                    key={index}
                    href='#'
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'h-9 w-9',
                      'dark:bg-muted dark:text-muted-foreground hover:bg-hoveredButton'
                    )}
                  >
                    <icon.icon color='white' size={20} className='text-muted-foreground' />
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href='#'
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9',
                  'dark:bg-muted dark:text-muted-foreground hover:bg-hoveredButton'
                )}
              >
                <Mic color='white' size={20} className='text-muted-foreground' />
              </Link>
            )}
          </PopoverContent>
        </Popover>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key='input'
          className='w-full relative'
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: 'spring',
              bounce: 0.15
            }
          }}
        >
          <Textarea
            autoComplete='off'
            value={message}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            name='message'
            placeholder='Aa'
            className='w-full border rounded-full ring-offset-hoveredButton flex items-center h-9 resize-none overflow-hidden bg-background bg-customDarkGray border-hoveredButton text-zinc-300 target:border-hoveredButton'
          />
          <div className='absolute right-2 top-2'>
            <EmojiPicker
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(value: any) => {
                setMessage(message + value)
                if (inputRef.current) {
                  inputRef.current.focus()
                }
              }}
            />
          </div>
        </motion.div>

        {message.trim() ? (
          <Link
            href='#'
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0'
            )}
            onClick={handleSend}
          >
            <SendHorizontal color='white' size={20} className='text-muted-foreground' />
          </Link>
        ) : (
          <Link
            href='#'
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'dark:bg-muted dark:text-muted-foreground hover:bg-hoveredButton shrink-0'
            )}
            onClick={handleThumbsUp}
          >
            <ThumbsUp color='white' size={20} className='text-muted-foreground' />
          </Link>
        )}
      </AnimatePresence>
    </div>
  )
}
