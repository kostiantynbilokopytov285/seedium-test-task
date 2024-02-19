import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { message } from 'antd'

import ROUTES from '@/modules/common/routes'
import { TOAST_DURATION } from '@/modules/common/constants'

interface IHandleSubmitParams {
  email: string
  password: string
}

const useLogin = () => {
  const router = useRouter()

  const handleSubmit = async ({ email, password }: IHandleSubmitParams) => {
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (response?.error) {
      message.error('Wrong password or email', TOAST_DURATION)
    }

    if (!response?.error) {
      router.push(ROUTES.HOME)
      router.refresh()

      return
    }

    return null
  }

  return { handleSubmit }
}

export default useLogin
