'use client'

import { FC, PropsWithChildren } from 'react'
import Flex from '../flex'

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      $background="#F5EFE6"
      $padding="44px 86px"
      $minHeight="calc(100vh - 80px)"
    >
      {children}
    </Flex>
  )
}

export default Container
