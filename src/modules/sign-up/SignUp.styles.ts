import styled from 'styled-components'
import Image from 'next/image'
import Flex from '@/modules/common/components/flex'

export const StyledImage = styled(Image)`
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`

export const StyledImageWrapper = styled(Flex)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
