import React from 'react'
import deliveryFeatureData from './data'
import DeliveryFeatureCard from './DeliveryFeatureCard'

const Deliveryfeature = () => {

  return (
    <div className='flex items-center justify-evenly mt-[10rem] px-[4rem] w-full  ' >
      {deliveryFeatureData.map((data, index) => {
        return (
          <DeliveryFeatureCard key={index} data={data} />
        )
      })}
    </div>
  )
}

export default Deliveryfeature
