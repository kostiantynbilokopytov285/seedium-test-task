'use client'

import { FC, PropsWithChildren } from 'react'
import { StyledContainer } from './Container.styles'

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledContainer
      $background="#F5EFE6"
      $padding="44px 86px"
      $minHeight="calc(100vh - 80px)"
    >
      {children}
    </StyledContainer>
  )
}

export default Container
