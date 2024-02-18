import Flex from '@/modules/common/components/flex'
import Link from 'next/link'
import Image from 'next/image'

import ROUTES from '@/modules/common/routes'
import {
  StyledParagraph,
  StyledTitle,
  StyledSocialButton,
  StyledDividedParagraph
} from './SocialsForm.styles'

const SocialsForm = () => (
  <Flex $flexDirection="column">
    <StyledTitle>Create an account</StyledTitle>
    <StyledParagraph>
      Already have an account? <Link href={ROUTES.LOGIN}>Log in</Link>
    </StyledParagraph>
    <Flex $gap="10px" $flexDirection="column">
      <StyledSocialButton>
        <Image src="facebook.svg" alt="facebook icon" width={24} height={24} />
        Continue with Facebook
      </StyledSocialButton>
      <StyledSocialButton>
        <Image src="google.svg" alt="google icon" width={24} height={24} />
        Continue with Google
      </StyledSocialButton>
      <StyledSocialButton>
        <Image src="twitter.svg" alt="twitter icon" width={24} height={24} />
        Continue with Twitter
      </StyledSocialButton>
    </Flex>
    <StyledDividedParagraph>
      <span>Or</span>
    </StyledDividedParagraph>
  </Flex>
)

export default SocialsForm
