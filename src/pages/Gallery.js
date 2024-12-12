import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
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

    </div>
  );
}

export default Gallery;
