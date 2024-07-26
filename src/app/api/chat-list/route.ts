import { Chat, ChatMini } from '@/types/chats'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.chats.findMany()
  if (data) {
    return NextResponse.json({ data })
  }
  return NextResponse.json({ error: 'Ocurrió un error cargando los chats' })
}

export async function POST(request: Request) {
  try {
    const { chatName, image }: ChatMini = await request.json()
    if (!chatName) {
      return NextResponse.json({ error: 'chatName and image are required' }, { status: 400 })
    }
    const newChat = await prisma.chats.create({
      data: {
        chatName,
        image
      }
    })

    return NextResponse.json({ data: newChat }, { status: 200 })
  } catch (error) {
    console.error('Error creating chat:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
