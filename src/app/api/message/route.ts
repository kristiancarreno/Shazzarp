import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function POST(request: Request) {
  try {
    const { chatId, userId, message } = await request.json()
    if (!message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 })
    }
    const newChat = await prisma.message.create({
      data: {
        chatId,
        userId,
        message
      }
    })

    return NextResponse.json({ data: newChat }, { status: 200 })
  } catch (error) {
    console.error('Error creating chat:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
