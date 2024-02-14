import { useEffect, useState } from "react";
import { hero } from "../constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlide = false;
  const autoSlideInterval = 3000;

  useEffect (() => {
    if (!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])


  // If current Hero is the 1st Hero set the new index to the last index of the Hero array
  const prevSlide = () => {
    const isFirstHero = currentIndex === 0;
    const newIndex = isFirstHero ? hero.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // If current Hero is the last Hero set the new index to the first index of the Hero array
  const nextSlide = () => {
    const isLastHero = currentIndex === hero.length - 1;
    const newIndex = isLastHero ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-center w-full relative group px-4 md:px-0 group"
    >
      <div
        style={{ backgroundImage: `url(${hero[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out md:rounded-none rounded min-h-screen"
        
      >
        {/* left arraow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>

        {/* Right arraow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
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
