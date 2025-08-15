import { useState } from "react";

export default function ZoomImage({ src, alt }) {
  const [lens, setLens] = useState({ visible: false, x: 0, y: 0, background: "" });
  const lensSize = 300;
  const zoom = 2;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const bgX = -(x * zoom - lensSize / 2);
    const bgY = -(y * zoom - lensSize / 2);

    setLens({
      visible: true,
      x,
      y,
      background: `url(${src}) ${bgX}px ${bgY}px / ${rect.width * zoom}px ${rect.height * zoom}px no-repeat`,
    });
  };

  const handleMouseLeave = () => {
    setLens({ ...lens, visible: false });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
      {lens.visible && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-gray-300 shadow-lg"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: lens.x - lensSize / 2,
            top: lens.y - lensSize / 2,
            background: lens.background,
          }}
        />
      )}
    </div>
  );
}
