import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function LightboxGallery({ images }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "10px",
      padding: "10px"
    }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.thumb}
          alt={`Foto ${index + 1}`}
          loading="lazy"
          style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
          onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].full}
          nextSrc={images[(photoIndex + 1) % images.length].full}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].full}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
