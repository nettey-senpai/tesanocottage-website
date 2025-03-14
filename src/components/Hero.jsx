import { useEffect, useState, useRef } from "react";
import { hero } from "../constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null); // Use useRef to store timeout reference

  // Function for Prev Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hero.length - 1 : prevIndex - 1));
  };

  // Function for Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === hero.length - 1 ? 0 : prevIndex + 1));
  };

  // Autoplay function for Hero
  useEffect(() => {
    if (autoPlay) {
      timeOutRef.current = setTimeout(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
    };
  }, [currentIndex, autoPlay]); // Ensure effect runs when `currentIndex` or `autoPlay` changes

  // Function for dots control
  const goToSlide = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-center w-full group px-4 md:px-0 z-auto"
      onMouseEnter={() => {
        setAutoPlay(false);
        if (timeOutRef.current) clearTimeout(timeOutRef.current); // Clear timeout when hovering
      }}
      onMouseLeave={() => setAutoPlay(true)} // Resume autoplay on mouse leave
    >
      {/* Carousel */}
      <div
        style={{ backgroundImage: `url(${hero[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out md:rounded-none rounded min-h-screen"
      >
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute md:top-[50%] top-[70%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/60 text-black cursor-pointer z-auto"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>

        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute md:top-[50%] top-[70%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/60 text-black cursor-pointer z-auto"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>

      {/* Dots */}
      <div className="flex top-4 justify-center py-2">
        {hero.map((_, imgIndex) => (
          <div key={imgIndex} onClick={() => goToSlide(imgIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

