import React from 'react'
import BestSelllingProductList from '../best-selling/BestSelllingProductList'
import PrimarySubHeading from '@/components/format/subheading/PrimarySubHeading'
import PrimaryHeading from '@/components/format/heading/PrimaryHeading'

const ExploreProducts = () => {
  return (
    <div className=' px-[4rem] flex flex-col gap-[1rem] mt-[8rem] ' >
      <PrimarySubHeading data={{ title: 'Our Products' }} />
      <div className='flex justify-between items-center gap-[8rem] ' >

        <PrimaryHeading data={{ title: "Explore Our Products" }} />
      </div>

      <BestSelllingProductList />

    </div>
  )
}

export default ExploreProducts
