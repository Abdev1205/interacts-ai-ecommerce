import Image from 'next/image'
import React from 'react'
import { LuTwitter, LuInstagram, } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";



const AboutStakeHolderCard = ({ data }) => {
  const { img, name, role, } = data;
  return (
    <div className='flex flex-col w-[15rem] h-[22rem] gap-[.5rem]  ' >

      {/* image */}
      <div className=' w-full h-[15rem] p-[1rem] pb-[0rem] bg-[#F5F5F5]  flex items-center justify-center  ' >
        <Image
          src={img}
          width={500}
          alt={name}
          className='object-contain w-full h-full m-auto '
        />
      </div>

      <div className='flex flex-col ' >

        <h2 className=' font-poppins  font-[600] text-[1.05rem] ' >{name}</h2>
        <p className=' font-openSans  text-[.85rem] ' >{role}</p>


        {/* social */}
        <div className='flex items-center w-full gap-[.3rem] mt-[.3rem] ' >
          <LuTwitter />
          <LuInstagram />
          <LiaLinkedin className=' text-[1.3rem] ' />

        </div>
      </div>

    </div>
  )
}

export default AboutStakeHolderCard
