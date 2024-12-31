import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function ClubCard({ name, desc, imgSrc, link, room, meetingDay, googleClassroomCode }) {
  return (
    <div
      onClick={(e) => {
        // Prevent clicking the card to open the link
        e.stopPropagation();
      }}
      className="relative overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out bg-white p-6 w-96 h-80"
    >
      <div className="flex items-start relative">
        {/* Logo in its own div */}
        <div className="mr-4 relative">
          <a onClick={() => window.open(link, '_blank')} className="group relative block">
            <div className="relative">
              <img
                src={imgSrc}
                alt={name}
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-900 group-hover:scale-110 duration-200 ease-in-out"
              />
              {/* Instagram icon on white circle */}
              <div className="absolute bottom-0 right-0 m-0 w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
                <FaInstagram
                  className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
                  size={20} 
                />
              </div>
            </div>
          </a>
        </div>

        {/* Top section for name, bar, and data */}
        <div className="flex-1">
          <div className="text-xl font-bold text-sky-950">{name}</div>
          <div className="h-1 bg-indigo-900 my-2"></div>
          <div className="text-gray-600 mt-1">
            <div>Room: {room}</div>
            <div>Meeting Day: {meetingDay}</div>
            <div>Classroom Code: {googleClassroomCode}</div>
          </div>
        </div>
      </div>
      
      {/* Bottom section for description */}
      <div className="text-gray-700 pt-4 h-28 overflow-scroll text-left">
        {desc}
      </div>
    </div>
  );
}
