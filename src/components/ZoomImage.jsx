import { useState } from "react";

const ZoomImage = ({ src, alt = "", onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [lensStyle, setLensStyle] = useState({
    top: 0,
    left: 0,
    bgPosX: 0,
    bgPosY: 0,
    bgSizeX: 0,
    bgSizeY: 0,
  });

  const lensSize = 260; // diameter in px (circle)
  const zoom = 2;       // zoom factor inside lens
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const imgW = rect.width;
    const imgH = rect.height;

    // Cursor position relative to image (not clamped)
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    const r = lensSize / 2;

    // Clamp so the lens stops at edges but the content stays aligned
    const cx = Math.max(r, Math.min(relX, imgW - r));
    const cy = Math.max(r, Math.min(relY, imgH - r));

    // Lens element top-left (so its center sits at cx, cy)
    const lensLeft = cx - r;
    const lensTop  = cy - r;

    // Background size (zoomed image dimensions)
    const bgSizeX = imgW * zoom;
    const bgSizeY = imgH * zoom;

    // Background position so that (cx,cy) appears at lens center
    // Move the zoomed bg so lens center shows cursor point
    const bgPosX = -(cx * zoom - r);
    const bgPosY = -(cy * zoom - r);

    setLensStyle({
      top: lensTop,
      left: lensLeft,
      bgPosX,
      bgPosY,
      bgSizeX,
      bgSizeY,
    });
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        draggable={false}
      />

      {hovered && !isMobile && (
        <div
          className="absolute rounded-full border-2 border-white shadow-lg pointer-events-none overflow-hidden"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            top: `${lensStyle.top}px`,
            left: `${lensStyle.left}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${lensStyle.bgSizeX}px ${lensStyle.bgSizeY}px`,
            backgroundPosition: `${lensStyle.bgPosX}px ${lensStyle.bgPosY}px`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;

