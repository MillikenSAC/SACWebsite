import React from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';

import clubData from '../components/ClubData.js';


function Clubs() {
  // Sort clubData alphabetically by club name
  const sortedClubs = clubData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div className="flex w-fit h-fit place-self-center mt-20 text-center text-sky-950 text-[10rem] font-thin font-['Prata']">
        clubs
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
