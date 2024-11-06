import Navbar from '@/components/common/navbar'
import TopPromo from '@/components/common/promo/top/TopPromo'
import React from 'react'

const LoginLayout = ({ children }) => {
  return (
    <div>
      <TopPromo />
      <Navbar />
      {children}
    </div>
  )
}

export default LoginLayout