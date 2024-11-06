import AboutFeatures from '@/components/about/AboutFeatures'
import AboutHero from '@/components/about/AboutHero'
import AboutStakeHolder from '@/components/about/AboutStakeHolder'
import Footer from '@/components/common/footer/Footer'
import Deliveryfeature from '@/components/delivery/Deliveryfeature'
import DeliveryFeatureCard from '@/components/delivery/DeliveryFeatureCard'
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutFeatures />
      <AboutStakeHolder />
      <Deliveryfeature />
      <Footer />


    </div>
  )
}

export default About
