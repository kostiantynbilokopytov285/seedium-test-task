'use client'
import Flex from '@/modules/common/components/flex'

import SignUpForm from './sign-up-form'
import SocialsForm from './socials-form'

import { StyledImage, StyledImageWrapper } from './SignUp.styles'

const SignUp = () => {
  return (
    <Flex $width="100%" $gap="0" $margin="auto" $justifyContent="center">
      <Flex
        $borderTopLeftRadius="14px"
        $borderBottomLeftRadius="14px"
        $background="#ffffff"
        $flexDirection="column"
        $padding="24px 80px 37px 40px"
        $maxWidth="576px"
        $width="100%"
      >
        <SocialsForm />
        <SignUpForm />
      </Flex>
      <StyledImageWrapper $position="relative" $maxWidth="384px" $width="100%">
        <StyledImage src="laptop.svg" fill alt="laptop" objectFit="cover" />
      </StyledImageWrapper>
    </Flex>
  )
}

export default SignUp
