import React from 'react';
import '../styles/Gallery.css';
import logo from '../assets/logo.png';

function Gallery() {
  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
      <div className="bggradientfull"></div>

      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

      {/* Page Title */}
      <div className="flex w-fit h-fit place-self-center mt-20 text-center text-sky-950 lg:text-[6rem] md:text-[4rem] text-[3rem] font-thin font-['Prata']">
        Gallery
      </div>

      {/* Centered Logo and Text */}
      <div className="flex flex-col justify-center items-center pt-40">
        <img
          src={logo}
          alt="Milliken Logo"
          className="w-[15rem] h-auto cursor-pointer"
        />
        <p className="mt-4 text-center text-gray-600 text-xl font-medium font-['Prata']">
          Coming Soon...
        </p>
      </div>
    </div>
  );
}

export default Gallery;
