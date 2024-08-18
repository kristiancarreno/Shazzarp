import { ApiResponse } from '@/types/api'
import { MessageSended } from '@/types/chats'
import { buildApiResponseAsync, handleApiServerError } from '@/utils/api'

export async function sendMessageToChat(
  chatId: string,
  userId: string,
  message: string
): Promise<ApiResponse<MessageSended>> {
  const res = await fetch(`/api/message/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chatId, userId, message })
  })

  if (res.status !== 200) return handleApiServerError(res)
  return buildApiResponseAsync<MessageSended>(res.json())
}
