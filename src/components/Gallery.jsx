import { useState, useEffect } from "react";

export default function Gallery({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
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
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}

