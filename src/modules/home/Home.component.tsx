'use client'

import Carousel from './components/carousel'
import CreateCVWithAI from './components/create-cv-with-ai'
import HomePageVideo from './components/home-page-video'
import UploadCV from './components/upload-cv'

import {
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
    <StyledHomeItemWrapper>
      <Carousel />
    </StyledHomeItemWrapper>
    <StyledUploadWithAIWrapper>
      <CreateCVWithAI />
    </StyledUploadWithAIWrapper>
  </StyledWrapper>
)

export default Home
