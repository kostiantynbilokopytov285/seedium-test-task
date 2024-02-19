import { redirect } from 'next/navigation'

import Login from '@/modules/login/'
import { isLoggedIn } from '@/utils'

import ROUTES from '@/modules/common/routes'

const LoginPage = async () => {
  if (await isLoggedIn()) redirect(ROUTES.HOME)

  return <Login />
}

export default LoginPage
