import React from 'react'
import { Helmet } from 'react-helmet';
import '../styles/Event.css'
import Calendar from '../components/Calendar'
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';

function Event() {
  return (
    <>
      <Helmet>
        <title>Calendar | Milliken SAC</title>
        <meta name="description" content="Stay up to date with all the events and activities happening at Milliken SAC. Check out our calendar for important dates and events." />
        <meta property="og:title" content="Milliken SAC - Calendar" />
        <meta property="og:description" content="Stay up to date with all the events and activities happening at Milliken SAC. Check out our calendar for important dates and events." />
        <meta property="og:image" content='../assets/logo.webp' />
        <meta property="og:url" content="https://www.millikensac.com/Event" />
      </Helmet>
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
      <div className="bggradientfull"></div>
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>   
      <div class="flex w-fit h-fit place-self-center mt-28 mb-5 text-center text-sky-950 lg:text-[6rem] md:text-[4rem] text-[3rem] font-thin font-['Prata']">
      </div>

      <div class="-translate-y-[3rem] custom-calendar-container">
        <Calendar/>
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

export default Event