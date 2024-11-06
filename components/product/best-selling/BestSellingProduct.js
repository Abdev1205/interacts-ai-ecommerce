import PrimaryButton from '@/components/common/Button/PrimaryButton'
import React from 'react'
import BestSelllingProductList from './BestSelllingProductList'
import PrimarySubHeading from '@/components/format/subheading/PrimarySubHeading'
import PrimaryHeading from '@/components/format/heading/PrimaryHeading'

const BestSellingProduct = () => {
  return (
    <div className=' px-[4rem] flex flex-col gap-[1rem] mt-[8rem] ' >
      <PrimarySubHeading data={{ title: 'This Month' }} />
      <div className='flex justify-between items-center gap-[8rem] ' >

        <PrimaryHeading data={{ title: "Best Selling Products" }} />
      </div>

      <BestSelllingProductList />

    </div>
  )
}

export default BestSellingProduct
