import { gallery } from "../constants";
import styles from "../style";

const GallerySection = () => (
  <section className={`${styles.paddingY} lg:px-2 px-4`}>
    {/* Title */}
    <div className="text-center pb-10">
      <h2 className="font-palanquin font-medium text-pomo-red text-center ss:text-[62px] text-[52px] ss:leading-[100px] leading-[75px]">
        Gallery
      </h2>
    </div>

    {/* Imgaes */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 md:px-[148px] sm:px-[10px] px-6">
      {gallery.map((gallery, index) => (
        <div key={index}>
          <img
            className="h-60 w-full max-w-full rounded-lg object-cover object-center"
            src={gallery.img}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
