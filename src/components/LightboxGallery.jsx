/*import { useRef, useState } from "react";
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
*/


import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/zoom.css";


export default function Gallery({ category }) {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images.json`)
      .then(res => res.json())
      .then(data => {
        const filtered = category
          ? data.filter(img => img.category === category)
          : data;

        setImages(
          filtered.map(img => ({
            src: `${import.meta.env.BASE_URL}${img.src}`,
            alt: img.alt || "",
          }))
        );
      });
  }, [category]);

  return (
    <div className="mx-auto px-4">
      <h1 className="py-4 px-6 font-kaushan text-2xl text-center">
        {images.length > 0 ? category : ""}
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="h-auto object-cover cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images}
        plugins={[Zoom]}
       zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          wheelZoom: true,
        }}
        render={{
          slide: ({ slide }) => (
            <div
              className="flex items-center justify-center w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-110 focus-within:scale-110"
              tabIndex={0}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ),
        }}
      />
    </div>
  );
}
