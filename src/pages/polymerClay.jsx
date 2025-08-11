import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PolymerClay() {
  const [images, setImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    fetch("/polymeer-klei/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Polymeer Klei</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((file, index) => (
          <img
            key={file}
            src={`/polymeer-klei/${file}`}
            alt={`Polymeer Klei ${index + 1}`}
            style={{
              width: "200px",
              height: "auto",
              cursor: "pointer",
              borderRadius: "8px"
            }}
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        slides={images.map((file) => ({ src: `/polymeer-klei/${file}` }))}
        index={openIndex}
      />
    </div>
  );
}
