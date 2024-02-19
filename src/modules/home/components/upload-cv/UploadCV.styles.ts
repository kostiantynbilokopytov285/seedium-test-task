import styled from 'styled-components'
import { Typography, Upload } from 'antd'

const { Dragger } = Upload
const { Title, Paragraph } = Typography

export const StyledDragger = styled(Dragger)`
  &.ant-upload-wrapper {
    width: 100%;
  }

  &.ant-upload-wrapper .ant-upload-drag {
    border: none;
  }
`

export const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    font-family: var(--font-cabin);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
  }
`

export const StyledTitle = styled(Title)`
  &.ant-typography {
    font-family: PT Serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
  }
`
