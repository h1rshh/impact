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
        seconds: Math.floor((difference / 1000) % 60)
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
      className="flex flex-col lg:flex-row justify-between items-center p-8 border-2 border-gray-300 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/shutterstock/videos/1108516045/thumb/1.jpg?ip=x480')",
        height: '40vh', // Changed height to 50vh
      }}
    >
      {/* Left: Message */}
      <div className="text-2xl font-bold text-white text-center lg:text-left mb-4 lg:mb-0">
        <p>COUNTDOWN UNTIL EVENT</p>
        <p className="mt-2">REGISTER NOW</p>
      </div>

      {/* Right: Countdown Timer */}
      <div className="flex space-x-4 text-center">
        <div className="p-4 border border-gray-500 rounded-md bg-black bg-opacity-50">
          <span className="block text-3xl font-bold text-white">{timeLeft.days || '0'}</span>
          <span className="text-white">Days</span>
        </div>
        <div className="p-4 border border-gray-500 rounded-md bg-black bg-opacity-50">
          <span className="block text-3xl font-bold text-white">{timeLeft.hours || '0'}</span>
          <span className="text-white">Hours</span>
        </div>
        <div className="p-4 border border-gray-500 rounded-md bg-black bg-opacity-50">
          <span className="block text-3xl font-bold text-white">{timeLeft.minutes || '0'}</span>
          <span className="text-white">Minutes</span>
        </div>
        <div className="p-4 border border-gray-500 rounded-md bg-black bg-opacity-50">
          <span className="block text-3xl font-bold text-white">{timeLeft.seconds || '0'}</span>
          <span className="text-white">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
