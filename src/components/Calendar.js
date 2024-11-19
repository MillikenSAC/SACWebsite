import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/Calendar.css';
import events from "../data/CalendarData";
import Popup from './CalendarPopUp';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function SACCalendar() {
    const [allEvents] = useState(events);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleClosePopup = () => {
        setSelectedEvent(null);
    };

    const currentDate = new Date();

    const dayPropGetter = (date) => {
        const isToday = date.toDateString() === currentDate.toDateString();
        return {
            className: isToday ? "current-day" : "",
        };
    };

    return (
        <div className="calendar">
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                views={["month", "agenda"]}
                className="custom-calendar"
                onSelectEvent={handleEventClick}
                dayPropGetter={dayPropGetter}
                formats={{
                    weekdayFormat: (date, culture, localizer) => format(date, "EEE"), // 3-letter day names (e.g., Mon, Tue)
                }}
            />
            <Popup event={selectedEvent} onClose={handleClosePopup} />
        </div>
    );
}

export default SACCalendar;
