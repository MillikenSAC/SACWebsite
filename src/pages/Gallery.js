import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../styles/Gallery.css";
import saclogo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import semi1 from '../assets/gallery/semi1.webp';
import semi2 from '../assets/gallery/semi2.webp';
import semi3 from '../assets/gallery/semi3.webp';
import semi4 from '../assets/gallery/semi4.webp';
import semi5 from '../assets/gallery/semi5.webp';
import semi6 from '../assets/gallery/semi6.webp';
import semi7 from '../assets/gallery/semi7.webp';
import semi8 from '../assets/gallery/semi8.webp';
import semi9 from '../assets/gallery/semi9.webp';
import semi10 from '../assets/gallery/semi10.webp';
import spc1 from '../assets/gallery/spc1.webp';
import spc2 from '../assets/gallery/spc2.webp';
import spc3 from '../assets/gallery/spc3.webp';
import spiritweek from '../assets/gallery/spiritweek.webp';
import steven from '../assets/gallery/steven.webp';
import talentshow1 from '../assets/gallery/2024talentshow1.webp';
import talentshow2 from '../assets/gallery/2024talentshow2.webp';
import talentshow3 from '../assets/gallery/2024talentshow3.webp';
import talentshow4 from '../assets/gallery/2024talentshow4.webp';
import talentshow5 from '../assets/gallery/2024talentshow5.webp';
import talentshow6 from '../assets/gallery/2024talentshow6.webp';
import talentshow7 from '../assets/gallery/2024talentshow7.webp';
import talentshow8 from '../assets/gallery/2024talentshow8.webp';
import talentshow9 from '../assets/gallery/2024talentshow9.webp';
import talentshow10 from '../assets/gallery/2024talentshow10.webp';
import talentshow11 from '../assets/gallery/2024talentshow11.webp';
import talentshow12 from '../assets/gallery/2024talentshow12.webp';
import talentshow13 from '../assets/gallery/2024talentshow13.webp';
import talentshow14 from '../assets/gallery/2024talentshow14.webp';
import talentshow15 from '../assets/gallery/2024talentshow15.webp';
import talentshow16 from '../assets/gallery/2024talentshow16.webp';
import talentshow17 from '../assets/gallery/2024talentshow17.webp';
import talentshow18 from '../assets/gallery/2024talentshow18.webp';
import talentshow19 from '../assets/gallery/2024talentshow19.webp';
import sactalentshow from '../assets/gallery/sactalentshow.webp';
import tsa2 from '../assets/gallery/TSA2.webp';
import tsa1 from '../assets/gallery/TSA1.webp';
import sacentines from '../assets/gallery/SACentines.webp';
import sacentines1 from '../assets/gallery/sacentines1.webp';
import sacentines2 from '../assets/gallery/sacentines2.webp';
import sacentines3 from '../assets/gallery/sacentines3.webp';
import sacentines4 from '../assets/gallery/sacentines4.webp';
import sacentines5 from '../assets/gallery/sacentines5.webp';
import sacentines6 from '../assets/gallery/sacentines6.webp';
import sacentines7 from '../assets/gallery/sacentines7.webp';
import sacentines8 from '../assets/gallery/sacentines8.webp';
import sacentines9 from '../assets/gallery/sacentines9.webp';
import sacentines10 from '../assets/gallery/sacentines10.webp';


const imageSources = [
  semi1, semi2, semi3, semi4, semi5, semi6, semi7, semi8, semi9, semi10, 

  spc1, spc2, spc3, 
  
  spiritweek, steven, 

  sactalentshow, talentshow1, talentshow2, talentshow3, talentshow4, talentshow5, talentshow6, talentshow7, talentshow8, talentshow9, talentshow10,
  talentshow11, talentshow12, talentshow13, talentshow14, talentshow15, talentshow16, talentshow17, talentshow18, talentshow19, 
  
  tsa1, tsa2, 

  sacentines,sacentines1, sacentines2, sacentines3, sacentines4, sacentines5, sacentines6, sacentines7, sacentines8, sacentines9, sacentines10
  
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
    <>
      <Helmet>
        <title>Gallery | Milliken SAC</title>
        <meta name="description" content="Explore photos and highlights from past events at Milliken SAC. Check out our gallery to relive the memories!" />
        <meta property="og:title" content="Gallery | Milliken SAC" />
        <meta property="og:description" content="Explore photos and highlights from past events at Milliken SAC. Check out our gallery to relive the memories!" />
        <meta property="og:image" content="https://www.millikensac.com/static/media/logo.d3847a72bdbc78d4577d.webp" />
        <meta property="og:url" content="https://www.millikensac.com/Gallery" />
      </Helmet>
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
      <div className="photo-grid mt-8 mx-10">
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

export default Gallery;
