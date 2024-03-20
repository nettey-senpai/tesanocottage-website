import { Helmet } from "react-helmet"
import GallerySection from "../sections/GallerySection"
import styles from "../style"

const Gallery = () => (
  <div className="w-fulll overflow-hidden">
    <Helmet>
      <title>Gallery | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <GallerySection />
    </div>
  </div>
)

export default Gallery