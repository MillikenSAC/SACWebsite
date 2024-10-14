// Function to generate weekly events with specific times
const generateWeeklyEvents = (title, startDate, endDate, occurrences) => {
    const events = [];
    const eventDuration = endDate - startDate; // Calculate the duration of the event
    
    for (let i = 0; i < occurrences; i++) {
        const start = new Date(startDate);
        const end = new Date(start); // Create a new Date object for end based on start
        
        start.setDate(start.getDate() + i * 7); // Increment start date by 7 days
        end.setTime(start.getTime() + eventDuration); // Set end time based on the original duration
        
        events.push({
            title: title,
            allDay: false, // Change to false if you want to specify time
            start: start,
            end: end,
        });
    }
    return events;
};

{/* Single events should follow:
    title: [name]
    allDay: true/false
    start: new Date(YYYY, MM-1, DD, HH, mm)
    end: new Date(YYYY, MM-1, DD, HH, SS) */}

const events = [
    {
        title: "Single Event",
        allDay: false,
        start: new Date(2024, 10, 16), // November 16, 2024
        end: new Date(2024, 10, 16, 1, 0),   // Ends on the same day
    },
    {
        title: "Hallowgreen",
        allDay: false,
        start: new Date(2024, 9, 31, 11, 30), 
        end: new Date(2024, 9, 31, 14, 10),   
    },
    {
        title: "Geography Club",
        allDay: false,
        start: new Date(2024, 10, 18, 11, 30), 
        end: new Date(2024, 10, 22, 14, 10),   
    },
    ...generateWeeklyEvents(
        "Robotics Meeting", 
        new Date(2024, 8, 13, 15, 30), // Starts on Sept 13, 2024, at 3:30 PM
        new Date(2024, 8, 13, 16, 30), // End Date/time
        10 // 10 weekly occurrences
    ),
    ...generateWeeklyEvents(
        "SAC Meeting", 
        new Date(2024, 8, 10, 15, 30), 
        new Date(2024, 8, 8, 16, 30), 
        10 // 10 weekly occurrences
    ),
];

export default events;
