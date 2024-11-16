import React, { useEffect } from 'react'; 
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function MemberPopup({ member, onClose }) {
  useEffect(() => {
    if (!member) return;

    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Close popup on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup on component unmount or when `member` changes
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-full h-full"
      onClick={(e) => {
        // Close the popup if clicked outside the content area
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Popup Container */}
      <div className="relative w-full max-w-2xl h-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* "X" Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          ✕
        </button>

        {/* Header: Member Image */}
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-64 object-cover"
        />

        {/* Body: Member Info */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            {/* Name and Position */}
            <div>
              <div className="text-2xl font-bold">{member.name}</div>
              <div className="text-lg text-gray-500">{member.title}</div>
            </div>

            {/* Icons */}
            <div className="flex space-x-3">
              {/* Instagram Icon */}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-400 transition transform hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>
              )}
              {/* Email Icon */}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-indigo-600 hover:text-indigo-400 transition transform hover:scale-110"
                >
                  <FaEnvelope size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Caption */}
          <div className="mt-4 text-gray-700">{member.caption}</div>
        </div>
      </div>
    </div>
  );
}
