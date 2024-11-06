'use client'

import { useUser } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { IoCall, IoMailOutline } from "react-icons/io5";


export default function ContactPage() {
  return (
    <div className="flex w-full justify-between px-[4rem] mt-[4rem]  ">
      {/* Left Side - Contact Info */}
      <div className=" w-[30rem] flex flex-col border rounded-md bg-white p-[1.5rem] gap-[1rem]  ">
        {/* Call Section */}
        <div className="flex flex-col gap-[1rem] items-start border-b-2 pb-[1rem] ">
          <div className=' flex gap-[1rem] items-center ' >
            <div className="bg-red-600 text-white rounded-full size-[3rem] flex justify-center items-center ">
              <IoCall className=' text-[1.3rem] ' />
            </div>
            <h3 className="text-[1.2rem] font-poppins font-[600] " >Call To Us</h3>
          </div>

          <div className=" mt-[.4rem] "  >
            <p className="text-gray-500">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-900 ">Phone: +8801611112222</p>
          </div>
        </div>

        {/* Write Section */}
        <div className="flex flex-col gap-[1rem] items-start ">
          <div className=' flex gap-[1rem] items-center ' >
            <div className="bg-red-600 text-white rounded-full size-[3rem] flex justify-center items-center ">
              <IoMailOutline className=' text-[1.3rem] ' />
            </div>
            <h3 className="text-[1.2rem] font-poppins font-[600] " >Write To Us</h3>
          </div>

          <div className=" mt-[.4rem] "  >
            <p className="text-gray-500">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-500">Emails: customer@exclusive.com</p>
            <p className="text-gray-900 ">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className=" w-[50rem] flex  border rounded-md bg-white p-[1.5rem]    ">
        <form className="flex w-full flex-col gap-[1rem] ">
          <div className="flex w-full justify-between gap-[1rem] ">
            <input
              type="text"
              placeholder="Your Name *"
              className="p-2 w-full border bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="p-2 w-full border bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="p-2 w-full border bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="p-2 border bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            rows="8"
          ></textarea>
          <button
            type="submit"
            className="p-2 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
