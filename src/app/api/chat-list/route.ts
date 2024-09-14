import { ChatMini } from '@/types/chats'
import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function GET() {
  const data = await prisma.chats.findMany()
  if (data) {
    return NextResponse.json({ data })
  }
  return NextResponse.json({ error: 'Ocurrió un error cargando los chats' })
}

export async function POST(request: Request) {
  try {
    const { chatName, description, image }: ChatMini = await request.json()
    if (!chatName) {
      return NextResponse.json({ error: 'chatName and image are required' }, { status: 400 })
    }
    const newChat = await prisma.chats.create({
      data: {
        chatName,
        description,
        image
      }
    })

    return NextResponse.json({ data: newChat }, { status: 200 })
  } catch (error) {
    console.error('Error creating chat:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { chatId: id } = await request.json()
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }
    const deletedChat = await prisma.chats.delete({
      where: {
        chatId: id
      }
    })
    return NextResponse.json({ data: deletedChat }, { status: 200 })
  } catch (error) {
    console.error('Error deleting chat:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
