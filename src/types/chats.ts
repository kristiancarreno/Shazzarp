export type ChatMini = {
  id: number
  name: string
  picture: string
  lastMessage: string
  pendingMessages: number
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
