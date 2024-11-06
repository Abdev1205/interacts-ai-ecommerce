import { AboutHeroImage } from '@/public/assetManager'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <div className=' flex justify-between items-center w-[100%] h-[calc(100vh-7rem)] pl-[4rem] gap-[1rem]   ' >

      <div className=' w-[40%] flex flex-col gap-[1rem] ' >
        <h2 className=' font-poppins  font-[600] text-[3rem] ' >Our Story</h2>

        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

        <p>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
        </p>
      </div>

      <div className=' w-[50%] h-full  ' >
        <Image
          src={AboutHeroImage}
          width={500}
          alt='About hero'
          className='flex w-full h-full '
        />
      </div>

    </div>
  )
}

export default AboutHero
