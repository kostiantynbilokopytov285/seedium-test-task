import styled from 'styled-components'
import Link from 'next/link'

import { Typography } from 'antd'
import exp from 'constants'

const { Paragraph, Title } = Typography

export const StyledTitle = styled(Title)`
  &.ant-typography {
    font-family: var(--font-cabin);
    font-size: 34px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
`

export const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    font-family: PT Serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
`

export const StyledLink = styled(Link)``

export const StyledSocialButton = styled.button`
  all: unset;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #4c4d4f;
  text-align: center;
  font-family: var(--font-cabin);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
`

export const StyledDividedParagraph = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;

  span {
    background: #fff;
    padding: 0 10px;
  }
`
