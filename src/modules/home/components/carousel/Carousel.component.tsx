'use client'

import { Fragment } from 'react'
import { Carousel as AntCarousel } from 'antd'
import Flex from '@/modules/common/components/flex'

import ArrowButton from './components/arrow-buttons'
import { SLIDES, ANIMATION_SPEED, AUTOPLAY_SPEED } from './constants'
import { StyledAvatar, StyledDescription, StyledName } from './Carousel.styles'

import useCarousel from './useCarousel'

const Carousel = () => {
  const { carouselRef, handleBack, handleNext } = useCarousel()

  return (
    <Flex $flexDirection="column">
      <AntCarousel
        autoplay
        autoplaySpeed={AUTOPLAY_SPEED}
        ref={carouselRef}
        speed={ANIMATION_SPEED}
      >
        {SLIDES.map(({ avatar, description, name }) => (
          <Fragment key={name}>
            <StyledAvatar src={avatar} />
            <StyledName>{name}</StyledName>
            <StyledDescription>{description}</StyledDescription>
          </Fragment>
        ))}
      </AntCarousel>
      <Flex
        $alignItems="center"
        $gap="14px"
        $justifyContent="center"
        $width="100%"
      >
        <ArrowButton onClick={handleBack} isLeft />
        <ArrowButton onClick={handleNext} isLeft={false} />
      </Flex>
    </Flex>
  )
}
export default Carousel
