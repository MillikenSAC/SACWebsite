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

{/*
    Weekly events should follow: 
    
     ...generateWeeklyEvents(
        "Robotics Meeting", 
        new Date(2024, 8, 13, 15, 30), // Starts on Sept 13, 2024, at 3:30 PM
        new Date(2024, 8, 13, 16, 30), // End Date/time
        10 // 10 weekly occurrences
    ), */}

const events = [
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
    { 
        title: "STEMPower Web Dev Workshop",
        allDay: false, 
        start: new Date(2024, 9, 29, 3, 45), 
        end: new Date(2024, 9, 29, 4, 45)
    },
    { 
        title: "STEMPower Monthly Kahoots", 
        allDay: false, 
        start: new Date(2024, 9, 23, 11, 30), 
        end: new Date(2024, 9, 23, 12, 15)
    }, 
    {
        title: "YOSA Samosa Sale", 
        allDay: false, 
        start: new Date(2024, 10, 8, 15, 35), 
        end: new Date(2024, 10, 8, 16, 35), 
    }, 
    { 
        title: "Case Closed, A Red Cross Mystery",
        allDay: false, 
        start: new Date(2024, 9, 28, 15, 45),
        end: new Date(2024, 9, 28, 17, 15)
    },
    { 
        title: "Winter Market ⛄ ❄️",
        allDay: false, 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        start: new Date(2024, 11, 19, 14, 10),
        end: new Date(2024, 11, 19, 15, 30)
    },
    { 
        title: "Talent Show 🌟",
        allDay: false, 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        start: new Date(2024, 11, 20, 10, 10),
        end: new Date(2024, 11, 20, 11, 30)
    },
    { 
        title: "SACentines ❤️ ",
        allDay: false, 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        start: new Date(2025, 1, 14, 15, 45),
        end: new Date(2025, 1, 14, 17, 15)
    },
    { 
        title: "Event 2",
        allDay: false, 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        start: new Date(2025, 1, 14, 15, 45),
        end: new Date(2025, 1, 14, 17, 15)
    },
    { 
        title: "Event 3",
        allDay: false, 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        start: new Date(2025, 1, 14, 15, 45),
        end: new Date(2025, 1, 14, 17, 15)
    }
];

export default events;
