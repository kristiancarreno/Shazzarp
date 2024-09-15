'use server'
import { MessageSended } from '@/types/chats'
import prisma from '../../lib/prisma'

export async function sendMessageToChat(chatId: string, userId: string, message: string): Promise<MessageSended> {
  const newMessage = await prisma.message.create({
    data: {
      chatId,
      userId,
      message
    },
    include: {
      user: true
    }
  })
  return newMessage
}
