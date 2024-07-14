import { removeSessionCookie, updateSessionCookie } from './session-cookie'

export const setSession = async (accessToken: string | null) => {
  if (accessToken) {
    await updateSessionCookie(accessToken)
  } else {
    await removeSessionCookie()
  }
}
