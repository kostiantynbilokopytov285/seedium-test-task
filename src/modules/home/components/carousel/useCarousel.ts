import { useRef } from 'react'

const useCarousel = () => {
  const carouselRef = useRef(null)

  const handleBack = () => {
    if (!carouselRef) return
    carouselRef.current.prev()
  }
  const handleNext = () => {
    if (!carouselRef) return
    carouselRef.current.next()
  }
  return { carouselRef, handleBack, handleNext }
}

export default useCarousel
