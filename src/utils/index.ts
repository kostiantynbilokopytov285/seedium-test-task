import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import ROUTES from '@/modules/common/routes'

export const isLoggedIn = async () => {
  return Boolean(await getServerSession())
}

export const redirectLoggedIn = async () => {
  if (await isLoggedIn()) redirect(ROUTES.HOME)
}

export const redirectNotLoggedIn = async () => {
  if (!(await isLoggedIn())) redirect(ROUTES.SIGN_UP)
}
