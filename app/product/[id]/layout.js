import Footer from '@/components/common/footer/Footer'
import Navbar from '@/components/common/navbar'
import TopPromo from '@/components/common/promo/top/TopPromo'
import React from 'react'

const ProductLayout = ({ children }) => {
  return (
    <div>
      <TopPromo />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default ProductLayout
