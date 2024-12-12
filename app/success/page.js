import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-green-50">
      <div className="flex items-center justify-center mb-6">
        <FaCheckCircle className="text-green-500 text-[6rem] animate-pulse" />
      </div>
      <h1 className="mb-4 text-2xl font-bold text-green-700">
        Payment Successful! 🎉
      </h1>
      <Link href="/">
        <div className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600">
          <MdHome /> Home
        </div>
      </Link>
    </div>
  );
};

export default SuccessPage;