'use client'
import React from 'react';

const Rcards = () => {
  return (
    <div className="bg-white p-6 mx-4 my-10 rounded-lg shadow-lg">
      {/* Black Gradient Background */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-lg">
        <h2 className="text-center text-4xl font-bold mb-10 text-white">Registration Fees</h2>

        {/* Card Container */}
        <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Single Occupancy Card */}
          <div className="bg-gradient-to-br from-navy-800 via-black to-navy-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 h-96">
            <h3 className="text-2xl font-bold mb-4">Single Occupancy</h3>
            <p className="text-lg font-bold mb-4">Price: ₹95,000/-</p>
            <ul className="mb-6">
              <li>Two night stay in ITC Delhi</li>
              <li>All Meals Included</li>
              <li>Alcohol and other beverages included</li>
              <li>Complimentary Airport pickup</li>
              <li>Golf Game</li>
            </ul>
            <a href="#registration" className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300">Registration Open</a>
          </div>

          {/* Double Occupancy Card */}
          <div className="bg-gradient-to-br from-navy-800 via-black to-navy-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 h-96">
            <h3 className="text-2xl font-bold mb-4">Double Occupancy</h3>
            <p className="text-lg font-bold mb-4">Price: ₹1,00,000/-</p>
            <ul className="mb-6">
              <li>Two night stay in ITC Delhi</li>
              <li>All Meals Included</li>
              <li>Alcohol and other beverages included</li>
              <li>Complimentary Airport pickup</li>
              <li>Golf Game</li>
            </ul>
            <a href="#registration" className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300">Registration Open</a>
          </div>

          {/* Triple Occupancy Card */}
          <div className="bg-gradient-to-br from-navy-800 via-black to-navy-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 h-96">
            <h3 className="text-2xl font-bold mb-4">Triple Occupancy</h3>
            <p className="text-lg font-bold mb-4">Price: ₹1,25,000/-</p>
            <ul className="mb-6">
              <li>Two night stay in ITC Delhi</li>
              <li>All Meals Included</li>
              <li>Alcohol and other beverages included</li>
              <li>Complimentary Airport pickup</li>
              <li>Golf Game</li>
            </ul>
            <a href="#registration" className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300">Registration Open</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rcards;
