import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LightboxGallery({ images }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const captionsRef = useRef([]);
  const zoomRef = useRef(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5 p-2.5">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.thumb}
          alt={`Foto ${index + 1}`}
          loading="lazy"
          className="w-full cursor-pointer rounded-lg"
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
