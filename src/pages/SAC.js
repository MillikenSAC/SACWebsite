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
    Reps: Reps,
    Tech: Tech,
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
          <span className="font-normal">Meet the Council</span>
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
                : 'bg-white text-gray-800 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
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
