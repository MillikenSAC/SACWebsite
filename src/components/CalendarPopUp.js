import React, { useEffect, useRef, useState } from "react";

const Popup = ({ event, onClose, position, calendarPosition }) => {
    const popupRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setVisible(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setVisible(false);
            }
        };

        const handleResize = () => {
            if (popupRef.current) {
                setVisible(false);
                setTimeout(() => setVisible(true), 100); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        };
    }, [onClose]);

    if (!event || !position || !calendarPosition) return null;

    const formattedDate = event.start.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    const formattedTime = event.start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const popupHeight = 200; 
    const popupWidth = 300;  

    const adjustedPosition = {
        top: position.top + calendarPosition.top - 160, 
        left: position.left + calendarPosition.left + 160,
    };

    const finalPosition = {
        top: Math.min(
            adjustedPosition.top,
            window.innerHeight - popupHeight - 20
        ),
        left: Math.min(
            adjustedPosition.left,
            window.innerWidth - popupWidth - 20 
        ),
    };

    const popupStyle = {
        position: "absolute",
        top: finalPosition.top,
        left: finalPosition.left,
        zIndex: 1000,
        transform: visible ? "scale(1)" : "scale(0.95)",
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease-in-out, transform 200ms ease-in-out",
        maxWidth: `${popupWidth}px`,
        wordWrap: "break-word",
    };

    return (
        <div
            style={popupStyle}
            ref={popupRef}
            className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 max-h-[200px] overflow-scroll"
        >
            {/* Close Button */}
            <button
                onClick={() => {
                    setVisible(false); // Hide popup before closing
                    setTimeout(onClose, 200); // Delay for transition
                }}
                className="absolute top-1 left-2 m-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Close"
            >
                &times;
            </button>

            {/* Event Details */}
            <h2 className="m-3 text-xl font-semibold text-gray-800">{event.title}</h2>
            <p className="m-3 text-sm text-gray-500 mb-3">{formattedDate}, {formattedTime}</p>

            {/* Optional Description */}
            {event.description && (
                <p className="text-sm text-gray-700">
                    {event.description}
                </p>
            )}
        </div>
    );
};

export default Popup;