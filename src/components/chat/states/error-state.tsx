import ErrorState from '@/assets/error-state'
import React from 'react'

function ErrorStateComponent() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <span className='font-semibold text-xl text-zinc-300'>Hubo un Error Cargando el Chat</span>
      <ErrorState />
    </div>
  )
}

export default ErrorStateComponent
