import { useEffect, useState } from "react";
import ZoomImage from "./ZoomImage";
import Lightbox from "./Lightbox";
import { imagesCategory } from "../constants";

export default function Gallery({ category }) {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setImages(data))
      .catch(err => console.error("Failed to load images:", err));
  }, [category]);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedIndex(null);
  };

  const filteredImages = images.filter(img => img.category === category);

  return (
    <div>
      <h1 className="py-8 font-kaushan text-2xl sm:text-2xl md:text-3xl text-center">
        {imagesCategory?.[category] || "Polymeer klei"}
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredImages.map((img, index) => (
          <ZoomImage
            key={index}
            src={`${import.meta.env.BASE_URL}${img.src}`}
            alt={img.alt}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {isLightboxOpen && selectedIndex !== null && (
        <Lightbox
          images={filteredImages}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

