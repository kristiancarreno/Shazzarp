import { User } from '@/types/auth'

declare module 'next-auth' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Session {
    user: User
  }
}
