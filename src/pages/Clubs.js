import React, { useState } from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import ClubResourceCard from '../components/ClubResourceCard.js';
import clubData, { clubResources } from '../data/ClubData.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Clubs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to manage focus styling
  const [isFocused, setIsFocused] = useState(false);

  // Sort clubData alphabetically by club name
  const sortedClubs = clubData.sort((a, b) => a.name.localeCompare(b.name));

  // Filter clubs based on the search query
  const filteredClubs = sortedClubs.filter(club =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
      <div className="bggradientfull"></div>

      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div className="flex w-fit h-fit place-self-center mt-28 text-center text-sky-950 lg:text-[5rem]  text-[3rem] font-thin font-['Prata']">
          Clubs
      </div>

      {/* Search bar */}
      <div className="flex justify-center mt-5 mb-6 z-20">
        <input
          type="text"
          placeholder="Search for a club..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-3/4 lg:w-2/5 p-2 border rounded-lg shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 ${isFocused ? 'ring-indigo-700 border-transparent' : 'border-gray-300'}`}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-5 mt-10 mb-20">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club, index) => (
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
          ))
        ) : (
          <p className="text-gray-500">No clubs found matching your search.</p>
        )}
      </div>

      <div 
      id="club-resources"
      className="flex w-fit h-fit place-self-center mt-10 text-center text-sky-950 lg:text-[5rem]  text-[3rem] font-thin font-['Prata']">
          Club Resources
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-5 mt-10 mb-20">
        {clubResources.map((resource, index) => (
          <ClubResourceCard 
            key={index} 
            name={resource.name} 
            desc={resource.description} 
            link={resource.link} 
          />
        ))}
      </div>
    </div>
  );
}

export default Clubs;
