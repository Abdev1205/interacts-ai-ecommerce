import React from 'react'

const PrimaryHeading = ({ data, styles }) => {
  const { title } = data;
  return (
    <h2 className=' font-poppins font-[600] text-[2rem]  ' >{title}</h2>
  )
}

export default PrimaryHeading
