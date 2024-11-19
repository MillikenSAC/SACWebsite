import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SAC.css';
import SACCard from '../components/SACCard';
import TabSpecificCard from '../components/SACCardCaptions';
import { Executives, Secretary, SocialAffairs, Treasurers, Publicity, Reps, Tech, TeacherAdvisors} from '../data/MeetSACData';
import { motion } from 'framer-motion';

function SAC() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [selectedTab, setSelectedTab] = useState('All');

  const tabMapping = {
    All: [...Executives, ...Secretary, ...SocialAffairs, ...Treasurers, ...Publicity, ...Reps, ...Tech, ...TeacherAdvisors],
    Executives: Executives,
    Secretary: Secretary,
    'Social Affairs': SocialAffairs,
    Treasurers: Treasurers,
    Publicity: Publicity,
    Tech: Tech,
    Reps: Reps,
    'Teacher Advisors': TeacherAdvisors
  };

  const currentData = tabMapping[selectedTab] || [];
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredPresidents = currentData.filter(
    (member) => member.title === 'President' || member.title === 'Vice-President'
  );

  const filteredOtherMembers = currentData.filter(
    (member) => member.title !== 'President' && member.title !== 'Vice-President' && member.title !=='Teacher Advisor'
  );

  const filteredTeacherAdvisors = currentData.filter(
    (member) => member.title === 'Teacher Advisor' || member.title === 'Teacher Advisor'
  );

  const handleCardClick = (member) => {
    if (selectedTab !== 'All') {
      setSelectedMember(member);
    } else{ 
      window.scrollTo(0,0)
    }

    const memberToTabMapping = {
      Executives: Executives,
      Secretary: Secretary,
      'Social Affairs': SocialAffairs,
      Treasurers: Treasurers,
      Publicity: Publicity,
      Tech: Tech,
      Reps: Reps,
      'Teacher Advisors': TeacherAdvisors
    };

    const foundTab = Object.keys(memberToTabMapping).find((tab) =>
      memberToTabMapping[tab].includes(member)
    );

    if (foundTab) {
      setSelectedTab(foundTab);
    }
  };

  return (
    <div className="flex w-screen flex-col max-w-full overflow-x-hidden overflow-y-hidden relative min-h-screen px-5">
      <div className="bggradientfull"></div>

      {/* Font Links */}
      <link
        href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Lobster&family=Prata&family=Sumana&family=Syne&display=swap"
        rel="stylesheet"
      />

      
      {/* Title */}
      <div className="w-full mt-20 text-center">
        <div className="text-sky-950 text-[3rem] md:text-[4rem] lg:text-[5rem] font-thin font-['Prata']">
          <span className="font-normal">Meet the </span>
          <span className="font-bold">Council</span>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-6 z-10">
        {Object.keys(tabMapping).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`py-2 px-4 rounded-md font-semibold shadow-md transition-all duration-300 ${
              selectedTab === tab
                ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

       {/* Year Selector */}
       <div className="flex w-full justify-center my-6">
        <button type="button" className="items-center pr-5 opacity-50">
          {/* Left Arrow */}
          <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.25 25L20.8333 10.4167V18.75H42.0833C42.6667 18.75 42.9584 18.75 43.1812 18.8636C43.3772 18.9634 43.5366 19.1228 43.6365 19.3188C43.75 19.5416 43.75 19.8333 43.75 20.4167V29.5834C43.75 30.1667 43.75 30.4584 43.6365 30.6813C43.5366 30.8773 43.3772 31.0366 43.1812 31.1365C42.9584 31.25 42.6667 31.25 42.0833 31.25H20.8333V39.5834L6.25 25Z"
              stroke="#051747"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="w-[20rem] h-[4rem] bg-stone-50 rounded-[40px] shadow-inner border border-slate-500 flex justify-center">
          <div className="text-center self-center text-sky-950 text-opacity-50 text-4xl font-semibold font-['Coolvetica'] tracking-[2px]">
            2024-2025
          </div>
        </div>

        <button type="button" className="items-center pl-5 opacity-50">
          {/* Right Arrow */}
          <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M43.75 25L29.1667 10.4167V18.75H7.91667C7.33328 18.75 7.04158 18.75 6.81876 18.8636C6.62276 18.9634 6.4634 19.1228 6.36353 19.3188C6.25 19.5416 6.25 19.8333 6.25 20.4167V29.5834C6.25 30.1667 6.25 30.4584 6.36353 30.6813C6.4634 30.8773 6.62276 31.0366 6.81876 31.1365C7.04158 31.25 7.33328 31.25 7.91667 31.25H29.1667V39.5834L43.75 25Z"
              stroke="#051747"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      {/* Animated Content */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >

      {/* SAC Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-8 mt-7">
        {filteredPresidents.map((president) =>
          selectedTab === 'All' ? (
            <SACCard
              key={president.id}
              imgSrc={president.img}
              name={president.name}
              position={president.title}
              onClick={() => handleCardClick(president)}
            />
          ) : (
            <TabSpecificCard
              key={president.id}
              imgSrc={president.img}
              name={president.name}
              position={president.title}
              caption={president.caption}
              instagram={president.instagram}
              email={president.email}
              onClick={() => handleCardClick(president)}
            />
          )
        )}
      </div>

      <div className="flex flex-wrap justify-center max-w-full gap-y-6 gap-x-6 mb-10 mt-5">
        {filteredOtherMembers.map((member) =>
          selectedTab === 'All' ? (
            <SACCard
              key={member.id}
              imgSrc={member.img}
              name={member.name}
              position={member.title}
              onClick={() => handleCardClick(member)}
            />
          ) : (
            <TabSpecificCard
              key={member.id}
              imgSrc={member.img}
              name={member.name}
              position={member.title}
              caption={member.caption}
              instagram={member.instagram}
              email={member.email}
              onClick={() => handleCardClick(member)}
            />
          )
        )}
      </div>

      

      <div className="flex flex-wrap justify-center max-w-full gap-y-6 gap-x-6 mb-10 mt-5">
        {filteredTeacherAdvisors.map((member) =>
          selectedTab === 'All' ? (
            <SACCard
              key={member.id}
              imgSrc={member.img}
              name={member.name}
              position={member.title}
              onClick={() => handleCardClick(member)}
            />
          ) : (
            <TabSpecificCard
              key={member.id}
              imgSrc={member.img}
              name={member.name}
              position={member.title}
              caption={member.caption}
              instagram={member.instagram}
              email={member.email}
              onClick={() => handleCardClick(member)}
            />
          )
        )}
      </div>

      </motion.div>
    </div>
  );
}

export default SAC;
