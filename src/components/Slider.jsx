import { useEffect, useState } from "react";
import "../styles/Slider.scss";

import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";

const images = [Slide1, Slide2, Slide3];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change d’image toutes les 4s

    return () => clearInterval(interval); // Nettoyage
  }, []);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
}

export default Slider;
