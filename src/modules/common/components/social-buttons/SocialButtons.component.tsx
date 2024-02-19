import Image from 'next/image'
import { signIn } from 'next-auth/react'

import Flex from '../flex'
import ROUTES from '../../routes'

import { StyledSocialButton } from './SocialButtons.styles'

const SocialButtons = () => (
  <Flex $gap="10px" $flexDirection="column">
    <StyledSocialButton>
      <Image src="facebook.svg" alt="facebook icon" width={24} height={24} />
      Continue with Facebook
    </StyledSocialButton>
    <StyledSocialButton
      onClick={() =>
        signIn('google', {
          callbackUrl: ROUTES.HOME
        })
      }
    >
      <Image src="google.svg" alt="google icon" width={24} height={24} />
      Continue with Google
    </StyledSocialButton>
    <StyledSocialButton>
      <Image src="twitter.svg" alt="twitter icon" width={24} height={24} />
      Continue with Twitter
    </StyledSocialButton>
  </Flex>
)

export default SocialButtons