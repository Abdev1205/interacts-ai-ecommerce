import Navbar from '@/components/common/navbar'
import TopPromo from '@/components/common/promo/top/TopPromo'
import React from 'react'

const AdminLayout = ({ children }) => {
  return (
    <div>
      <TopPromo />
      <Navbar />
      <h2>Apnu Admin hai re </h2>
      {children}
    </div>
  )
}

export default AdminLayout
