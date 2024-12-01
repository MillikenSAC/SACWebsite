import React from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import clubData from '../data/ClubData.js';


function Clubs() {
  // Sort clubData alphabetically by club name
  const sortedClubs = clubData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
      <div className="bggradientfull"></div>

      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div class="flex w-fit h-fit place-self-center mt-28 text-center text-sky-950 lg:text-[5rem]  text-[3rem] font-thin font-['Prata']">
          Clubs
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-5 mt-10 mb-20">

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
