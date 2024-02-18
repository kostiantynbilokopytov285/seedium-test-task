import { CarouselRef } from 'antd/es/carousel'
import { useRef } from 'react'

const useCarousel = () => {
  const carouselRef = useRef<CarouselRef>(null)

  const handleBack = () => {
    if (carouselRef.current) carouselRef.current.prev()
  }
  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next()
  }
  return { carouselRef, handleBack, handleNext }
}

export default useCarousel
