import React from 'react';

export default function CouncilMemberCardWithCaption({ name, position, imgSrc, caption, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-3xl shadow-lg border-indigo-900 border transition-transform hover:scale-105 hover:shadow-xl duration-200 ease-in-out bg-white w-[400px] h-auto cursor-pointer"
    >
      <img src={imgSrc} alt={name} className="w-full h-[200px] object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <div className="text-white font-bold text-lg">{name}</div>
        <div className="text-gray-300 text-sm">{position}</div>
      </div>

      {/* Body section with caption and text */}
      <div className="p-4 mt-4 bg-gray-100 rounded-b-3xl">
        <div className="font-semibold text-md">{caption}</div>
        <p className="text-gray-700 text-sm mt-2">{text}</p>
      </div>
    </div>
  );
}
