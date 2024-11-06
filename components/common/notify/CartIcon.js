'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const totalCount = useSelector((state) => state.cart.totalCount); // directly use totalCount from Redux
  const router = useRouter();

  return (
    <div className='relative cursor-pointer' onClick={() => router.push('/cart')}>
      <div className='absolute bg-red-500 right-[-.5rem] top-[-.1rem] text-white size-[1rem] flex items-center justify-center text-[.64rem] rounded-full'>
        {totalCount}
      </div>
      <IoCartOutline className='text-[1.5rem]' />
    </div>
  );
}

export default CartIcon;
