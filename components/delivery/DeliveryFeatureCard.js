import React from 'react'

export const FeatureIcon = ({ icon }) => {
  return (
    <div className=' size-[6rem] bg-gray-300 rounded-full flex justify-center items-center  ' >
      <div className=' size-[4.5rem] bg-black rounded-full flex justify-center items-center text-white ' >
        {icon}
      </div>

    </div>
  )
}

const DeliveryFeatureCard = ({ data, styles = "" }) => {
  const { icon, title, desc } = data;
  const customStyles = ` flex flex-col items-center justify-center gap-[1rem] ${styles} `
  return (
    <div className={customStyles} >
      <FeatureIcon icon={icon} />

      <div className='flex flex-col items-center justify-center gap-[.1rem] ' >

        <h2 className=' text-[1.15rem] font-poppins  font-[600] ' >{title}</h2>
        <p className=' text-[.9rem] font-poppins  ' >{desc}</p>
      </div>


    </div>
  )
}

export default DeliveryFeatureCard
