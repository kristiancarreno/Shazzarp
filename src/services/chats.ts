import { ChatDetailsResponse, ChatListResponse, ChatMini } from '@/types/chats'
import { buildApiResponseAsync, handleApiServerError } from '@/utils/api'
import { ApiResponse } from '@/types/api'

export async function getChats(): Promise<ApiResponse<ChatListResponse>> {
  const res = await fetch(`${process.env.NEXTHOST_URL}/api/chat-list/`, {
    method: 'GET',
    next: {
      tags: ['chats']
    },
    cache: 'no-store'
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

export async function deleteChat(chatId: string): Promise<ApiResponse<ChatMini>> {
  const res = await fetch(`/api/chat-list/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chatId })
  })

  if (res.status !== 200) return handleApiServerError(res)
  return buildApiResponseAsync<ChatMini>(res.json())
}

export async function getChatDetails(chatId: string): Promise<ApiResponse<ChatDetailsResponse>> {
  const res = await fetch(`${process.env.NEXTHOST_URL}/api/chat-details/?chatId=${chatId}`, {
    method: 'GET',
    next: {
      tags: ['chat']
    }
  })

  if (res.status !== 200) return handleApiServerError(res)
  return buildApiResponseAsync<ChatDetailsResponse>(res.json())
}
