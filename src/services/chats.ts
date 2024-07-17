import { ChatListResponse, ChatMini } from '@/types/chats'
import prisma from '../../lib/prisma'
import { buildApiResponseAsync, handleApiServerError } from '@/utils/api'
import { ApiResponse } from '@/types/api'

export async function getChats(): Promise<ApiResponse<ChatListResponse>> {
  const res = await fetch(`${process.env.NEXTHOST_URL}/api/chat-list/`, {
    method: 'GET'
  })

  if (!res) return handleApiServerError(res)
  return buildApiResponseAsync<ChatListResponse>(res.json())
}

export const dynamic = 'force-dynamic'
