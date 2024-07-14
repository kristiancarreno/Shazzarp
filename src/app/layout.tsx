import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import AuthProvider from '@/auth/auth-provider'

export const metadata: Metadata = {
  title: 'Shazapp',
  description: 'Full Stack Project Chat App',
  icons: '/shazzap.svg'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='w-full flex flex-col bg-customDarkGray' id='body'>
        <AuthProvider>
          <main className='flex'>
            <div className='w-screen'>{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
