import styled from 'styled-components'
import Flex from '@/modules/common/components/flex'

export const StyledWrapper = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 44px;
  width: 100%;
`

export const StyledHomeItemWrapper = styled(Flex)`
  max-width: 614px;
  height: 367px;
  border-radius: 14px;
  background-color: #ffffff;
`

export const StyledUploaderWrapper = styled(StyledHomeItemWrapper)`
  background: linear-gradient(108.58deg, #dbb898 25.3%, #9dc1ce 82.65%);
`

export const StyledUploadWithAIWrapper = styled(StyledHomeItemWrapper)`
  background: linear-gradient(108.58deg, #c5dce4 25.3%, #dbb898 82.65%);
`
