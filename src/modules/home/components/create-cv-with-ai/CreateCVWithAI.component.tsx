'use client'

import Flex from '@/modules/common/components/flex'

import { StyledParagraph } from './CreateCVWithAI.styles'

const CreateCVWithAI = () => {
  return (
    <Flex
      $alignItems="center"
      $cursor="pointer"
      $justifyContent="center"
      $width="100%"
    >
      <StyledParagraph>Create CV with AI</StyledParagraph>
    </Flex>
  )
}
export default CreateCVWithAI
