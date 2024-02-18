'use client'

import Flex from '../flex'
import { StyledTitle } from './Header.styles'

const Header = () => (
  <Flex
    $alignItems="center"
    $background="#FFFFFF"
    $height="80px"
    $justifyContent="center"
    $width="100%"
  >
    <StyledTitle> AI Ignition</StyledTitle>
  </Flex>
)

export default Header
