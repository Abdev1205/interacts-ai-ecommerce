'use client'

import api from '@/lib/constants/AxiosInstance'
import React, { useEffect, useState } from 'react'

const CatergoryList = () => {
  const [categories, setCatergories] = useState([])

  const fetchCategories = async () => {
    const result = await api.get(`/products/categories`);
    // console.log(result.data);
    setCatergories(result.data);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  const extractCategories = [
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
    'Books & Magazines',
    'Home & Office',
  ]

  return (
    <div className=' w-[14rem] mr-[2rem] font-poppins  flex flex-col gap-[.8rem] border-r-2 pt-[2rem] pb-[1rem] ' >
      {
        categories.map((category, index) => {
          return (
            <div key={index} className='flex hover:underline underline-offset-4 hover:translate-x-[.1rem] duration-300  items-center gap-[.5rem]  cursor-pointer ' >
              <h3 className='capitalize ' >{category}</h3>
            </div>
          )
        })
      }
      {
        extractCategories.map((category, index) => {
          return (
            <div key={index} className='flex items-center gap-[.5rem] hover:underline underline-offset-4 hover:translate-x-[.1rem]  cursor-pointer ' >
              <h3 className='capitalize ' >{category}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default CatergoryList
