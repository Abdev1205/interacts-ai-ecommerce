'use client'

import { AppStoreImage, PlayStoreImage, QrImage } from '@/public/assetManager';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black px-[4rem] mt-[8rem] ">
      <div className="container flex flex-wrap justify-between gap-8 mx-auto font-openSans">

        {/* Exclusive Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-poppins font-[500] ">Exclusive</h2>
          <p className="mt-4 opacity-[.7]">Get 10% off your first order</p>
          <form className="flex items-center mt-4 opacity-[.7] " onSubmit={(e) => { e.preventDefault() }} >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 px-[1rem] text-white bg-gray-800 rounded-l outline-none"
            />
            <button className="p-2 bg-gray-700 rounded-r">
              <span>&#10148;</span> {/* Arrow icon */}
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div className="flex flex-col ">
          <h2 className="text-xl font-poppins font-[500] ">Support</h2>
          <p className="mt-4 opacity-[.7]  ">VIT Univeristy, India, </p>
          <p className=' opacity-[.7] ' >abhaym1205@gmail.com</p>
          <p className=' opacity-[.7] ' >7770956045</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-poppins font-[500] ">Account</h2>
          <ul className="mt-4 opacity-[.7] space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-poppins font-[500] ">Quick Link</h2>
          <ul className="mt-4 opacity-[.7] space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-poppins font-[500] ">Download App</h2>
          <p className="mt-4 opacity-[.7]">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4 mt-4 opacity-[.7]">

            <Image src={QrImage} alt="QR Code" width={500} className=' w-[5rem] ' />
            <div className="flex flex-col gap-2">
              <Image src={PlayStoreImage} alt="Get it on Google Play" width={400} className=' w-[7rem] ' />
              <Image src={AppStoreImage} alt="Download on the App Store" width={400} className=' w-[7rem] ' />
            </div>
          </div>
          <div className="flex gap-4 mt-4 opacity-[.7]">
            <span> {/* Replace with icons for social media */}
              <a href="#"><i className="fab fa-facebook"></i></a>
            </span>
            <span>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </span>
            <span>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </span>
            <span>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </span>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container pt-4 opacity-[.7] mx-auto mt-8 text-center border-t border-gray-700">
        <p>&copy; Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
