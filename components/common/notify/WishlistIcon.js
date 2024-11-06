'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoHeartOutline } from "react-icons/io5";



const WishlistIcon = () => {
  // redus se nikalna pdega widhlist 
  const [wishList, setWishList] = useState(8)
  const router = useRouter()
  return (
    <div className='relative cursor-pointer ' onClick={() => router.push('/wishlist')} >
      <div className='absolute  text-white size-[.5rem] flex items-center justify-center text-[.5rem] rounded-full ' >
        {/* {wishList} */}
      </div>
      <IoHeartOutline className=' text-[1.5rem] ' />
    </div>
  )
}

export default WishlistIcon
