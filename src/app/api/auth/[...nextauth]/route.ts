import nextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import prisma from '../../../../../lib/prisma'

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
        session.user.name = user.name
      }
      return session
    }
  },
  adapter: PrismaAdapter(prisma)
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
