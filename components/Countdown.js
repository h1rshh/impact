'use client'; // Add this to indicate the component is a Client Component

import React, { useState, useEffect } from 'react';

const Countdown = () => {
  // Set the target event date
  const targetDate = new Date('2024-12-31T23:59:59'); // Example: Event on December 31, 2024

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center p-8 bg-white relative z-10"
      style={{
        height: '40vh', // Set a specific height
        borderRadius: '10px', // Slightly rounded corners for the whole component
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adding some shadow to the component
      }}
    >
      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center w-full">
        {/* Left: Message */}
        <div className="text-2xl font-bold text-black text-center lg:text-left mb-4 lg:mb-0">
          <p>COUNTDOWN UNTIL EVENT</p>
          <p className="mt-2">REGISTER NOW</p>
        </div>

        {/* Right: Countdown Timer with new box color */}
        <div className="flex space-x-4 text-center">
          <div className="p-4 border border-blue-200 rounded-md bg-blue-100 shadow-lg">
            <span className="block text-3xl font-bold text-black">{timeLeft.days || '0'}</span>
            <span className="text-black">Days</span>
          </div>
          <div className="p-4 border border-blue-200 rounded-md bg-blue-100 shadow-lg">
            <span className="block text-3xl font-bold text-black">{timeLeft.hours || '0'}</span>
            <span className="text-black">Hours</span>
          </div>
          <div className="p-4 border border-blue-200 rounded-md bg-blue-100 shadow-lg">
            <span className="block text-3xl font-bold text-black">{timeLeft.minutes || '0'}</span>
            <span className="text-black">Minutes</span>
          </div>
          <div className="p-4 border border-blue-200 rounded-md bg-blue-100 shadow-lg">
            <span className="block text-3xl font-bold text-black">{timeLeft.seconds || '0'}</span>
            <span className="text-black">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
