'use client'
import Image from 'next/image'

import Flex from '@/modules/common/components/flex'

import SignUpForm from './sign-up-form'
import SocialsForm from './socials-form'

const SignUp = () => {
  return (
    <Flex
      $background="#ffffff"
      $flexDirection="column"
      $padding="24px 80px 37px 40px"
      $maxWidth="576px"
    >
      <SocialsForm />
      <SignUpForm />
    </Flex>
  )
}

export default SignUp
