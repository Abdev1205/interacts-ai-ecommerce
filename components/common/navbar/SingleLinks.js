'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const SingleLinks = ({ data }) => {
  const { title, href } = data;
  const [isActive, setIsactive] = useState(false);

  const pathename = usePathname();

  const active = () => {
    if (pathename === href) {
      setIsactive(true);
    } else {
      setIsactive(false);
    }
  }

  React.useEffect(() => {
    active();
  }, [pathename]);



  return (
    <Link className={` ${isActive ? " underline underline-offset-[7px] decoration-2   decoration-red-700 " : "  "}  text-black font-poppins font-[400] `} href={href} >
      {title}
    </Link>
  )
}

export default SingleLinks
