'use server'

import { Session } from '@prisma/client'
import prisma from '../../lib/prisma'

export async function getSessionUser(chatId: string): Promise<Session | null> {
  const chatWithMessages = await prisma.session.findFirst({
    where: {
      userId: chatId ?? ''
    }
  })
  return chatWithMessages
}
