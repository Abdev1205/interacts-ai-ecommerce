import Image from 'next/image';
import React from 'react'

const HeroBannerCard = ({ data }) => {
  const { title, href, image } = data;
  return (
    <div className='' >
      <Image src={image} />

    </div>
  )
}

export default HeroBannerCard
