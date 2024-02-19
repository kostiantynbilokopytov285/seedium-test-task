import SignUp from '@/modules/sign-up/'

import { redirectLoggedIn } from '@/utils'

const SignUpPage = async () => {
  await redirectLoggedIn()

  return <SignUp />
}

export default SignUpPage
