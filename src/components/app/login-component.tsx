import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import RocketIcon from '@/assets/rocket-icon'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <div className='flex items-center gap-4'>
            <RocketIcon />
            <CardTitle className='text-2xl'>Welcome back</CardTitle>
          </div>
          <CardDescription>Enter your email and password to access your account.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' placeholder='m@example.com' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </div>
        </CardContent>
        <CardFooter>
          <Link className='w-full' href={'/chat-view'}>
            <Button className='w-full bg-[#0077b6] hover:bg-[#005a8c] text-white'>Sign in</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
