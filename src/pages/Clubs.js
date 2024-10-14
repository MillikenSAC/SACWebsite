import React from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import logo from '../assets/logo.png';
import robotics from '../assets/robotics.png';

const clubData = [
  { name: "Milliken Robotics", desc: "The best club at Milliken", imgSrc: robotics, link: "https://www.instagram.com/mmhs.robotics/" },
  { name: "Milliken SAC", desc: "The Milliken Mills High School Student Activity Council", imgSrc: logo, link: "https://www.instagram.com/milliken_sac/" },
  { name: "Club 3", desc: "Description for Club 3", imgSrc: logo, link: "https://www.instagram.com/milliken_sac/" },
  { name: "Club 4", desc: "Description for Club 4", imgSrc: logo, link: "https://www.instagram.com/milliken_sac/" },
  { name: "Club 5", desc: "Description for Club 5", imgSrc: logo, link: "https://www.instagram.com/milliken_sac/" },
  { name: "Club 6", desc: "Description for Club 6", imgSrc: logo, link: "https://www.instagram.com/milliken_sac/" }
];

function Clubs() {
  // Sort clubData alphabetically by club name
  const sortedClubs = clubData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div className="flex w-fit h-fit place-self-center mt-20 text-center text-sky-950 text-[10rem] font-thin font-['Prata']">
        clubs
      </div>

      <div className="grid w-5/6 max-w-full grid-cols-1 clubCardSmall clubCardLarge gap-y-6 place-items-center place-self-center mb-10 mt-5">
        {sortedClubs.map((club, index) => (
          <ClubCard key={index} name={club.name} desc={club.desc} imgSrc={club.imgSrc} link={club.link} />
        ))}
      </div>
    </div>
  );
}

export default Clubs;
