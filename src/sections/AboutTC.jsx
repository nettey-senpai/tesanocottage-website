import { useEffect, useRef, useState } from "react";
import styles, { layout } from "../style";
import { aboutSlides } from "../constants";

const AboutTC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null); // Use useRef to store timeout reference

  // Function for next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === aboutSlides.length - 1 ? 0 : prevIndex + 1
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
      className={`${layout.section} ${styles.paddingX} ${styles.paddingY}`}
    >
      {/* left side */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          About <span className="text-pomo-red"> Tesano Cottage </span>
        </h2>

        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Tesano Cottage is a guest house, bar & grill, and events center
          located in the heart of Ghana’s capital. Tesano Cottage is located 20
          minutes from Kotoka International Airport and 15 minutes from the
          Accra Central Business District and Government Ministries. Perfect for
          a work travel or vacation.
        </p>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Tesano Cottage provides accommodation options ranging from standard
          rooms to serviced rooms, making it ideal for long-stay guests.
        </p>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Banquets, weddings, birthday parties, and other ceremonial gatherings
          are all catered for by our expert personnel.
        </p>
      </div>

      {/* Right side */}
      <div
        className={`${layout.sectionImg} w-full h-[500px] overflow-hidden`}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <img
          src={aboutSlides[currentIndex].img}
          alt="card"
          className="w-full h-full duration-700 ease-in-out object-cover"
        />
      </div>
    </section>
  );
};

export default AboutTC;
