import React from 'react'

const PrimarySubHeading = ({ data, styles }) => {
  const { title } = data;
  const customeStyles = ``
  return (
    <div className=' flex gap-[1rem] items-center font-poppins text-primary font-[600] text-[1.1rem] ' >

      <div className=' w-[1.2rem] h-[2.5rem] rounded  bg-primary   ' />
      <h2>{title}</h2>
    </div>
  )
}

export default PrimarySubHeading
