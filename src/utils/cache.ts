'use server'
import { revalidateTag } from 'next/cache'

export const revalidateServerTags = async (tag: string) => {
  revalidateTag(tag)
}
