import prisma from '../../lib/prisma'
import { buildApiResponseAsync, handleApiServerError } from '@/utils/api'

export async function getUsers() {
  const res = await prisma.user.findMany()

  if (!res) return handleApiServerError(res)
  return buildApiResponseAsync(res)
}
