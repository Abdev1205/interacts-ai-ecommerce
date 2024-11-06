'use client'

import PrimaryButton from '@/components/common/Button/PrimaryButton'
import { JblImage } from '@/public/assetManager'
import Image from 'next/image'
import React from 'react'

const featureData = [
  {
    id: 1,
    quats: "23",
    measure: "Hours"
  },
  {
    id: 2,
    quats: "05",
    measure: "Days"
  },
  {
    id: 3,
    quats: "59",
    measure: "Minutes"
  },
  {
    id: 4,
    quats: "35",
    measure: "Seconds"
  }
]

const JblSponsored = () => {
  return (
    <div className='bg-black  w-full h-[30rem] flex mt-[6rem]   ' >
      <div className=' p-[3.5rem] w-[45%] flex flex-col gap-[1.5rem] ' >
        <p className=' text-[#00FF66] text-[.9rem] font-poppins ' >Categories</p>
        <h3 className=' text-white text-[3rem] font-poppins font-[600] ' >Enhance Your Music Experience</h3>
        <div className='flex gap-[.7rem]' >
          {featureData.map((f, index) => {
            return (
              <div key={index} className=' size-[3.5rem] rounded-full bg-white flex flex-col items-center justify-center  ' >
                <h2 className=' text-[1rem] font-poppins font-[500] ' >{f.quats}</h2>
                <p className='  text-[.65rem] font-poppins  mt-[-.3rem] ' >{f.measure}</p>
              </div>
            )
          })}
        </div>
        <PrimaryButton data={{ title: "Buy Now!", execute: () => { } }} style={" bg-[#0F6] w-[10rem] "} />

      </div>

      <div className='w-[55%] flex justify-center items-center ' >
        <Image
          src={JblImage}
          alt="JBL Sponsored"
          width={350}
          className='w-full'
        />
      </div>

    </div>
  )
}

export default JblSponsored
