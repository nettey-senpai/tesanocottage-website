import { useEffect, useState } from "react";
import { hero } from "../constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;


  // Function for Prev Slide: If current Hero is the 1st Hero set the new index to the last index of the Hero array
  const prevSlide = () => {
    const isFirstHero = currentIndex === 0;
    const newIndex = isFirstHero ? hero.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function for Next Slide:If current Hero is the last Hero set the new index to the first index of the Hero array
  const nextSlide = () => {
    const isLastHero = currentIndex === hero.length - 1;
    const newIndex = isLastHero ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

    // Autoplay function for Hero
    useEffect(() => {
      timeOut =
        autoPlay &&
        setTimeout(() => {
          nextSlide();
        }, 3000);
    });

  // Function for dots control
  const goToSlide = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-center w-full relative group px-4 md:px-0 group"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      {/* Carousel */}
      <div
        style={{ backgroundImage: `url(${hero[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out md:rounded-none rounded min-h-screen"
      >
        {/* Background Overlay */}
        <div className="absolute insert-0 w-full h-screen bg-gray-900 bg-opacity-50 z-0"></div>

        {/* Hero Text */}
        <div className="absolute top-[37%] py-8 px-4 mx-auto w-full text-center lg:py-16 lg:px-12 z-10">
          <h1 className="font-palanquin font-bold text-center ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            A Memorable Experience.
          </h1>
        </div>

        {/* left arraow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/60 text-black cursor-pointer z-20">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>

        {/* Right arraow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/60 text-black cursor-pointer z-20">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>

      {/* Dots */}
      <div className="flex top-4 justify-center py-2">
        {hero.map((img, imgIndex) => (
          <div
            key={imgIndex}
            onClick={() => goToSlide(imgIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
