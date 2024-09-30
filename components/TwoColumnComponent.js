'use client'; // For Next.js

import { FaMicrophone } from 'react-icons/fa';
import { GiTeacher, GiVideoConference } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGolfCourse } from "react-icons/md";

const TwoColumnComponent = () => {
  return (
    <div 
      className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 space-y-8 lg:space-y-0 lg:space-x-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/videos/1108516045/thumb/1.jpg?ip=x480')" }} // Replace with your GIF URL
    >
      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative w-full lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-left text-white relative z-10">
          Dear Members,
        </h2>
        <ul className="list-disc list-inside text-left space-y-4 text-lg text-white relative z-10">
          <li className="text-white">"Amidst triumph and setbacks, our spirits ascend,</li>
          <li className="text-white">With courage and unity, our resolve never bends,</li>
          <li className="text-white">Time to unfurl our wings, in collective might,</li>
          <li className="text-white">Together in our journey, reaching greater heights,</li>
          <li className="text-white">It's time to Soar High"</li>
        </ul>
      </div>

      <div className="relative w-full lg:w-1/2 grid grid-cols-3 gap-6 lg:gap-12 mt-8 lg:mt-0 z-10">
        <div className="flex flex-col items-center text-center space-y-2">
          <GiTeacher className="text-6xl text-white"/>
          <p className="text-sm text-white">Annual Conference</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <GiVideoConference className="text-6xl text-white"/>
          <p className="text-sm text-white">CEO's/Founder's</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <FaMicrophone className="text-6xl text-white"/>
          <p className="text-sm text-white">Speaker Sessions</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <TbMap2 className="text-6xl text-white"/>
          <p className="text-sm text-white">Chapter Cities</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <SlCalender className="text-6xl text-white"/>
          <p className="text-sm text-white">Day Event</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <MdOutlineGolfCourse className="text-6xl text-white"/>
          <p className="text-sm text-white">Golf Tournament</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
