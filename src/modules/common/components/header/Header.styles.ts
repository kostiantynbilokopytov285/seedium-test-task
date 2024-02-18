import styled from 'styled-components'
import { Typography } from 'antd'

const { Paragraph } = Typography

export const StyledTitle = styled(Paragraph)`
  &.ant-typography {
    margin-bottom: 0;
    font-family: PT Serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
  }
`
