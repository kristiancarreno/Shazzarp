export type ChatMini = {
  chatId: bigint
  chatName: string | null
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
