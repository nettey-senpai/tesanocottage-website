import { useState } from "react";
import { gallery } from "../constants";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const GallerySection = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // function for close button
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // function for previous image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // function for next image
  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <section className={`${styles.paddingY} lg:px-2 px-4 mb-10`}>
      {/* Title */}
      <div className="text-center pb-10">
        <h2 className="font-palanquin font-medium text-pomo-red text-center ss:text-[62px] text-[52px] ss:leading-[100px] leading-[75px]">
          Gallery
        </h2>
      </div>

      {/* Imgaes */}
      <div>
        {/* Open Modal */}
        {openModal && (
          <div className="fixed flex items-center justify-center w-[100%] h-[100%] top-[0] bottom-[0] left-[0] right-[0] bg-[#2f2e2e] z-20">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="fixed cursor-pointer opacity-[0.6] hover:opacity-[1] text-white z-20 top-[10px] right-[40px]"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="fixed cursor-pointer opacity-[0.6] hover:opacity-[1] text-white z-20 top-[50%] translate-y-[-50%] left-[10px]"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="fixed cursor-pointer opacity-[0.6] hover:opacity-[1] text-white z-20 top-[50%] translate-y-[-50%] right-[10px]"
              onClick={nextSlide}
            />

            <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center">
              <img
                src={gallery[slideNumber].img}
                alt=""
                className="max-w-[100%] max-h-[100%] pointer-events-none"
              />
            </div>
          </div>
        )}

        {/* Image thumbnails */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 md:px-[148px] sm:px-[10px] px-6">
          {gallery.map((gallery, index) => (
            <div key={index} onClick={() => handleOpenModal(index)}>
              <img
                className="h-60 w-full max-w-full rounded-lg object-cover object-center  cursor-pointer"
                src={gallery.img}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
