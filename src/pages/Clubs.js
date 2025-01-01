import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import ClubResourceCard from '../components/ClubResourceCard.js';
import clubData, { clubResources } from '../data/ClubData.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';

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
    <>
    <Helmet>
        <title>Clubs | Milliken SAC</title>
        <meta name="description" content="Explore the various clubs and student organizations at Milliken SAC. Find out about club meetings, resources, and more." />
        <meta property="og:title" content="Clubs | Milliken SAC" />
        <meta property="og:description" content="Explore the various clubs and student organizations at Milliken SAC. Find out about club meetings, resources, and more." />
        <meta property="og:image" content="https://www.millikensac.com/static/media/logo.d3847a72bdbc78d4577d.webp" />
        <meta property="og:url" content="https://www.millikensac.com/Clubs" />
      </Helmet>
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

     
      {/* Footer */}
      <footer className="text-black py-6 mt-auto px-6">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          
          {/* Logo section - centering adjustment */}
          <div className="flex justify-center mb-4 sm:mb-0 sm:justify-start">
            <img
              src={saclogo}
              alt="School Logo"
              className="h-16 w-auto mx-auto sm:mx-0"
            />
          </div>

          {/* School info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0">
            <div className="text-center sm:text-left text-sm leading-6">
              <p className="font-normal">7522 Kennedy Rd</p>
              <p className="font-normal">Markham ON L3R 9S5</p>
              <p className="font-normal">(905) 477-0072</p>
            </div>

            {/* Social icons */}
            <div className="flex space-x-4 justify-center sm:justify-end sm:flex-grow mt-4 sm:mt-0">
              <a
                onClick={() => window.open("https://www.instagram.com/milliken_sac/", '_blank')}
                className="group relative block"
              >
                <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
                  <FaInstagram
                    className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
                    size={32}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
    </div>
    </>
    
  );
}

export default Clubs;