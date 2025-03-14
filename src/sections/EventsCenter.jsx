import { useEffect, useRef, useState } from "react";
import { homeEvents } from "../constants";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const EventsCenter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null); // Use useRef to store timeout reference

  // Function for next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === homeEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay function for Events Slideshow
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
        {/* Section Text */}
        <div className="absolute md:top-[30%] top-[30%] right-[0%] py-8 px-4 mx-auto w-full text-center lg:py-16 lg:px-12 z-10">
          <h1 className="font-palanquin font-bold text-center ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Events Center
          </h1>
        </div>

        <Link to="/events">
          <Button
            styles="absolute top-[55%] md:left-[45%] left-[33%] z-20 text-white outline outline-2 outline-offset-2 rounded-[10px] before:ease overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-8 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-20 before:duration-700 hover:before:-translate-x-40"
            label="View more"
            SpanStyles="relative z-10"
            type="button"
          />
        </Link>
      </div>
    </section>
  );
};

export default EventsCenter;
