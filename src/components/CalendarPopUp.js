import React, { useEffect, useRef } from 'react';

const Popup = ({ event, onClose }) => {
    const popupRef = useRef();

    // Close the popup when clicking outside or pressing Escape
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    if (!event) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
            <div ref={popupRef} className="bg-white py-5 px-10 rounded-lg shadow-lg z-60">
                <h2 className="text-lg font-bold">{event.title}</h2>
                <p>
                    Date: {event.start.toLocaleDateString()} {/* Displaying only the date */}
                    <br />
                    Start Time: {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded w-full">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
