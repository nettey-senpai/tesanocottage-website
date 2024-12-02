import { Helmet } from "react-helmet";
import styles from "../style";
import { GalleryEventSection } from "../sections";

const GalleryEvents = () => (
  <div className="w-full overflow-hidden">
    <Helmet>
      <title>Gallery Events | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <GalleryEventSection />
    </div>
  </div>
);
export default GalleryEvents;
