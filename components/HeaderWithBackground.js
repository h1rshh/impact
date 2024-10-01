'use client'; // For Next.js

import Link from 'next/link';

const HeaderWithBackground = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image with proper fitting */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951233.jpg"
          alt="Background Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay (including header) */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        <header className="flex justify-between items-center p-4 w-full">
          {/* Left: Logo */}
          <div className="text-3xl font-bold text-white">
            <img src="/Logo.png" alt="Logo" className="h-32 w-auto" />
          </div>

          {/* Right: Navigation Links */}
          <nav className="hidden lg:flex bg-transparent p-2">
            <div className="flex text-white font-semibold rounded-2xl overflow-hidden">
              <Link href="#agenda" className="px-4 py-2 lg:px-6 lg:py-3 hover:text-orange-600 transition-colors duration-300">
                Event Agenda
              </Link>
              <Link href="#fees" className="px-4 py-2 lg:px-6 lg:py-3 hover:text-orange-600 transition-colors duration-300">
                Registration Fees
              </Link>
              <Link href="#contact" className="px-4 py-2 lg:px-6 lg:py-3 hover:text-orange-600 transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content aligned to the left with adjusted padding for better responsiveness */}
        <main className="flex flex-col items-start justify-center text-left h-full text-white px-6 lg:px-24 mt-16 sm:mt-20 ml-6 lg:ml-10"> {/* Adjusted padding and margins */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Built for the events <br />
            of today-and <br />
            tomorrow
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Join us for an unforgettable experience!
          </p>
          
          {/* Registration Open Button */}
          <Link href="#registration" className="mt-6 bg-orange-600 text-white font-semibold py-3 px-6 lg:py-4 lg:px-8 hover:bg-orange-700 transition-colors duration-300">
            Registration Open
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HeaderWithBackground;
