import React, { useState, useEffect } from "react";
import burger5 from "../assets/images/burger5.jpg";
import pancake3 from "../assets/images/pancake3.jpg";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [burger5, pancake3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center items-center h-[70vh] mt-10 bg-custom_red">
      <div className="relative w-full flex justify-center items-center max-w-5xl">
        <div id="carousel" className="relative w-[80vh] h-[70vh] flex justify-center items-center">
          <div className="relative w-[80%] h-[80%] flex justify-center items-center overflow-hidden rounded-md">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === activeIndex ? "block" : "hidden"
                } duration-700 ease-in-out`}
              >
                <img
                  src={slide}
                  className="w-full h-full object-contain rounded-md"
                  alt="Slide"
                />
              </div>
            ))}
          </div>

          {/* Dots for navigating between slides */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white"
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white"
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
