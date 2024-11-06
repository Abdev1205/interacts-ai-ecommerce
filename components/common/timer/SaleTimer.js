'use client'

import React, { useState, useEffect } from 'react'

const SaleTimer = ({ initialTime, repeat = true }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (repeat) {
      setTimeLeft(initialTime);
    }
  }, [timeLeft, initialTime, repeat]);

  const formatTime = () => {
    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

  return (
    <div className="flex items-center justify-center gap-[.4rem] w-fit">
      <div className="text-center">
        <div className="text-[.6rem] font-poppins  ">Days</div>
        <div className="text-[1.8rem] font-bold ">{days}</div>
      </div>
      <div className='text-red-400 text-[1.8rem] mt-[.8rem] ' >:</div>


      <div className="text-center">
        <div className="text-[.6rem] font-poppins  ">Hours</div>
        <div className="text-[1.8rem] font-bold ">{hours < 10 ? '0' : ''}{hours}</div>
      </div>

      <div className='text-red-400 text-[1.8rem] mt-[.8rem] ' >:</div>


      <div className="text-center">
        <div className="text-[.6rem] font-poppins  ">Minutes</div>
        <div className="text-[1.8rem] font-bold ">{minutes < 10 ? '0' : ''}{minutes}</div>
      </div>

      <div className='text-red-400 text-[1.8rem] mt-[.8rem] ' >:</div>


      <div className="text-center">
        <div className="text-[.6rem] font-poppins  ">Seconds</div>
        <div className="text-[1.8rem] font-bold ">{seconds < 10 ? '0' : ''}{seconds}</div>
      </div>
    </div>
  );
};


export default SaleTimer
