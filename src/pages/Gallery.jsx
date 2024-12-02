import { Helmet } from "react-helmet"
// import GallerySection from "../sections/GallerySection"
import styles from "../style"
import AllGallery from "../sections/AllGallery"

const Gallery = () => (
  <div className="w-full overflow-hidden">
    <Helmet>
      <title>Gallery | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      {/* <GallerySection /> */}
      <AllGallery />
    </div>
  </div>
)

export default Gallery