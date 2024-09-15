import SideBarComponent from '@/components/side-bar/side-bar-component'
import { getChats } from '@/services/chats'

export default async function Default() {
  const res = await getChats()
  return <SideBarComponent chatList={res} />
}
