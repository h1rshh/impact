'use client'; // For Next.js

import { FaMicrophone } from 'react-icons/fa';
import { GiTeacher, GiVideoConference } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGolfCourse } from "react-icons/md";

const TwoColumnComponent = () => {
  return (
    <div 
      className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 lg:p-16 bg-white"
    >
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-left text-black relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Dear Members,
        </h2>
        <ul className="list-disc list-inside text-left space-y-4 text-lg lg:text-xl text-black relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>"Amidst triumph and setbacks, our spirits ascend,"</li>
          <li>“With courage and unity, our resolve never bends,”</li>
          <li>"Time to unfurl our wings, in collective might,”</li>
          <li>“Together in our journey, reaching greater heights,”</li>
          <li>"It's time to Soar High"</li>
        </ul>
      </div>

      <div className="relative w-full lg:w-1/2 grid grid-cols-3 gap-6 lg:gap-12 z-10">
        {/* Icon and text containers with hover and font family enhancements */}
        <div className="flex flex-col items-center text-center space-y-2 transform hover:scale-105 hover:font-semibold transition duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <GiTeacher className="text-6xl lg:text-7xl text-black"/>
          <p className="text-sm lg:text-base text-black">Annual Conference</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 transform hover:scale-105 hover:font-semibold transition duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <GiVideoConference className="text-6xl lg:text-7xl text-black"/>
          <p className="text-sm lg:text-base text-black">CEO's/Founder's</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 transform hover:scale-105 hover:font-semibold transition duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaMicrophone className="text-6xl lg:text-7xl text-black"/>
          <p className="text-sm lg:text-base text-black">Speaker Sessions</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 transform hover:scale-105 hover:font-semibold transition duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <TbMap2 className="text-6xl lg:text-7xl text-black"/>
          <p className="text-sm lg:text-base text-black">Chapter Cities</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 transform hover:scale-105 hover:font-semibold transition duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <SlCalender className="text-6xl lg:text-7xl text-black"/>
          <p className="text-sm lg:text-base text-black">Day Event</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2 transform hover:scale-105 hover:font-semibold transition duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <MdOutlineGolfCourse className="text-6xl lg:text-7xl text-black"/>
          <p className="text-sm lg:text-base text-black">Golf Tournament</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
