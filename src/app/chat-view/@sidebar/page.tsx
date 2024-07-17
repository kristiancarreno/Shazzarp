import SideBarComponent from '@/components/side-bar/side-bar-component'
import { getChats } from '@/services/chats'

export default async function Page() {
  const { data, error } = await getChats()

  if (error) return
  return <SideBarComponent chatList={data?.data ?? []} />
}
