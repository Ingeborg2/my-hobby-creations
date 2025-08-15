/*import { useState, useEffect } from "react";
import { imagesCategory } from "../constants";


export default function Gallery({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images.json`)
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setImages(data.filter(img => img.category === category));
        } else {
          setImages(data);
        }
      });
  }, [category]);

  return (
    <div className="mx-auto px-4">
      <h1 className="py-4 px-6 font-kaushan text-2xl text-center">{imagesCategory[category]}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        
        {images.map((img, index) => (
          console.log('images: ', images),
          <img className="h-auto object-cover" key={index} src={`${import.meta.env.BASE_URL}${img.src}`} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

*/
/*import React, { useEffect, useState } from "react";
//import imagesData from "../../public/images.json";
import { imagesCategory } from "../constants";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ category }) {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images.json`)
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setImages(data.filter(img => img.category === category));
        } else {
          setImages(data);
        }
      });
  }, [category]);


  return (
    <div>
      <h1 className="py-8 font-kaushan text-2xl sm:text-2xl md:text-3xl text-center">{imagesCategory[category]}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img, i) => (
          <img
            key={i}
            src={`${import.meta.env.BASE_URL}${img.src}`}
            alt={img.alt}
            loading="lazy"
            className="h-auto object-cover cursor-pointer transform hover:scale-200 transition-transform duration-300 ease-in-out"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((img) => ({src: `${import.meta.env.BASE_URL}${img.src}`}))}
      />
    </div>
  );
}*/

import React, { useEffect, useState } from "react";
import { imagesCategory } from "../constants";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ZoomImage from "./ZoomImage";

export default function Gallery({ category }) {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [lens, setLens] = useState({ visible: false, x: 0, y: 0, background: "" });

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images.json`)
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setImages(data.filter((img) => img.category === category));
        } else {
          setImages(data);
        }
      });
  }, [category]);

  const handleMouseMove = (e, imgSrc) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const zoomLevel = 2; // How much to zoom in
    const backgroundPosX = (x / width) * 100;
    const backgroundPosY = (y / height) * 100;

    setLens({
      visible: true,
      x,
      y,
      background: `url(${imgSrc}) ${backgroundPosX}% ${backgroundPosY}% / ${width * zoomLevel}px ${height * zoomLevel}px no-repeat`
    });
  };

  return (
    <div>
      <h1 className="py-8 font-kaushan text-2xl sm:text-2xl md:text-3xl text-center">
        {imagesCategory[category]}
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img, i) => (
          <ZoomImage
            key={i}
            src={`${import.meta.env.BASE_URL}${img.src}`}
            alt={img.alt}
          />
        ))}
      </div>


      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: `${import.meta.env.BASE_URL}${img.src}` }))}
      />
    </div>
  );
}
