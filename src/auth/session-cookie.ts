'use server'

import { cookies } from 'next/headers'

export async function updateSessionCookie(accessToken: string, expiresIn: number) {
  cookies().set('SESSION_COOKIE', accessToken, { expires: expiresIn })
}

export async function removeSessionCookie() {
  cookies().delete('SESSION_COOKIE')
}
