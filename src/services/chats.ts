'use server'
import { Chat, ChatMini } from '@/types/chats'
import prisma from '../../lib/prisma'

export async function getChats(): Promise<ChatMini[]> {
  const res = await prisma.chats.findMany({
    include: {
      messages: true
    }
  })
  const result = res.map((chat) => ({
    ...chat,
    messages: chat.messages.length
  }))
  return result
}

export async function createChat(chatName: string, description: string, image: string): Promise<ChatMini> {
  const newChat = await prisma.chats.create({
    data: {
      chatName,
      description,
      image
    }
  })
  return newChat
}

export async function getChatDetails(chatId: string): Promise<Chat | null> {
  const chatWithMessages = await prisma.chats.findUnique({
    where: {
      chatId: chatId ?? ''
    },
    include: {
      messages: { include: { user: true } }
    }
  })
  return chatWithMessages
}
