import React, { useState, useEffect } from "react";
import './CarSlider.css';

const CarSlider = ({ carImages }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === carImages.length - 1 ? 0 : prev + 1
      );
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [carImages.length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="car-slider">
      <div className="slider-wrapper">
        {carImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""} ${
              index < current ? "prev" : ""
            } ${index > current ? "next" : ""}`}
          >
            <img src={img} alt={`Premium Car ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button 
        className="slider-arrow left" 
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        ‹
      </button> */}
      {/* <button 
        className="slider-arrow right" 
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button> */}

      {/* Dots Navigation */}
      <div className="slider-dots">
        {carImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      {/* <div className="slider-counter">
        {current + 1} / {carImages.length}
      </div> */}
    </div>
  );
};

export default CarSlider;
