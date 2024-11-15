import React from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import clubData from '../Data/ClubData.js';
import "../styles/Home.css"


function Clubs() {
  // Sort clubData alphabetically by club name
  const sortedClubs = clubData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
        <div className="clubgradient1"></div>
        <div className="clubgradient2"></div>
        <div className="clubgradient3"></div>
        <div className="clubgradient4"></div>
        <div className="clubgradient5"></div>
        <div className="clubgradient6"></div>
        <div className="clubgradient7"></div>
        <div className="clubgradient8"></div>

      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div class="flex w-fit h-fit place-self-center mt-20 text-center text-sky-950 lg:text-[6rem] md:text-[4rem] text-[3rem] font-thin font-['Prata']">
          Clubs
      </div>

      <div className="grid w-6/7 max-w-full grid-cols-1 clubCardSmall clubCardLarge gap-y-6 gap-x-6 place-items-center place-self-center mb-10 mt-5">

        {sortedClubs.map((club, index) => (
          <ClubCard 
            key={index} 
            name={club.name} 
            desc={club.desc} 
            imgSrc={club.imgSrc} 
            link={club.link} 
            room={club.room} 
            meetingDay={club.meetingDay} 
            googleClassroomCode={club.googleClassroomCode} 
          />
        ))}
      </div>
    </div>
  );
}

export default Clubs;
