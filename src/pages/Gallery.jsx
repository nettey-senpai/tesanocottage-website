import GallerySection from "../sections/GallerySection"
import styles from "../style"

const Gallery = () => (
  <div className="w-fulll overflow-hidden">
    <div className={`${styles.boxWidth}`}>
      <GallerySection />
    </div>
  </div>
)

export default Gallery