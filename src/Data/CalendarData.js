
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
            allDay: false, 
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

{/*
    { 
        title: "Battle of The Schools 🛡️🗡️",
        allDay: false, 
        description: "Unleash your school spirit at Battle of the Schools! Dive into a week of friendly competition against other schools, celebrating the pride of Milliken! ",
        start: new Date(2025, 1, 24, 8, 50), 
        end: new Date(2025, 1, 28, 15, 30)
    },*/}

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
        description: "Stop by during P5 to explore the goodies sold by Milliken's clubs. Don't miss out on the holiday fun!",
        start: new Date(2024, 11, 19, 14, 10),
        end: new Date(2024, 11, 19, 15, 30)
    },
    { 
        title: "Talent Show 🌟",
        allDay: false, 
        description: "Come watch and support amazing talent from our school in this exciting showcase of creativity and skills!",
        start: new Date(2024, 11, 20, 10, 10),
        end: new Date(2024, 11, 20, 11, 30)
    },
    { 
        title: "SACentines ❤️ ",
        allDay: false, 
        description: "What better way to celebrate Valentines Day than at SACentines! Enjoy fun activities and create lasting memories while celebrating love and friendship at MMHS!",
        start: new Date(2025, 1, 14, 11, 30),
        end: new Date(2025, 1, 14, 14, 10)
    },
    { 
        title: "🤫🤫",
        allDay: false, 
        description: "???",
        isTBD: true,
    },
    { 
        title: "Carnival 🎡🎪",
        allDay: false, 
        description: "Start the summer with a day full of fun at Carnival! Check out the tasty food, enjoy outdoor activities, and make memories with friends to celebrate the end of the school year!",
        isTBD: true,
    }
];

export default events;
