import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";


const Lightbox = ({ images, selectedIndex, onClose }) => {
  const [index, setIndex] = useState(selectedIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setIndex(selectedIndex);
    setZoom(1);
  }, [selectedIndex]);

  const prev = () => setIndex(i => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setIndex(i => (i < images.length - 1 ? i + 1 : 0));

  const stop = e => e.stopPropagation();

  const ZOOM_STEP = 0.5; // vergroot/verklein stap

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-70"
      onClick={onClose}
    >
      {/* Controls rechtsboven */}
      <div className="absolute top-4 right-4 flex flex-col items-end gap-3 z-50">
        {/* Sluiten */}
        <button
          className="text-white text-3xl hover:text-gray-400"
          onClick={e => { stop(e); onClose(); }}
        >
          <AiOutlineClose />
        </button>

        {/* Zoom in/out */}
        <div className="flex flex-col items-center gap-2">
          <button
            className="text-white text-3xl hover:text-gray-400"
            onClick={e => { stop(e); setZoom(z => z + ZOOM_STEP); }}
          >
            <AiOutlineZoomIn />
          </button>
          <button
            className="text-white text-3xl hover:text-gray-400"
            onClick={e => { stop(e); setZoom(z => Math.max(z - ZOOM_STEP, 1)); }}
          >
            <AiOutlineZoomOut />
          </button>
        </div>
      </div>

      {/* Navigatie pijlen */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-40"
        onClick={e => { stop(e); prev(); }}
      >
        <HiOutlineChevronLeft />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-40"
        onClick={e => { stop(e); next(); }}
      >
        <HiOutlineChevronRight />
      </button>


      {/* Afbeelding */}
      <img
        src={images[index]?.src || images[index]}
        alt={images[index]?.alt || ""}
        style={{ transform: `scale(${zoom})` }}
        className="max-h-[80vh] max-w-[80vw] object-contain transition-transform duration-200"
        onClick={stop}
      />
    </div>
  );
};

export default Lightbox;
