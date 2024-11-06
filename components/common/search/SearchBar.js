import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";



const SearchBar = ({ styles = "" }) => {
  const customeStyles = ` relative  w-[18rem] h-[2.7rem] text-black bg-[#F5F5F5]  rounded-md flex justify-between items-center  ${styles} `
  return (
    <div className={customeStyles} >
      <input type="text" placeholder='What are you looking for?' className=' w-full  px-[1rem] pr-[2.3rem] py-[.4rem] bg-transparent outline-none ' />
      <FiSearch className='absolute right-[1rem] ' />
    </div>
  )
}

export default SearchBar
