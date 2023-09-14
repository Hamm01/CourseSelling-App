import HomeComponent from '@/components/HomeComponent'
import { meRequest } from '@/libs/meRequest'

export default async function Home() {
  const userDataResponse = await meRequest()
  console.log(userDataResponse)

  return <HomeComponent userDataResponse={userDataResponse} />
}
