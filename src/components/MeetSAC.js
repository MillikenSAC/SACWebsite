// MeetSACCard.js
import React from 'react';

export default function MeetSACCard({ title, description, imgSrc, link }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // Prevent clicking the card to open the link
      }}
      className="relative overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out bg-white p-6 w-96 h-80"
    >
      <div className="text-center">
        <div className="text-xl font-bold text-sky-950">{title}</div>
        <div className="h-1 bg-indigo-900 my-2"></div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex justify-center mt-4">
        <a onClick={() => window.open(link, '_blank')}>
          <img
            src={imgSrc}
            alt={title}
            className="w-24 h-24 rounded-full border-2 border-indigo-900 hover:scale-110 duration-200 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
}
