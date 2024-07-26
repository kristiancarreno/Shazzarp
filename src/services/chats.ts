import { ChatListResponse, ChatMini } from '@/types/chats'
import prisma from '../../lib/prisma'
import { buildApiResponseAsync, handleApiServerError } from '@/utils/api'
import { ApiResponse } from '@/types/api'

export async function getChats(): Promise<ApiResponse<ChatListResponse>> {
  const res = await fetch(`${process.env.NEXTHOST_URL}/api/chat-list/`, {
    method: 'GET',
    next: {
      revalidate: 600,
      tags: ['chats']
    }
  })

  if (res.status !== 200) return handleApiServerError(res)
  return buildApiResponseAsync<ChatListResponse>(res.json())
}

export async function createChat(chatName: string, image: string): Promise<ApiResponse<ChatMini>> {
  const res = await fetch(`/api/chat-list/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chatName, image })
  })

  if (res.status !== 200) return handleApiServerError(res)
  return buildApiResponseAsync<ChatMini>(res.json())
}
export const dynamic = 'force-dynamic'
