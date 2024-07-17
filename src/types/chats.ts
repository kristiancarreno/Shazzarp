export type ChatMini = {
  chatId: bigint
  chatName: string
  image: string | null
}

export type ChatListResponse = {
  data: ChatMini[]
}

export type Chat = {
  id: number
  picture: string
  messages: MessageSended[]
  userFriend: User
}

export type User = {
  username: string
  picture: string
}

export type MessageSended = {
  username: string
  message: string
  avatar?: string
}
