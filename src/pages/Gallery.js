import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import photo1 from '../assets/gallery/semi1.webp'
import photo2 from '../assets/gallery/semi2.webp'
import photo3 from '../assets/gallery/semi3.webp'
import photo4 from '../assets/gallery/semi4.webp'
import photo5 from '../assets/gallery/semi5.webp'
import photo6 from '../assets/gallery/semi6.webp'
import photo7 from '../assets/gallery/spc1.webp'
import photo8 from '../assets/gallery/spc2.webp'
import photo9 from '../assets/gallery/spc3.webp'
import photo10 from '../assets/gallery/spiritweek.webp'
import photo11 from '../assets/gallery/steven.webp'

const imageSources = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo6,  
  photo5, 
  photo7, 
  photo8, 
  photo9, 
  photo10, 
  photo11 
];


function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadImageDimensions = async () => {
      const loadedPhotos = await Promise.all(
        imageSources.map((src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () =>
              resolve({
                src,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
          })
        )
      );
      setPhotos(loadedPhotos);
    };
  
    loadImageDimensions();
  }, []);
  

  return (
    <div className="flex w-screen h-fit min-h-screen flex-col max-w-full overflow-x-hidden relative bg-gray-50">
      <div className="bggradientfull"></div>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
        rel="stylesheet"
      ></link>

      {/* Page Title */}
      <div className="flex w-fit h-fit place-self-center mt-28 text-center text-sky-950 lg:text-[5rem] text-[3rem] font-thin font-['Prata']">
        Gallery
      </div>

      {/* Photo Gallery */}
      <div className="photo-grid mt-8">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="photo-item"
          style={{
            gridRowEnd: `span ${Math.ceil(
              (photo.height / photo.width) * 10
            )}`, // calculate height
          }}
        >
          <img
            src={photo.src}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px", 
            }}
          />
        </div>
      ))}
    </div>
    {/* Footer */}
    <footer className="text-black py-6 mt-auto px-6">
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
  );
}

export default Gallery;
