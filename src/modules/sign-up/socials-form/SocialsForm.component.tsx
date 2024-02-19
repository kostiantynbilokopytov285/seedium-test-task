import Flex from '@/modules/common/components/flex'
import Link from 'next/link'

import SocialButtons from '@/modules/common/components/social-buttons'

import ROUTES from '@/modules/common/routes'
import {
  StyledParagraph,
  StyledTitle,
  StyledDividedParagraph
} from './SocialsForm.styles'

const SocialsForm = () => (
  <Flex $flexDirection="column" $padding="0 0 38px 0">
    <StyledTitle>Create an account</StyledTitle>
    <StyledParagraph>
      Already have an account? <Link href={ROUTES.LOGIN}>Log in</Link>
    </StyledParagraph>
    <SocialButtons />
    <StyledDividedParagraph>
      <span>Or</span>
    </StyledDividedParagraph>
  </Flex>
)

export default SocialsForm
