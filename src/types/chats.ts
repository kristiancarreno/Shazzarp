export type ChatMini = {
  chatId: string
  chatName: string
  description?: string | null
  messages?: number
  image: string | null
}

export type ChatListResponse = {
  data: ChatMini[]
}

export type ChatDetailsResponse = {
  data: Chat
}

export type Chat = {
  chatId: string
  chatName: string
  description?: string | null
  image: string | null
  messages: MessageSended[]
}

export type User = {
  username: string
  picture: string
}

export type MessageSended = {
  messageId: string
  chatId: string | null
  userId: string | null
  message: string | null
  user: ChatUser
}

export type ChatUser = {
  id: string | null
  name: string | null
  email: string | null
  emailVerified: Date | null
  image?: string | null
  createdAt: Date | null
  updatedAt: Date | null
}
