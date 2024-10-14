import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/Calendar.css';
import events from "../components/CalendarData"

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


const calendarStyle = {
    height: 700, 
    margin: "60px",
    fontFamily: "Inter",
};

function SACCalendar() {
    const [allEvents] = useState(events);
    const [style] = useState(calendarStyle);

    return (
        <div className="calendar">
            <Calendar 
                localizer={localizer} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                views={["month", "agenda"]} 
                style={style} 
            />
        </div>
    );
}

export default SACCalendar;
