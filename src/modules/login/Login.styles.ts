import styled from 'styled-components'

import { StyledFormWrapper as Wrapper } from '../common/styles'

export const StyledFormWrapper = styled(Wrapper)`
  margin: auto;
  min-width: 300px;
  padding: 36px;
  border-radius: 14px;
  @media screen and (max-width: 768px) {
    padding: 12px;
  }
`

export const StyledWrapper = styled.div`
  padding: 18px 0 0 0;
`
