import React, { useState, useEffect } from "react";
import "./TabletSlider.css";

const TabletSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://i.pinimg.com/736x/b9/b4/a6/b9b4a61db4f7fcbee0825e84dff8ae07.jpg",
    "https://i.pinimg.com/564x/b7/04/c9/b704c9b260d6e670a02f9bdbbe4d9e67.jpg",
    "https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg",
    "https://i.pinimg.com/564x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg"
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
