'use client'

import Flex from '../flex'
import { StyledTitle, StyledSignOut } from './Header.styles'

import { signOut } from 'next-auth/react'

interface IHeaderProps {
  isLoggedIn: boolean
}

const Header = async ({ isLoggedIn }: IHeaderProps) => {
  return (
    <Flex
      $alignItems="center"
      $background="#FFFFFF"
      $height="80px"
      $padding="0 24px"
      $justifyContent="center"
      $width="100%"
    >
      <StyledTitle> AI Ignition</StyledTitle>
      {isLoggedIn && (
        <StyledSignOut onClick={() => signOut()}>Sign Out</StyledSignOut>
      )}
    </Flex>
  )
}

export default Header
