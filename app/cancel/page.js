import Link from 'next/link';
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

const CancelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-red-50">
      <div className="flex items-center justify-center mb-6">
        <FaTimesCircle className="text-red-500 text-[6rem] animate-bounce" />
      </div>
      <h1 className="mb-4 text-2xl font-bold text-red-700">
        Payment Cancelled. Try Again!
      </h1>
      <Link href="/">
        <div className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600">
          <MdHome /> Home
        </div>
      </Link>
    </div>
  );
};

export default CancelPage;
