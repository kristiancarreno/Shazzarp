/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SmileIcon } from 'lucide-react'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import React from 'react'

interface EmojiPickerProps {
  onChange: (value: string) => void
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon color='white' className='h-5 w-5 text-muted-foreground hover:text-foreground transition' />
      </PopoverTrigger>
      <PopoverContent className='w-full bg-transparent border-0'>
        <Picker
          emojiSize={18}
          theme='dark'
          data={data}
          maxFrequentRows={1}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  )
}
