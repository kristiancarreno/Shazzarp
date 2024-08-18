import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const chatId = searchParams.get('chatId')
  const chatWithMessages = await prisma.chats.findUnique({
    where: {
      chatId: chatId ?? ''
    },
    include: {
      messages: { include: { user: true } }
    }
  })

  if (chatWithMessages) {
    return NextResponse.json({ data: chatWithMessages })
  }
  return NextResponse.json({ error: 'Ocurrió un error cargando los chats' })
}

export const dynamic = 'force-dynamic'
