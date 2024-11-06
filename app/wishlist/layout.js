import Navbar from '@/components/common/navbar'
import TopPromo from '@/components/common/promo/top/TopPromo'
import React from 'react'

const WishlistLayout = ({ children }) => {
  return (
    <div>
      <TopPromo />
      <Navbar />
      {children}
    </div>
  )
}

export default WishlistLayout
