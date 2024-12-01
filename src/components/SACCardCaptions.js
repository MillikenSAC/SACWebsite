import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function CouncilMemberCardWithCaption({ name, position, imgSrc, caption, instagram, email, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden max-w-2xl rounded-3xl shadow-lg border-indigo-900 border transition-transform hover:scale-105 hover:shadow-xl duration-200 ease-in-out bg-white w-[500px] h-auto"
    >
      <img src={imgSrc} alt={name} className="w-full h-[300px] object-cover" style={{ borderRadius: '24px 24px 0 0' }}/>

      {/* Social Icons */}
      <div className="absolute top-[19rem] pt-4 right-3 flex flex-row space-x-2">
        {position !== "Teacher Advisor" && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
              <FaInstagram className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out" size={24} />
            </div>
          </a>
        )}
        <a
          href={`mailto:${email}`}
          className="group relative block"
        >
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
            <FaEnvelope className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out" size={24} />
          </div>
        </a>
      </div>

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
