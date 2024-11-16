import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import sacbg from '../assets/sacbg.png'; 
import SAC2025 from '../assets/SAC-All.JPG';
import saclogo from '../assets/logo.png';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import roboticsCandid from '../assets/RoboticsCandid.JPG'
import roboticsCandid2 from '../assets/RoboticsCandid2.JPG'

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
              <div className="relative min-h-[15rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              {/**<img src="" alt="Robotics Logo" /> */}
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
                Want to start your own club? <br />
                Fill out the club proposal form <br />
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
    <footer className="bg-gray-50 text-black py-6 mt-auto">
  <div className="container mx-auto px-44 flex flex-col md:flex-row items-center md:space-x-2 gap-2 md:gap-4">
    
    {/* Logo section (centered) */}
    <div className="flex-shrink-0 mb-4 md:mb-0 order-1 md:order-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
      <img
        src={saclogo}
        alt="School Logo"
        className="h-16 w-auto mx-auto"
      />
    </div>

    {/* School info */}
    <div className="md:flex-grow md:mr-2 text-center md:text-left text-sm leading-6 order-2 md:order-1 w-full md:w-auto">
      <p className="font-bold">School Info</p> {/* Bold title */}
      <p className="font-normal">Milliken Mills High School</p>
      <p className="font-normal">7522 Kennedy Rd</p>
      <p className="font-normal">Markham ON L3R 9S5</p>
      <p className="font-normal">(123) 456-7890</p>
    </div>

    {/* Social icons */}
    <div className="flex space-x-4 justify-center md:justify-end md:flex-grow order-3">
      {/* Instagram */}
      <a
        onClick={() => window.open("https://www.instagram.com/milliken_sac/", '_blank')}
        className="group relative block"
      >
        <div className="relative">
          {/* hover scaling */}
          <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
            <FaInstagram
              className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
              size={32} // Increased icon size
            />
          </div>
        </div>
      </a>

      {/* Github */}
      <a
        onClick={() => window.open("https://github.com/MillikenSAC", '_blank')}
        className="group relative block"
      >
        <div className="relative">
          {/* hover scaling */}
          <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ease-in-out">
            <FaGithub
              className="text-indigo-900 group-hover:text-indigo-600 duration-200 ease-in-out"
              size={32} 
            />
          </div>
        </div>
      </a>
    </div>

  </div>
</footer>






    
    </div>
  )
}

export default Home