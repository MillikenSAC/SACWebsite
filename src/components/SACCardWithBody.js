import React from 'react';

export default function CouncilMemberCardWithCaption({ name, position, imgSrc, caption, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden max-w-2xl rounded-3xl shadow-lg border-indigo-900 border transition-transform hover:scale-105 hover:shadow-xl duration-200 ease-in-out bg-white w-[400px] h-auto cursor-pointer"
    >
      <img src={imgSrc} alt={name} className="w-full h-[200px] object-cover" />
      
      {/* Body: Member Info */}
      <div className="p-6 pt-4">
          <div className="flex justify-between items-start">
            {/* Name and Position */}
            <div>
              <div className="text-2xl font-bold">{name}</div>
              <div className="text-lg text-gray-500">{position}</div>
            </div>

           
          </div>

          {/* Caption */}
          <div className="mt-4 text-gray-700">{caption}</div>
        </div>
    </div>
  );
}
