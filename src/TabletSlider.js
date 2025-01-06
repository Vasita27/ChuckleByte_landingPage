import React, { useState, useEffect } from "react";
import "./TabletSlider.css";
import profile from "./images/Screenshot 2025-01-06 102617.png"

const TabletSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    profile,
    "https://i.pinimg.com/564x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg",
    "https://cdn.bap-software.net/2024/06/14204324/What-is-Python-3.12_11zon.webp",
    "https://cursin.net/wp-content/uploads/2023/10/curso-gratis-de-SQL-con-certificacion.jpg.webp",
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="tablet-slider">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default TabletSlider;
