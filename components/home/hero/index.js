import HeroCarousel from '@/components/common/carousel/HeroCarousel'
import CatergoryList from '@/components/product/category'
import React from 'react'

const Hero = () => {
  return (
    <div className=' px-[4rem] flex  ' >
      <CatergoryList />
      <HeroCarousel />
    </div>
  )
}

export default Hero
