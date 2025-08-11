import { useState, useEffect } from "react";
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
      <h1 className="py-4 px-6 font-kaushan-script text-2xl text-center">{imagesCategory[category]}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        
        {images.map((img, index) => (
          console.log('images: ', images),
          <img className="h-auto object-cover" key={index} src={`${import.meta.env.BASE_URL}${img.src}`} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

