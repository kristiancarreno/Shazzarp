import { ChatMini } from '@/types/chats'
import prisma from '../../lib/prisma'
import { buildApiResponseAsync, handleApiServerError } from '@/utils/api'
import { ApiResponse } from '@/types/api'

export async function getChats(): Promise<ApiResponse<ChatMini[]>> {
  const res = await prisma.chats.findMany()

  if (!res) return handleApiServerError(res)
  return buildApiResponseAsync<ChatMini[]>(res)
}
