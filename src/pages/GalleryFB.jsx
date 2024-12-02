import { Helmet } from "react-helmet";
import styles from "../style";
import GalleryFBSection from "../sections/GalleryFBSection";

const GalleryFB = () => (
  <div className="w-full overflow-hidden">
    <Helmet>
      <title>Food & Beverages Gallery | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <GalleryFBSection />
    </div>
  </div>
);

export default GalleryFB;
