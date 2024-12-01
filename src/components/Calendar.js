import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/Calendar.css';
import events from "../data/CalendarData";
import Popup from './CalendarPopUp';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format: (date, formatStr) => format(date, formatStr).toUpperCase(), // Make month uppercase
    parse,
    startOfWeek,
    getDay,
    locales,
});

function SACCalendar() {
    const [allEvents] = useState(events);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [popupPosition, setPopupPosition] = useState(null);
    const [calendarPosition, setCalendarPosition] = useState(null);

    const handleEventClick = (event, e) => {
        const eventElement = e.target.getBoundingClientRect(); // Get the clicked event's position and size
        const calendarElement = e.target.closest(".rbc-calendar").getBoundingClientRect(); // Get the calendar's position

        setPopupPosition({
            top: eventElement.top - calendarElement.top + eventElement.height, // Below the event
            left: eventElement.left - calendarElement.left, // Aligned horizontally
        });

        setSelectedEvent(event);
    };

    const handleClosePopup = () => {
        setSelectedEvent(null);
        setPopupPosition(null);
    };

    const handleCalendarPosition = () => {
        const calendarElement = document.querySelector(".rbc-calendar");
        if (calendarElement) {
            const rect = calendarElement.getBoundingClientRect();
            setCalendarPosition({
                top: rect.top,
                left: rect.left,
            });
        }
    };

    useEffect(() => {
        handleCalendarPosition();
        window.addEventListener("resize", handleCalendarPosition);

        return () => {
            window.removeEventListener("resize", handleCalendarPosition);
        };
    }, []);

    return (
        <div className="calendar">
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                views={["month", "agenda"]}
                className="custom-calendar"
                onSelectEvent={(event, e) => handleEventClick(event, e)}
            />
            <Popup 
                event={selectedEvent} 
                onClose={handleClosePopup} 
                position={popupPosition} 
                calendarPosition={calendarPosition}
            />
        </div>
    );
}

export default SACCalendar;
