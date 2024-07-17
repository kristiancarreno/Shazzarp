import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.chats.findMany()
  if (data) {
    return NextResponse.json({ data })
  }
  return NextResponse.json({ error: 'Ocurrió un error cargando los chats' })
}
