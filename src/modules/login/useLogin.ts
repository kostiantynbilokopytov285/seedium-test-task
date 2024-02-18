import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import ROUTES from '@/modules/common/routes'

const useLogin = () => {
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

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
