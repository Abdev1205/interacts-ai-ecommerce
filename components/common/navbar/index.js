import Link from 'next/link'
import React from 'react'
import SingleLinks from './SingleLinks'
import SearchBar from '../search/SearchBar'
import WishlistIcon from '../notify/WishlistIcon'
import CartIcon from '../notify/CartIcon'

const Navbar = () => {
  const navbarData = [
    { title: 'Home', href: '/' },
    { title: 'Contact', href: '/contact' },
    { title: 'About', href: '/about' },
    { title: 'Login', href: '/login' },
  ]

  return (
    <div className='flex px-[8rem] justify-between items-center w-[100%] h-[4.3rem] border-2   ' >
      <h2 className=' text-[1.6rem] font-poppins font-[700]   ' >Exclusive</h2>

      <div className='flex items-center gap-[1.5rem] ' >
        {
          navbarData.map((navItems, index) => {
            return (
              <SingleLinks key={index} data={navItems} />
            )
          })
        }
      </div>

      <div className='flex items-center gap-[.5rem] ' >
        <SearchBar />

        <WishlistIcon />
        <CartIcon />
      </div>







    </div>
  )
}

export default Navbar
