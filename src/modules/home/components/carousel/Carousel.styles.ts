import styled from 'styled-components'
import { Avatar, Typography } from 'antd'

const { Title, Paragraph } = Typography

export const StyledAvatar = styled(Avatar)`
  &.ant-avatar-image {
    height: 62px;
    width: 62px;
    margin: auto;
    display: flex;
    margin-top: 31px;
  }
`
export const StyledName = styled(Title)`
  &.ant-typography {
    font-family: PT Serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const StyledDescription = styled(Paragraph)`
  &.ant-typography {
    font-family: var(--font-cabin);
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #a5a6a7;
    padding: 0 62px;
  }
`
