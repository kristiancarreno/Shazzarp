'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { CheckCheck, GithubIcon } from 'lucide-react'

export default function Login() {
  const { status } = useSession()
  const singIn = () => {
    signIn('github')
  }
  return (
    <div className='flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          {status === 'unauthenticated' ? (
            <>
              <div className='flex items-center gap-4'>
                <GithubIcon />
                <CardTitle className='text-2xl'>Bienvenido de vuelta</CardTitle>
              </div>
              <CardDescription>Entra con tu cuenta de GitHub.</CardDescription>
            </>
          ) : (
            <>
              <div className='flex items-center gap-4'>
                <CheckCheck />
                <CardTitle className='text-2xl'>Haz iniciado sesión correctamente</CardTitle>
              </div>
              <CardDescription>Tus colegas te esperan.</CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent className='space-y-4'></CardContent>
        <CardFooter>
          {status === 'unauthenticated' ? (
            <Button onClick={singIn} className='w-full bg-[#0077b6] hover:bg-[#005a8c] text-white'>
              Inicia Session
            </Button>
          ) : (
            <Link className='w-full' href={'/chat-view'}>
              <Button className='w-full bg-[#0077b6] hover:bg-[#005a8c] text-white'>Comienza a chatear</Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
