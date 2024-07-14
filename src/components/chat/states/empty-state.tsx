import EmptyState from '@/assets/empty-state'
import React from 'react'

function EmptyStateComponent() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <span className='font-semibold text-xl text-zinc-300'>No has seleccionado ningún chat</span>
      <EmptyState />
    </div>
  )
}

export default EmptyStateComponent
