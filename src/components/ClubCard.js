import React from 'react';

export default function ClubCard({ name, desc, imgSrc, link }) {
  return (
      <div
          className="relative overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out bg-white p-6 h-80 w-96" // Removed cursor-pointer
      >
          <div className="flex items-start h-full">
              <div className="relative">
                  <img
                      src={imgSrc}
                      alt={name}
                      className="w-20 h-20 rounded-full border-2 border-indigo-900 mr-4 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer" // Only logo has cursor-pointer
                      onClick={() => window.open(link, '_blank')} // Only clicking the logo works
                  />
              </div>
              <div className="flex-1">
                  <div className="text-xl font-bold text-sky-950">{name}</div>
                  <div className="h-1 bg-indigo-900 my-2"></div>
                  <div className="text-gray-700 h-40 overflow-hidden overflow-ellipsis">
                      {desc}
                  </div>
              </div>
          </div>
      </div>
  );
}
