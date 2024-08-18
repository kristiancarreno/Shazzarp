import SideBarComponent from '@/components/side-bar/side-bar-component'
import { getChats } from '@/services/chats'

export default async function Default() {
  const res = await getChats()
  if (res.error) return
  return <SideBarComponent chatList={res.data?.data ?? []} />
}
