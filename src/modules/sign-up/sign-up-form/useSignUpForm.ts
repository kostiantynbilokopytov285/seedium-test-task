import { signIn } from 'next-auth/react'

import ROUTES from '@/modules/common/routes'

interface IHandleSubmitParams {
  email: string
  firstName: string
  lastName: string
  password: string
}

const useSignUpForm = () => {
  const handleSubmit = async ({
    email,
    firstName,
    lastName,
    password
  }: IHandleSubmitParams) => {
    const response = await fetch(`/api/auth/sign-up`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password
      })
    })

    if (response.status === 200) {
      await signIn('credentials', {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: ROUTES.HOME
      })
    }

    return null
  }

  return { handleSubmit }
}

export default useSignUpForm
