import EmptyState from '@/assets/empty-state'
import React from 'react'

function Page() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <span className='font-semibold text-xl'>No has seleccionado ningún chat</span>
      <EmptyState />
    </div>
  )
}

export default Page
