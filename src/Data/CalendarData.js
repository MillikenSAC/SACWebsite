
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
        title: "Carnival 🎡🎪",
        allDay: false, 
        description: "Start the summer with a day full of fun at Carnival! Check out the tasty food, enjoy outdoor activities, and make memories with friends to celebrate the end of the school year!",
        start: new Date(2025, 5, 13, 8, 50),
        end: new Date(2025, 5, 13, 15, 30),
    },
    { 
        title: "Period 1 Exams",
        allDay: false, 
        description: "!",
        start: new Date(2025, 0, 22, 9),
        end: new Date(2025, 0, 22)
    },
    { 
        title: "Period 2 Exams",
        allDay: false, 
        description: "",
        start: new Date(2025, 0, 23, 9),
        end: new Date(2025, 0, 23)
    },
    { 
        title: "Period 5 Exams",
        allDay: false, 
        description: "",
        start: new Date(2025, 0, 24, 9),
        end: new Date(2025, 0, 24)
    },
    { 
        title: "Period 3 Exams",
        allDay: false, 
        description: "D",
        start: new Date(2025, 0, 27, 9),
        end: new Date(2025, 0, 27)
    },
    { 
        title: "Period 4 Exams",
        allDay: false, 
        description: "",
        start: new Date(2025, 0, 28, 9),
        end: new Date(2025, 0, 28)
    },
    { 
        title: "Exam Review",
        allDay: false, 
        description: "",
        start: new Date(2025, 0, 30, 9),
        end: new Date(2025, 0, 30)
    },
    { 
        title: "VEX Provs 🤖",
        allDay: false, 
        description: "MMHS VEX Team 11702A will be competing at the provincial competition. Good luck! ",
        start: new Date(2025, 2, 1, 8),
        end: new Date(2025, 2, 2, 12)
    },
    ,
    { 
        title: "BOTS",
        allDay: false, 
        description: "Battle of The Schools!",
        start: new Date(2025, 1, 24),
        end: new Date(2025, 1, 29)
    },
    { 
        title: "PCF Contests 🧮📚",
        allDay: false, 
        description: "The Pascal, Cayley, and Fermat contests will be hosted in the cafeteria from 8:30 AM to 10:10 AM. Bring a scientific calculator, pencil and eraser!",
        start: new Date(2025, 1, 26, 8, 30),
        end: new Date(2025, 1, 26, 10, 10)
    },
    { 
        title: "Euclid Contest 📏📐",
        allDay: false, 
        description: "The Euclid contest will be hosted in the cafeteria.",
        start: new Date(2025, 3, 2, 8, 20),
        end: new Date(2025, 3, 2, 10, 50)
    },
    { 
        title: "FGH Contests 📊📝",
        allDay: false, 
        description: "The Fryer, Galois, and Hypatia contests will be hosted in the cafeteria.",
        start: new Date(2025, 3, 3, 8, 20),
        end: new Date(2025, 3, 3, 9, 35)
    },
    { 
        title: "CAP Contest 📊🌏",
        allDay: false, 
        description: "The Canadian Association of Physicists (CAP) contest will be hosted.",
        start: new Date(2025, 3, 9),
        end: new Date(2025, 3, 9)
    },
    { 
        title: "CCC 📊🧪",
        allDay: false, 
        description: "The Canadian Chemistry Contest (CCC) will be hosted.",
        start: new Date(2025, 3, 23),
        end: new Date(2025, 3, 23)
    },
    { 
        title: "SIN Contest 🌌🌟",
        allDay: false, 
        description: "The Sir Isaac Newton (SIN) contest by the University of Waterloo will be hosted.",
        start: new Date(2025, 4, 1),
        end: new Date(2025, 4, 1)
    },
    { 
        title: "Chem13 Contest 🥼📝",
        allDay: false, 
        description: "The Chem 13 Contest by the University of Waterloo will be hosted.",
        start: new Date(2025, 4, 8),
        end: new Date(2025, 4, 8)
    },
    { 
        title: "OAPT Contest 🔭⚛️",
        allDay: false, 
        description: "The Ontario Association of Physics Teachers (OAPT) contest will be hosted.",
        start: new Date(2025, 4, 14),
        end: new Date(2025, 4, 14)
    },
    { 
        title: "Avogadro Contest 🔬💊",
        allDay: false, 
        description: "The Avogadro Contest by the University of Waterloo will be hosted.",
        start: new Date(2025, 4, 15),
        end: new Date(2025, 4, 15)
    },
    { 
        title: "ICDC ✈️🏖️",
        allDay: false, 
        description: "Best of luck to all International Career Development Conference (ICDC) competitors",
        start: new Date(2025, 3, 26),
        end: new Date(2025, 3, 29)
    },
    { 
        title: "PA Day 😴",
        allDay: false, 
        description: "Best of luck to all International Career Development Conference (ICDC) competitors",
        start: new Date(2025, 4, 5),
        end: new Date(2025, 4, 5)
    },
    { 
        title: "March Break 🌱🌷",
        allDay: false, 
        description: "March Break!",
        start: new Date(2025, 2, 10),
        end: new Date(2025, 2, 15)
    },
    { 
        title: "Rhyme Without a Reason 🎵",
        allDay: true, 
        description: "Find a buddy and dress up in anything that rhymes!",
        start: new Date(2025, 2, 31),
        end: new Date(2025, 2, 31)
    },
    { 
        title: "Dress as an Egg Day 🥚🪺",
        allDay: true, 
        description: "Dress like an egg!",
        start: new Date(2025, 3, 1),
        end: new Date(2025, 3, 1)
    },
    { 
        title: "Wicked Wednesday 🧚 🧹",
        allDay: true, 
        description: "Pull up to school in green or pink!",
        start: new Date(2025, 3, 2),
        end: new Date(2025, 3, 2)
    },
    { 
        title: "Anything But a Packack Day 🎒",
        allDay: true, 
        description: "Carry your books, pens, and snacks in anything but a backpack!",
        start: new Date(2025, 3, 3),
        end: new Date(2025, 3, 3)
    },
    { 
        title: "Pep Rally",
        allDay: true, 
        description: "Get pumped up and show your school spirit! ",
        start: new Date(2025, 3, 4),
        end: new Date(2025, 3, 4)
    },
    { 
        title: "Coffee House",
        allDay: true, 
        description: "Autism Awareness Week",
        start: new Date(2025, 3, 14),
        end: new Date(2025, 3, 14)
    },
    { 
        title: "Instagram Post Day",
        allDay: true, 
        description: "Autism Awareness Week",
        start: new Date(2025, 3, 15),
        end: new Date(2025, 3, 15)
    },
    { 
        title: "Trivia",
        allDay: true, 
        description: "Autism Awareness Week",
        start: new Date(2025, 3, 16),
        end: new Date(2025, 3, 16)
    },
    { 
        title: "ASL Workshop + Movie Night",
        allDay: true, 
        description: "Autism Awareness Week",
        start: new Date(2025, 3, 17),
        end: new Date(2025, 3, 17)
    },
    { 
        title: "Grade 9 Day 📚",
        allDay: true, 
        description: "Welcome to MMHS!",
        start: new Date(2025, 8, 2),
        end: new Date(2025, 8, 2)
    },
    { 
        title: "First Day of Classes 📝",
        allDay: false, 
        description: "",
        start: new Date(2025, 8, 3, 8, 50),
        end: new Date(2025, 8, 3, 15, 30)
    },
    { 
        title: "Gr9 Rep Campaign Week 📢",
        allDay: false, 
        description: "See millikensac.com/election for campaign rules!",
        start: new Date(2025, 8, 8, 0, 0),
        end: new Date(2025, 8, 12, 23, 59)
    },
    { 
        title: "Gr9 Rep Speeches 🔈🗣️",
        allDay: false, 
        description: "",
        start: new Date(2025, 8, 15, 8, 50),
        end: new Date(2025, 8, 15, 10, 10)
    },
    { 
        title: "Fall Fest 🍂🍁",
        allDay: true, 
        description: "",
        start: new Date(2025, 9, 9),
        end: new Date(2025, 9, 9)
    },
    { 
        title: "Spirit Week 🎃",
        allDay: false, 
        description: "",
        start: new Date(2025, 9, 27, 8, 50),
        end: new Date(2025, 9, 31, 15, 30)
    },
    { 
        title: "Milliken HOSA x Equity Club Food Drive",
        allDay: false, 
        description: "",
        start: new Date(2025, 8, 29),
        end: new Date(2025, 9, 10)
    },
    { 
        title: "Terry Fox Run",
        allDay: false, 
        description: "",
        start: new Date(2025, 8, 30, 10, 10),
        end: new Date(2025, 8, 30, 11, 30)
    },
    { 
        title: "YOSA Somosa Sale",
        allDay: false, 
        description: "😋",
        start: new Date(2025, 10, 20, 15, 30),
        end: new Date(2025, 10, 20, 15, 30)
    },
    { 
        title: "Geography Awareness Week 🌍",
        allDay: false, 
        description: "Geography Awareness Week 🌍",
        start: new Date(2025, 10, 17, 8, 50),
        end: new Date(2025, 10, 20, 15, 30)
    },
    { 
        title: "Eco Thrift🧣🧦 - Best Buddies & Geography Club",
        allDay: false, 
        description: "Eco Thrift🧣🧦",
        start: new Date(2025, 10, 18, 10, 10),
        end: new Date(2025, 10, 18, 14, 10)
    },
    { 
        title: "The First Sip of Winter🧋(Bubble Tea Sale)",
        allDay: false, 
        description: "🧋⛄",
        start: new Date(2025, 11, 1, 15, 30),
        end: new Date(2025, 11, 1, 16, 30)
    },
    { 
        title: "Movie Night 🍿 - Fashion Club",
        allDay: false, 
        description: "🎥 👒",
        start: new Date(2025, 11, 11, 16),
        end: new Date(2025, 11, 11, 19)
    },
    { 
        title: "Winter Market ❄️ 🛍️",
        allDay: true, 
        description: "Stop by during P5 to explore the goodies sold by Milliken's clubs. Don't miss out on the holiday fun!",
        start: new Date(2025, 11, 18),
        end: new Date(2025, 11, 18)
    },
    { 
        title: "Talent Show 🌟🎤",
        allDay: true, 
        description: "Come watch and support amazing talent from our school in this exciting showcase of creativity and skills!🌟🎤",
        start: new Date(2025, 11, 19),
        end: new Date(2025, 11, 19)
    },
    
    
];

export default events;
