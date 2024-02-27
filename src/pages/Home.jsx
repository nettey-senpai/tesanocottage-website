import { Hero, Navbar, Footer } from "../components";
import { AboutTC, EventsCenter, OurRooms, ViewGallery } from "../sections";
import styles from "../style";

const Home = () => (
  <div className="w-fulll overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} z-10`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.boxWidth} z-0`}>
      <Hero />
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutTC />
        <OurRooms />
        <EventsCenter />
        <ViewGallery />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
