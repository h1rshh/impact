'use client';
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline'; // Use the correct import for Heroicons v2

const Rcards = () => {
  return (
    <div className="bg-white p-6 mx-4 my-10 rounded-lg shadow-lg">
      <div className="bg-white lg:bg-gradient-to-br lg:from-black lg:via-gray-900 lg:to-black p-8 rounded-lg">
        <h2 className="text-center text-4xl font-bold mb-10 text-white lg:text-white">Registration Fees</h2>

        <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Single Occupancy Card */}
          <div className="bg-gray-900 lg:bg-gradient-to-br lg:from-navy-800 lg:via-black lg:to-navy-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 h-full flex flex-col max-w-xs mx-auto">
            <h3 className="text-2xl font-bold mb-4">Single Occupancy</h3>
            <p className="text-lg font-bold mb-4">Price: ₹95,000/-</p>
            <ul className="mb-6 flex-grow space-y-2">
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Two night stay in ITC Delhi
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> All Meals Included
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Alcohol and other beverages included
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Complimentary Airport pickup
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Transport provided for events
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Golf Game
              </li>
            </ul>
            <a href="#registration" className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 text-center">
              Registration Open
            </a>
          </div>

          {/* Double Occupancy Card */}
          <div className="bg-gray-900 lg:bg-gradient-to-br lg:from-navy-800 lg:via-black lg:to-navy-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 h-full flex flex-col max-w-xs mx-auto">
            <h3 className="text-2xl font-bold mb-4">Double Occupancy</h3>
            <p className="text-lg font-bold mb-4">Price: ₹75,000/-</p>
            <ul className="mb-6 flex-grow space-y-2">
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Two night stay in ITC Delhi
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> All Meals Included
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Alcohol and other beverages included
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Complimentary Airport pickup
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Transport provided for events
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Additional Room Services are not included(SPA, MiniBar)
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Golf Game
              </li>
            </ul>
            <a href="#registration" className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 text-center">
              Registration Open
            </a>
          </div>

          {/* Triple Occupancy Card */}
          <div className="bg-gray-900 lg:bg-gradient-to-br lg:from-navy-800 lg:via-black lg:to-navy-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-500 h-full flex flex-col max-w-xs mx-auto">
            <h3 className="text-2xl font-bold mb-4">Triple Occupancy</h3>
            <p className="text-lg font-bold mb-4">Price: ₹60,000/-</p>
            <ul className="mb-6 flex-grow space-y-2">
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Two night stay in ITC Delhi
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> All Meals Included
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Alcohol and other beverages included
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Complimentary Airport pickup
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Transport provided for events
              </li>

              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" /> Golf Game
              </li>
            </ul>
            <a href="#registration" className="mt-4 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 text-center">
              Registration Open
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rcards;
