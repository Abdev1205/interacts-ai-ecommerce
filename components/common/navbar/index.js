'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import SingleLinks from './SingleLinks'
import SearchBar from '../search/SearchBar'
import WishlistIcon from '../notify/WishlistIcon'
import CartIcon from '../notify/CartIcon'
import { useSelector } from 'react-redux'
import { UserButton, useUser } from '@clerk/nextjs'

const Navbar = () => {
  const navbarData = [
    { title: 'Home', href: '/' },
    { title: 'Contact', href: '/contact' },
    { title: 'About', href: '/about' },
  ]

  const { isSignedIn, user } = useUser();

  return (
    <div className='flex sticky top-0 z-[50] bg-white px-[4rem] justify-between items-center w-[100%] h-[4.3rem] border-2   ' >
      <h2 className=' text-[1.6rem] font-poppins font-[700]   ' >Exclusive</h2>

      <div className='flex items-center gap-[1.5rem] ' >
        {
          navbarData.map((navItems, index) => {
            return (
              <SingleLinks key={index} data={navItems} />
            )
          })
        }

        {
          isSignedIn ? (
            <SingleLinks data={{ title: "Dashboard", href: "/dashboard" }} />
          ) : (
            <SingleLinks data={{ title: "Login", href: "/login" }} />
          )
        }
      </div>

      <div className='flex items-center gap-[.5rem] ' >
        <SearchBar styles=' mr-[1.5rem] ' />
        <WishlistIcon />
        <CartIcon />
        <div className=' ml-[.7rem] ' >

          {
            isSignedIn && (
              <UserButton />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
