import SideBarComponent from '@/components/side-bar/side-bar-component'
import { getChats } from '@/services/chats'

export default async function Page() {
  const data = await getChats()
  return <SideBarComponent chatList={data} />
}
