'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent">
      {/* Left: Company Logo */}
      <div className="text-black text-2xl font-bold">
        #impact
      </div>

      {/* Right: Navigation Links with more padding and rounded borders */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-2">
        <div className="flex text-white font-semibold rounded-2xl overflow-hidden">
          <Link href="#agenda" className="px-6 py-3 hover:bg-orange-600 transition-colors duration-300">
            Event Agenda
          </Link>
          <Link href="#fees" className="px-6 py-3 hover:bg-orange-600 transition-colors duration-300">
            Registration Fees
          </Link>
          <Link href="#contact" className="px-6 py-3 hover:bg-orange-600 transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
