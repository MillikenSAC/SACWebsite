import React from 'react';

export default function ClubCard({ name, desc, imgSrc, link, room, meetingDay, googleClassroomCode }) {
  return (
    <div
      onClick={(e) => {
        // Prevent clicking the card to open the link
        e.stopPropagation();
      }}
      className="relative overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out bg-white p-6 w-96 h-80" // Added vertical margin my-4 for spacing
    >
      <div className="flex items-start">
        {/* Logo in its own div */}
        <div className="mr-4">
          <a onClick={() => window.open(link, '_blank')}>
            <img
              src={imgSrc}
              alt={name}
              className="w-20 h-20 rounded-full border-2 border-indigo-900 hover:scale-110 duration-200 ease-in-out" // Added hover effect to the logo
            />
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
      
      {/* Bottom section for description, adjusted for height */}
      <div className="text-gray-700 py-5 h-24 overflow-hidden overflow-ellipsis mt-3 text-left">
        {desc}
      </div>
    </div>
  );
}
