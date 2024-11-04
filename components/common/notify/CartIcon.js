'use client'

import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";


const CartIcon = () => {
  const [CartItem, setCartItem] = useState(3)
  return (
    <div className='relative '>
      <div className='absolute bg-red-500 right-[-.5rem] top-[-.1rem]  text-white size-[1rem] flex items-center justify-center text-[.64rem] rounded-full ' >
        {CartItem}
      </div>
      <IoCartOutline className=' text-[1.5rem] ' />
    </div>
  )
}

export default CartIcon
