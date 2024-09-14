import EmptyState from '@/assets/empty-state'
import React from 'react'

function EmptyStateComponent() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <span className='font-semibold text-xl text-zinc-300'>No has seleccionado ningún chat</span>
      <EmptyState className='lg:w-[600px] lg:h-[400px] w-[300px] h-[300px]' />
    </div>
  )
}

export default EmptyStateComponent
