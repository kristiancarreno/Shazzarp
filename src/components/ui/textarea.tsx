import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  prependIcon?: React.ReactNode
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <div className='flex items-center'>
      {props.prependIcon}
      <textarea
        className={cn(
          'flex w-full rounded-md border bg-white px-3 py-2 text-sm  placeholder:text-zinc-300 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50   ',
          className
        )}
        ref={ref}
        {...props}
      ></textarea>
    </div>
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
