import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import sacbg from '../assets/home/sacbg.webp'; 
import SAC2025 from '../assets/home/SAC-All.webp';
import saclogo from '../assets/logo.webp';
import MAC from '../assets/home/MAC.webp'
import roboticsCandid from '../assets/home/RoboticsCandid.webp'
import logogif from '../assets/home/saclogosite.gif'
import { FaInstagram } from 'react-icons/fa';
import calendarData from '../data/CalendarData'

const today = new Date();

const upcomingEvents = calendarData
  .filter((event) => 
    event.isTBD || (event.start && new Date(event.start) > today) // Include TBD or future events
  )
  .sort((a, b) => {
    if (a.isTBD) return 1; // Place TBD events after dated ones
    if (b.isTBD) return -1;
    return new Date(a.start) - new Date(b.start); // Sort by start date
  })
  .slice(0, 4); // Get the top n events

// Format date/show TBD
const formatDate = (date, isTBD) => {
  if (isTBD) return "TBD";
  const options = { month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

function Home() {
  return (
    <>
    <Helmet>
        <title>Milliken SAC</title>
        <meta name="description" content="The official website for Milliken SAC, providing info about student activities, events, and clubs at MMHS!" />
        <meta property="og:title" content="Milliken SAC" />
        <meta property="og:description" content="The official website for Milliken SAC, providing info about student activities, events, and clubs at MMHS!" />
        <meta property="og:image" content="https://www.millikensac.com/static/media/logo.d3847a72bdbc78d4577d.webp" />
        <meta property="og:url" content="https://www.millikensac.com/" />
      </Helmet>

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
          <img
          src={logogif} 
          class="w-auto h-56 pb-10 mt-20"
          />

          <div class="z-20 w-4/6 md:flex pb-10 hidden text-neutral-800 justify-center text-center text-xs md:text-sm lg:text-lg xl:text-xl font-['Inter']">Welcome to Milliken’s Student Activity Council! We are a team dedicated to representing the student body at Milliken Mills High School.</div>
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
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] border-indigo-900 border"></div>
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
                        <p className="text-sm font-semibold text-gray-600">
                          {formatDate(event.start, event.isTBD)}{" "}
                          {event.end && `- ${formatDate(event.end)}`}
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
                    onClick={() => window.scrollTo(0,0)}
                    className="text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200"
                >
                    View Full Calendar
                </Link>
            </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

          
          <div className="relative max-h-[400px] max-lg:row-start-1 transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out z-20 ">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] border-indigo-900 border">
              <div className="relative min-h-[380px] sm:min-h-[350px] flex-1">
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
            <div className="absolute inset-px rounded-lg bg-white border-indigo-900 border"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">Your Questions Answered</p>
                <p className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3">
                Got questions? We've got answers
                </p>
              </div>
              
                <div className="flex py-2 justify-center">
                  <ul className="space-y-4 px-6 pt-4 w-[290px]">
                    <li
                      className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
                    >
                      <p className="text-md font-medium text-gray-800 text-center">How do I start a club?</p>
                    </li>
                    <li
                      className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
                    >
                      <p className="text-md font-medium text-gray-800 text-center">How can I get involved?</p>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center py-5">
                <Link 
                    to="/FAQ" 
                    onClick={() => window.scrollTo(0,0)}
                    className="text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200"
                >
                    View Full FAQ
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>


          <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] border-indigo-900 border"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="relative min-h-[300px] sm:min-h-[300px] flex-1">
              <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center text-center pt-10">
                CLUBS
              </p>

              <p className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3">
              Explore the clubs at MMHS!
              </p>

              <div className="overflow-hidden m-8 mb-4 rounded-2xl">
                <img src={MAC} alt="Robotics Logo" className="w-full h-auto" />
              </div>

              <div className="overflow-hidden m-8 my-2 rounded-2xl">
                <img src={roboticsCandid} alt="Robotics Logo" className="w-full h-auto" />
              </div>

              <div className="tracking-tight text-gray-600 max-lg:text-center text-center pt-3 mb-10">
              <div className="flex justify-center pt-1">
                <Link 
                    to="/Clubs" 
                    onClick={() => window.scrollTo(0,0)}
                    className="text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200"
                >
                    View Full Club List
                </Link>
              </div>
              <div className="flex justify-center pt-3">
                <Link 
                    to="/Clubs#club-resources" 
                    className="text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200"
                >
                    View Club Resources
                </Link>
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
  )
}

export default Home