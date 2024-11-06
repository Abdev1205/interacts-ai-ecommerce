import React from 'react'
import AboutStakeHolderData from './data/aboutStakeHolderData'
import AboutStakeHolderCard from './card/AboutStakeHolderCard'

const AboutStakeHolder = () => {
  return (
    <div className='flex items-center justify-center w-full px-4 mt-[6rem] gap-[2rem] ' >
      {AboutStakeHolderData.map((data, index) => {
        return (
          <AboutStakeHolderCard data={data} key={index} />
        )
      })}

    </div>
  )
}

export default AboutStakeHolder
