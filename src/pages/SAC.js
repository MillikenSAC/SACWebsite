import React, { useEffect } from 'react';
import '../styles/SAC.css';
import SACCard from '../components/MeetSAC.js';
import {data1, data2, data3, data4, data5} from '../components/MeetSACData.js'

function SAC() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    const sacDataGroups = [data1, data2, data3, data4];
  
    return (
      <div className="flex w-screen flex-col max-w-full overflow-x-hidden relative bg-blue-100 min-h-screen">
        {/* Font Links */}
        <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Lobster&family=Prata&family=Sumana&family=Syne&display=swap" rel="stylesheet" />
        
        {/* Title */}
        <div className="w-screen mt-20 text-center text-sky-950 text-[10rem] font-thin font-['Prata']">council</div>
  
        {/* Year Selector Buttons */}
        <div className="flex w-screen place-content-center my-6">
          <button type="button" className="items-center pr-5 opacity-50">
            {/* Left Arrow */}
            <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 25L20.8333 10.4167V18.75H42.0833C42.6667 18.75 42.9584 18.75 43.1812 18.8636C43.3772 18.9634 43.5366 19.1228 43.6365 19.3188C43.75 19.5416 43.75 19.8333 43.75 20.4167V29.5834C43.75 30.1667 43.75 30.4584 43.6365 30.6813C43.5366 30.8773 43.3772 31.0366 43.1812 31.1365C42.9584 31.25 42.6667 31.25 42.0833 31.25H20.8333V39.5834L6.25 25Z" stroke="#051747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
  
          <div className="w-[20rem] h-[4rem] bg-stone-50 rounded-[40px] shadow-inner border border-slate-500 flex place-content-center">
            <div className="text-center place-self-center text-sky-950 text-opacity-50 text-4xl font-semibold font-['Coolvetica'] tracking-[2px]">2023 - 2024</div>
          </div>
  
          <button type="button" className="items-center pl-5 opacity-50">
            {/* Right Arrow */}
            <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.75 25L29.1667 10.4167V18.75H7.91667C7.33328 18.75 7.04158 18.75 6.81876 18.8636C6.62276 18.9634 6.4634 19.1228 6.36353 19.3188C6.25 19.5416 6.25 19.8333 6.25 20.4167V29.5834C6.25 30.1667 6.25 30.4584 6.36353 30.6813C6.4634 30.8773 6.62276 31.0366 6.81876 31.1365C7.04158 31.25 7.33328 31.25 7.91667 31.25H29.1667V39.5834L43.75 25Z" stroke="#051747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
  
        {/* SAC Cards */}
        <div className="grid w-6/7 max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 place-items-center mb-10 mt-5">
          {sacDataGroups.map((group, groupIndex) => 
            group.map((member) => (
              <SACCard 
                key={`${groupIndex}-${member.id}`} 
                name={member.name} 
                title={member.title} 
                imgSrc={member.img} 
              />
            ))
          )}
        </div>
      </div>
    );
  }
  

export default SAC;
