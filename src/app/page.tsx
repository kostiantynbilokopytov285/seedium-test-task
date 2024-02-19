import HomePage from '@/modules/home'

import { redirectNotLoggedIn } from '@/utils'

export default async function Home() {
  await redirectNotLoggedIn()

  return <HomePage />
}
