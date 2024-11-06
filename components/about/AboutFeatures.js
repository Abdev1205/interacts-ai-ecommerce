import React from 'react'
import aboutFeatureData from './data/aboutFeatureData'
import DeliveryFeatureCard from '../delivery/DeliveryFeatureCard'

const AboutFeatures = () => {
  return (
    <div className='flex items-center justify-evenly mt-[10rem] px-[4rem] w-full  ' >
      {aboutFeatureData.map((data, index) => {
        return (
          <DeliveryFeatureCard data={data} key={index} styles="border-2 p-[2rem] rounded-md  " />
        )
      })}
    </div>
  )
}

export default AboutFeatures
