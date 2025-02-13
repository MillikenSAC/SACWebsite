import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';

function Sacentines() {
  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-white">
      <div className="bggradientfull"></div>
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div className="flex w-fit h-fit place-self-center mt-28 text-center text-sky-950 lg:text-[5rem]  text-[3rem] font-thin font-['Prata']">
          SACENTINES
      </div>
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center mt-24">
        <div className="flex items-center justify-center space-x-6">
          <img src={logo} alt="Milliken SAC Logo" className="w-36 h-auto" />

          {/* Center Box */}
          <div className="bg-pink-300 p-8 rounded-2xl shadow-lg text-center w-[600px] min-w-[400px] max-w-2xl z-20">
            <h1 className="text-4xl text-white font-bold mb-2">Milliken SAC</h1>
            <p className="text-white mb-4">Welcome! Choose an option below:</p>
            <Link to="friendship">
              <button className="w-full py-3 mb-2 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-500 transition">
                Friendship Test
              </button>
            </Link>
            <Link to="compatibility">
              <button className="w-full py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 transition">
                Compatibility Test
              </button>
            </Link>
          </div>

          <img src={logo} alt="Milliken SAC Logo" className="w-36 h-auto" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-black py-6 mt-auto px-6">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            
            {/* Logo section - centering adjustment */}
            <div className="flex justify-center mb-4 sm:mb-0 sm:justify-start">
              <img
                src={logo}  // Make sure it's using the correct logo import
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
  );
}

export default Sacentines;
