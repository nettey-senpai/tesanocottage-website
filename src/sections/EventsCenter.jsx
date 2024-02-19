import { useEffect, useState } from "react";
import { homeEvents } from "../constants";
import Button from "../components/Button";

const EventsCenter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  // Function for next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === homeEvents.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Autoplay function for Events Slideshow
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 3000);
  });

  return (
    <section
      className="flex xl:flex-row flex-col justify-center w-full relative group px-4 md:px-0"
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div
        style={{ backgroundImage: `url(${homeEvents[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out md:rounded-none rounded min-h-screen"
      >
        {/* Background Overlay */}
        <div className="absolute insert-0 w-full h-full min-h-screen bg-gray-900 bg-opacity-50 z-0"></div>

        {/* Hero Text */}
        <div className="absolute top-[20%] py-8 px-4 mx-auto w-full text-center lg:py-16 lg:px-12 z-10">
          <h1 className="font-palanquin font-bold text-center ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Events Center.
          </h1>
        </div>

        <Button styles= "z-20" label=  />
      </div>
    </section>
  );
};

export default EventsCenter;
