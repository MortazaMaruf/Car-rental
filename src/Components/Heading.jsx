
import React, { useEffect, useState } from "react";
import Carousel1 from '../Images/h1-rev-img-1b.jpg'
import Carousel2 from '../Images/h1-rev-img-2b.jpg'
import Carousel3 from '../Images/h1-rev-img-3b.jpg'
import Carousel4 from '../Images/h1-rev-img-4b.jpg'
import Headingtitle from "./Headingtitle";
import Headingform from './Headingform'

const images = [Carousel1, Carousel2, Carousel3, Carousel4];

const Heading = () => {
  const [current, setCurrent] = useState(0);

  // autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-screen relative h-[70vh] md:h-[85vh] lg:h-screen">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Prev Button - visible only on lg */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute
            left-5
            top-1/2
            -translate-y-1/2
            bg-black/50 text-white
            w-12 h-12
            rounded-full
          "
        >
          ❮
        </button>

        {/* Next Button - visible only on lg */}
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute
            right-5
            top-1/2
            -translate-y-1/2
            bg-black/50 text-white
            w-12 h-12
            rounded-full
          "
        >
          ❯
        </button>
      </div>

      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 ">
        <Headingtitle />
      </div>

      
    </div>
  );
};

export default Heading;
