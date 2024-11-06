import React from 'react'
import TopPromo from '@/components/common/promo/top/TopPromo'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/home/hero'
import TodaySale from '@/components/product/sale/TodaySale'
import CatergoryProduct from '@/components/product/category/CatergoryProduct'
import BestSellingProduct from '@/components/product/best-selling/BestSellingProduct'
import JblSponsored from '@/components/product/sponsored/JblSponsored'
import ExploreProducts from '@/components/product/explore-products/ExploreProducts'
import NewArrival from '@/components/product/new-arrival/NewArrival'
import Deliveryfeature from '@/components/delivery/Deliveryfeature'
import Footer from '@/components/common/footer/Footer'

const Home = () => {
  return (
    <div >
      <TopPromo />
      <Navbar />
      <Hero />
      <TodaySale />
      <CatergoryProduct />
      <BestSellingProduct />
      <div className=' px-[4rem] ' >
        <JblSponsored />
      </div>

      <ExploreProducts />
      <NewArrival />
      <Deliveryfeature />
      <Footer />

      {/* <div className=' h-[100vh] ' >

      </div> */}

    </div>
  )
}

export default Home
