'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { CheckCheck, GithubIcon } from 'lucide-react'
import { Bounce, toast } from 'react-toastify'

export default function Login() {
  const { status } = useSession()
  const singIn = async () => {
    const result = await signIn('github')
    if (!result?.error) {
      toast.success('Sesion Inciada Exitosamente', {
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
    <div className='flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 '>
      <Card className='w-full max-w-md bg-lightBlack border-hoveredButton'>
        <CardHeader>
          {status === 'unauthenticated' ? (
            <>
              <div className='flex items-center gap-4'>
                <GithubIcon color='white' />
                <CardTitle className='text-2xl text-zinc-300'>Bienvenido de vuelta</CardTitle>
              </div>
              <CardDescription className='text-zinc-300'>Entra con tu cuenta de GitHub.</CardDescription>
            </>
          ) : (
            <>
              <div className='flex items-center gap-4'>
                <CheckCheck color='white' />
                <CardTitle className='text-2xl text-zinc-300'>Haz iniciado sesión correctamente</CardTitle>
              </div>
              <CardDescription className='text-zinc-300'>Tus colegas te esperan.</CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent className='space-y-4'></CardContent>
        <CardFooter>
          {status === 'unauthenticated' ? (
            <Button onClick={singIn} className='w-full bg-[#358841] hover:bg-[#598A60] text-white'>
              Inicia Session
            </Button>
          ) : (
            <Link className='w-full' href={'/chat-view'}>
              <Button className='w-full bg-[#358841] hover:bg-[#598A60] text-white'>Comienza a chatear</Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
