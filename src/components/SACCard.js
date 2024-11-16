import React from 'react';

export default function CouncilMemberCard({ name, position, imgSrc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-3xl shadow-lg border-indigo-900 border transition-transform hover:scale-105 hover:shadow-xl duration-200 ease-in-out bg-white w-[400px] h-[250px] cursor-pointer"
    >
      <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <div className="text-white font-bold text-lg">{name}</div>
        <div className="text-gray-300 text-sm">{position}</div>
      </div>
    </div>
  );
}
