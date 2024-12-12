import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import sacbg from '../assets/sacbg.webp'; 
import SAC2025 from '../assets/SAC-All.webp';
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import roboticsCandid from '../assets/RoboticsCandid.webp'
import roboticsCandid2 from '../assets/RoboticsCandid2.webp'
import calendarData from '../data/CalendarData'


const today = new Date();

const upcomingEvents = calendarData
    .filter((event) => new Date(event.start) > today) // Only include future events
    .sort((a, b) => new Date(a.start) - new Date(b.start)) // Sort events by start date
    .slice(0, 3); // Get the top 3 events

const formatDate = (date) => {
    const options = {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

function Home() {
  return (
    <div class="flex w-screen flex-col max-w-full overflow-hidden relative">
     <img className="bg-gray-50 w-screen h-screen max-w-full z-[-1] absolute object-cover"
      src={sacbg}
      alt="Background"
      /> 
          <div className="gradient1"></div>
          <div className="gradient2"></div>
          <div className="gradient3"></div>


    {/* top slide of home page  */}
      <div class="w-screen h-screen overflow-hidden relative flex flex-col place-items-center place-content-center">
          <div class="z-20 text-indigo-900 2xl:text[14rem] xl:text-[12rem] lg:text-[10rem] md:text-[7rem] text-[3.5rem] flex font-semibold italic font-['Newsreader']">Milliken SAC</div>
          <div class="z-20  w-4/6 md:flex pb-10 hidden text-neutral-800 text-center text-xs md:text-sm lg:text-lg xl:text-xl font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl et ultrices accumsan. Vivamus tincidunt eleifend sodales. Donec at libero quis nunc luctus porttitor vel quis dolor.</div>
      </div>

        {/* second slide of home page  */}

        <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-xl font-semibold text-indigo-600">Tomorrow Today</h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          HOME OF THE KNIGHTS 
        </p>
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Upcoming Events */}
            <div className="relative lg:row-span-2 z-20">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center text-center">
                    UPCOMING EVENTS
                  </p>
                  <p className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3">
                    Stay updated with our big events!
                  </p>
                </div>
                <div className="relative w-full max-lg:mx-auto">
                  <ul className="space-y-4 px-6 pt-4">
                  {upcomingEvents.map((event, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-sm text-gray-600">
                        {formatDate(event.start)} - {formatDate(event.end)}
                      </p>
                      {event.description && (
                        <p className="text-sm text-gray-600">{event.description}</p>
                      )}
                    </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center py-10">
                <Link 
                    to="/Event" 
                    className="text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200"
                >
                    See Full Calendar
                </Link>
            </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

          
          <div className="relative max-h-[350px] max-lg:row-start-1 transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out z-20">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="relative min-h-[350px] sm:min-h-[350px] flex-1">
                <Link to="/SAC" className="block w-full h-full">
                  <img
                    src={SAC2025}
                    alt="sacpeople"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>



          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Your Questions Answered</p>
                <p className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3">
                Got questions? We've got answers
                </p>
              </div>
              <div className="relative min-h-[15rem] flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
              {/**<img src="" alt="Robotics Logo" /> */}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>


          <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="relative min-h-[300px] sm:min-h-[300px] flex-1">
              <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center text-center pt-10">
                CLUBS
              </p>

              <p className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3">
              Explore the clubs at Milliken!
              </p>

              <div className="overflow-hidden m-8 mb-4 rounded-2xl">
                <img src={roboticsCandid} alt="Robotics Logo" className="w-full h-auto" />
              </div>

              <div className="overflow-hidden m-8 my-2 rounded-2xl">
                <img src={roboticsCandid2} alt="Robotics Logo" className="w-full h-auto" />
              </div>

              <div className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3 mb-5">
                Want to start your own club or host a club event?<br />
                Fill out the club/event proposal form <br />
                <div className="flex justify-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdo76EgGc9E7Arg5z0gYkzdFLK1aXciCqdpLBJz8d2Rez-eWw/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  >
                    HERE
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
        </div>
      </div>
    </div>

    

    {/* Footer */}
    <footer className="bg-gray-50 text-black py-6 mt-auto px-6">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
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
            <a
              onClick={() => window.open("https://github.com/MillikenSAC", '_blank')}
              className="group relative block"
            >
              <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
                <FaGithub
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
  )
}

export default Home