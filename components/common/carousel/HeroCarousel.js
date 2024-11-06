'use client'

import React from 'react'
import { DotButton, useDotButton } from './button/DotButton'
import useEmblaCarousel from 'embla-carousel-react'
import heroCarouselData from './data/HeroData';
import HeroBannerCard from './card/HeroBannerCard';
import Autoplay from "embla-carousel-autoplay";

const option = { loop: true };

const customcarouselButton = () => {
  return (
    <div className="flex w-[100%] items-center justify-center absolute bottom-[1rem]  ">
      <div className="flex gap-[.5rem]  ">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={` size-[.5rem] rounded-full ${selectedIndex == index ? " bg-red-600 " : " bg-[#D9D9D9] "}  `}
          />
        ))}
      </div>
    </div>
  )
}

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);


  return (
    <div className=' w-[calc(100%-20rem)] mt-[2rem] ' >
      <div className="relative embla">
        <div className="w-full embla__viewport" ref={emblaRef}>
          <div className="flex w-full embla__container">
            {heroCarouselData.map((data, index) => {
              return (
                <div key={index} className="flex justify-center w-[100%] embla__slide">
                  <HeroBannerCard data={data} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-[100%] items-center justify-center absolute bottom-[1rem]  ">
          <div className="flex gap-[.5rem]  ">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={` size-[.5rem] rounded-full ${selectedIndex == index ? " bg-red-600 " : " bg-[#D9D9D9] "}  `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
