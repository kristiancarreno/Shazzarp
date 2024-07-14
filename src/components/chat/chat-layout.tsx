import React from 'react'

export default function ChatLayout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode
  sidebar: React.ReactNode
}>) {
  return (
    <main className='flex flex-1  w-screen '>
      {sidebar}
      <div className='max-w-screen-2xl w-full bg-customDarkGray'>{children}</div>
    </main>
  )
}
