import { Typography } from 'antd'
import styled from 'styled-components'

const { Paragraph } = Typography

export const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    font-family: PT Serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
  }
`
