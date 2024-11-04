import React from 'react'
import { topPromoData } from './data'
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";


const TopPromo = () => {
  const { name, cta, language, link } = topPromoData[0];
  return (
    <div className=' flex w-[100%] h-[3rem] gap-[1.3rem] justify-center items-center bg-black text-white ' >
      <h2 className=' opacity-[.9] ' >{name}</h2>
      <Link className=' opacity-[.9] underline ' href={link} >
        {cta}
      </Link>
      <div className='flex gap-[.3rem] items-center  absolute right-[4rem] ' >
        <h3>{language}</h3>
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default TopPromo
