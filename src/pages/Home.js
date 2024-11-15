import React from 'react';
import '../styles/Home.css';
import sacbg from '../assets/sacbg.png'; 
import saclogo from '../assets/logo.png';

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
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Tomorrow Today</h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          HOME OF THE KNIGHTS 
        </p>
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2 z-20">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center text-center">
                UPCOMING EVENTS
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center text-center">
                there will a list of upcoming big school events and stuff 
              </p>
              </div>
              <div className="relative min-h-[15rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              {/**<img src="" alt="Robotics Logo" /> */}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          
          <div className="relative max-lg:row-start-1 transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out z-20">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  MEET SAC
                </p>
                <p className="mt-2 mb- max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  maybe some cool graphic of sac 
                </p>
              </div>
              {/* Explicit min-height to ensure image visibility */}
              <div className="relative min-h-[200px] sm:min-h-[300px] flex-1">
                <img
                  src={saclogo}
                  alt="sacpeople"
                  className="absolute inset-0 w-full h-full object-cover"
                /> 
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>




          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Your Questions Answered</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
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
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center text-center">
                CLUBS
              </p>
              <p className="relative min-h-[15rem]mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center text-center">
                there will be stuff inside here 
              </p>

              </div>
              {/**<img src="" alt="Robotics Logo" /> */}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>

    {/* third slide of home page */}
        <div class="w-screen h-screen flex max-w-full justify-center items-center">
            <div class="w-10/12 h-5/6 place-self-center grid grid-cols-2 grid-rows-2 gap-x-40 gap-y-5 bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-[20px]">
                <div class="w-[20rem] h-[18rem] flex flex-col justify-self-end self-end">
                    <div class="pl-3 pt-6 text-black text-[2.1rem] italic font-semibold font-['Newsreader']">Need to fix this part</div>
                    <div class="px-3 mt-5 text-black text-[0.69rem] font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div class="w-[20rem] h-[18rem] flex shrink justify-self-start self-end bg-white rounded-[30px] shadow-xl"></div>
                <div class="w-[20rem] h-[18rem] flex shrink justify-self-end self-start bg-white rounded-[30px] shadow-xl"></div>
                <div class="w-[20rem] h-[18rem] flex flex-col">
                    <div class="pl-3 pt-6 text-black text-[2.1rem] italic font-semibold font-['Newsreader']">Section Description</div>
                    <div class="px-3 mt-5 text-black text-[0.69rem] font-normal leading-normal" style={{fontFamily: 'Inter, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Home