import nextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import prisma from '../../../../../lib/prisma'
import { User } from '@prisma/client'

const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      allowDangerousEmailAccountLinking: true
    })
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        const newUser = {} as User
        newUser.email = user.email || ''
        newUser.image = user.image || ''
        newUser.name = user.name || ''
        newUser.id = user.id || ''
        session.user = newUser
        return session
      }
      return session
    }
  },
  adapter: PrismaAdapter(prisma)
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
