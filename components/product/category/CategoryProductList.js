import React from 'react'
import { HiOutlineDevicePhoneMobile, HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { IoGameControllerOutline } from "react-icons/io5";
import CategoryCard from '../cards/CategoryCard';

const catergoryData = [
  {
    id: 1,
    title: "Phones",
    icon: <HiOutlineDevicePhoneMobile className=' text-[2.2rem] ' />
  },
  {
    id: 2,
    title: "Computers",
    icon: <HiOutlineComputerDesktop className=' text-[2.2rem] ' />
  },
  {
    id: 3,
    title: "SmartWatch",
    icon: <BsSmartwatch className=' text-[2.2rem] ' />
  },
  {
    id: 4,
    title: "Camera",
    icon: <BsCamera className=' text-[2.2rem] ' />
  },
  {
    id: 5,
    title: "HeadPhones",
    icon: <ImHeadphones className=' text-[2.2rem] ' />
  },
  {
    id: 6,
    title: "Gaming",
    icon: <IoGameControllerOutline className=' text-[2.2rem] ' />
  }
]

const CategoryProductList = () => {
  return (
    <div className='flex mt-[3rem] gap-[1rem] w-full ' >
      {
        catergoryData.map((category, index) => {
          return (
            <CategoryCard data={category} key={index} />
          )
        })
      }

    </div>
  )
}

export default CategoryProductList
