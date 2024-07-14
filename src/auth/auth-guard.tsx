'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export default function AuthGuard({ children }: Props) {
  const { status } = useSession()

  if (status === 'unauthenticated') redirect(`/`)
  return <>{children}</>
}
