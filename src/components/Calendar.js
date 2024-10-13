
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/Calendar.css';

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

const events = [
// Format new events like this:
// {
//     title: "",
//     allDay: true/false,
//     start: new Date(year, month, day, hour, minute, second),
//     end: new Date(year, month, day, hour, minute, second),
// },
    {
        title: "Sacentine",
        allDay: true,
        start: new Date(2024, 1, 14),
        end: new Date(2024, 1, 14),
    },

];

const calenderStyle = {
    height: 700, 
    margin: "60px",
    fontFamily: "Inter",
}

function SACCalendar() {
    const [allEvents] = useState(events);
    const [style] = useState(calenderStyle);

    return (
        <div class="calendar">
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" views={["month", "agenda"]} style={style} />
        </div>
    );
}

export default SACCalendar;
