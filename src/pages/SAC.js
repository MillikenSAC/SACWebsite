import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import '../styles/SAC.css';
import SACCard from '../components/SACCard';
import TabSpecificCard from '../components/SACCardCaptions';
import { councilYears, councilYearOrder, councilRoleOrder } from '../data/MeetSACData';
import { motion } from 'framer-motion';
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SAC() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const yearOrder = (councilYearOrder && councilYearOrder.length > 0)
    ? councilYearOrder
    : Object.keys(councilYears);
  const councilYearList = yearOrder.map((yearKey) => ({
    year: yearKey,
    data: councilYears[yearKey],
  })).filter(({ data }) => !!data);

  const [selectedYearIndex, setSelectedYearIndex] = useState(() =>
    Math.max(councilYearList.length - 1, 0)
  );
  const safeYearIndex = Math.min(
    Math.max(selectedYearIndex, 0),
    Math.max(councilYearList.length - 1, 0)
  );
  const selectedYearEntry = councilYearList[safeYearIndex] || councilYearList[0] || { year: yearOrder[0], data: {} };
  const selectedYear = selectedYearEntry?.year || yearOrder[0];

  const emptyYearTemplate = councilRoleOrder.reduce((acc, role) => {
    acc[role] = [];
    return acc;
  }, {});

  const yearData = selectedYearEntry?.data || emptyYearTemplate;
  const getMembers = (group) => yearData[group] || [];
  const [selectedTab, setSelectedTab] = useState('All');

  const tabConfig = [
    { key: 'All', label: 'All' },
    ...councilRoleOrder.map((role) => ({
      key: role,
      label:
        role === 'SocialAffairs'
          ? 'Social Affairs'
          : role === 'TeacherAdvisors'
          ? 'Teacher Advisors'
          : role,
    })),
  ];

  const tabMapping = {
    All: councilRoleOrder.flatMap((role) => getMembers(role)),
    ...councilRoleOrder.reduce((acc, role) => {
      acc[role] = getMembers(role);
      return acc;
    }, {}),
  };

  const currentData = tabMapping[selectedTab] || [];
  const [selectedMember, setSelectedMember] = useState(null);
  const selectedTabLabel =
    tabConfig.find((tab) => tab.key === selectedTab)?.label || selectedTab;

  const isPresidentOrVP = (title = '') => {
    const normalized = title.toLowerCase();
    return normalized === 'president' || normalized === 'vice-president' || normalized === 'vice president';
  };

  const filteredPresidents = currentData.filter((member) => isPresidentOrVP(member.title));

  const filteredOtherMembers = currentData.filter(
    (member) => member.title !== 'President' && member.title !== 'Vice-President' && member.title !=='Teacher Advisor'
  );

  const filteredTeacherAdvisors = currentData.filter(
    (member) => member.title === 'Teacher Advisor' || member.title === 'Teacher Advisor'
  );

  useEffect(() => {
    // Default to the most recent year whenever the list of years changes.
    setSelectedYearIndex(Math.max(councilYearList.length - 1, 0));
  }, [councilYearList.length]);

  const handleYearChange = (direction) => {
    setSelectedTab('All');
    setSelectedMember(null);
    setSelectedYearIndex((prev) => {
      if (direction === 'next') {
        return Math.min(prev + 1, councilYearList.length - 1);
      }
      return Math.max(prev - 1, 0);
    });
  };

  const handleCardClick = (member) => {
    if (selectedTab !== 'All') {
      setSelectedMember(member);
    } else{ 
      window.scrollTo(0,0)
    }

    const memberToTabMapping = councilRoleOrder.reduce((acc, role) => {
      acc[role] = getMembers(role);
      return acc;
    }, {});

    const foundTab = Object.keys(memberToTabMapping).find((tabKey) =>
      memberToTabMapping[tabKey].includes(member)
    );

    if (foundTab) {
      setSelectedTab(foundTab);
    }
  };

  useEffect(() => {
    setSelectedTab('All');
    setSelectedMember(null);
  }, [selectedYear]);

  const noMembersInTab = currentData.length === 0;

  return (
    <>
      <Helmet>
        <title>Council | Milliken SAC</title>
        <meta name="description" content="Get to know the passionate students leading Milliken SAC. Meet the council members and learn about their roles and contributions to the school." />
        <meta property="og:title" content="Council | Milliken SAC" />
        <meta property="og:description" content="Get to know the passionate students leading Milliken SAC. Meet the council members and learn about their roles and contributions to the school." />
        <meta property="og:image" content="https://www.millikensac.com/static/media/logo.d3847a72bdbc78d4577d.webp" />
        <meta property="og:url" content="https://www.millikensac.com/SAC" />
      </Helmet>
    <div className="flex w-screen flex-col max-w-full overflow-x-hidden overflow-y-hidden relative min-h-screen px-5">
      <div className="bggradientfull z-30"></div>

      {/* Font Links */}
      <link
        href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Lobster&family=Prata&family=Sumana&family=Syne&display=swap"
        rel="stylesheet"
      />

      
      {/* Title */}
      <div className="w-full mt-28 text-center">
        <div className="text-sky-950 text-[3rem] md:text-[4rem] lg:text-[5rem] font-thin font-['Prata']">
          <span className="font-normal">Meet the Council</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 text-indigo-900">
        <button
          onClick={() => handleYearChange('prev')}
          disabled={selectedYearIndex === 0}
          className={`z-10 p-2 px-3 rounded-lg font-semibold transition duration-200 border border-indigo-900 ${
            selectedYearIndex === 0
              ? 'text-indigo-200 border-indigo-200 cursor-not-allowed'
              : 'hover:bg-indigo-900 hover:text-blue-100'
          }`}
        >
          Previous
        </button>
        <div className="text-lg font-semibold">{selectedYear}</div>
        <button
          onClick={() => handleYearChange('next')}
          disabled={selectedYearIndex === councilYearList.length - 1}
          className={`z-10 p-2 px-3 rounded-lg font-semibold transition duration-200 border border-indigo-900 ${
            selectedYearIndex === councilYearList.length - 1
              ? 'text-indigo-200 border-indigo-200 cursor-not-allowed'
              : 'hover:bg-indigo-900 hover:text-blue-100'
          }`}
        >
          Next
        </button>
      </div>


      <div className='flex justify-center z-30'>
        <Link 
            onClick={() => window.open('/SACConstitution2025.pdf', '_blank')}
            className="text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200"
        >
            Our Constitution
          </Link>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-6 z-10">
      {tabConfig.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setSelectedTab(key)}
          className={`p-2 px-4 rounded-lg font-semibold transition duration-200 ${
            selectedTab === key
              ? 'bg-indigo-900 text-blue-100'
              : 'text-indigo-900 hover:text-blue-100 hover:bg-indigo-900'
          }`}
        >
          {label}
        </button>
      ))}
    </div>

      {/* Animated Content */}
      <motion.div
        key={`${selectedYear}-${selectedTab}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >

      {noMembersInTab && (
        <div className="text-center text-indigo-900 mt-8">
          No members listed for {selectedYear} in the {selectedTabLabel === 'All' ? 'council yet.' : `${selectedTabLabel} tab yet.`}
        </div>
      )}

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

export default SAC;
