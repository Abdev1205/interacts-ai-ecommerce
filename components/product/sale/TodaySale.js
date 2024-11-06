import SaleTimer from '@/components/common/timer/SaleTimer'
import PrimaryHeading from '@/components/format/heading/PrimaryHeading'
import PrimarySubHeading from '@/components/format/subheading/PrimarySubHeading'
import React from 'react'
import SaleProduct from './SaleProduct'

const TodaySale = () => {
  return (
    <div className=' px-[4rem] flex flex-col gap-[1rem] mt-[4rem] ' >
      <PrimarySubHeading data={{ title: 'Today\'s' }} />
      <div className='flex items-center gap-[8rem] ' >

        <PrimaryHeading data={{ title: "Flash Sales" }} />
        <div className=' mt-[-1rem] ' >

          <SaleTimer initialTime={300000} repeat={true} />
        </div>
      </div>

      <SaleProduct />

    </div>
  )
}

export default TodaySale
