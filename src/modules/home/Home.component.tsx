'use client'

import Carousel from './components/carousel'
import CreateCVWithAI from './components/create-cv-with-ai'
import HomePageVideo from './components/home-page-video'
import UploadCV from './components/upload-cv'

import {
  StyledCarouselWrapper,
  StyledWrapper,
  StyledHomeItemWrapper,
  StyledUploaderWrapper,
  StyledUploadWithAIWrapper
} from './Home.styles'

const Home = () => (
  <StyledWrapper>
    <StyledHomeItemWrapper>
      <HomePageVideo />
    </StyledHomeItemWrapper>
    <StyledUploaderWrapper>
      <UploadCV />
    </StyledUploaderWrapper>
    <StyledCarouselWrapper>
      <Carousel />
    </StyledCarouselWrapper>
    <StyledUploadWithAIWrapper>
      <CreateCVWithAI />
    </StyledUploadWithAIWrapper>
  </StyledWrapper>
)

export default Home
