import React from 'react'
import CategoryProductList from './CategoryProductList'
import PrimarySubHeading from '@/components/format/subheading/PrimarySubHeading'
import PrimaryHeading from '@/components/format/heading/PrimaryHeading'

const CatergoryProduct = () => {
  return (
    <div className=' px-[4rem] flex flex-col gap-[1rem] mt-[8rem] ' >
      <PrimarySubHeading data={{ title: 'Categories' }} />
      <div className='flex items-center gap-[8rem] ' >

        <PrimaryHeading data={{ title: "Browse By Category" }} />
      </div>

      <CategoryProductList />

    </div>
  )
}

export default CatergoryProduct
