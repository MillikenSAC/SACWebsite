import React from 'react';
import extLinkLogo from '../assets/extLinkLogo.png';

export default function ClubResourceCard({ name, desc, link, logo }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out bg-white p-6 w-96 h-60 cursor-pointer"
    >
      {/* icon */}
      <div className="absolute top-4 right-4">
        <img src={extLinkLogo} alt={`${name} logo`} className="w-10 h-10" />
      </div>
      
      <div className="flex flex-col h-full">
        <div className="text-xl font-bold text-sky-950 mb-2">{name}</div>
        <div className="h-1 bg-indigo-900 my-2"></div>
        <div className="text-gray-700 flex-grow">{desc}</div>
      </div>
    </a>
  );
}
