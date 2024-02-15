import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { AboutTC, EventsCenter, OurRooms, ViewGallery } from "./sections";
import styles from "./style";

const App = () => (
  <div className="w-fulll overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} z-10`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.boxWidth} z-0`}>
      <Hero autoSlide={true} />
    </div>
    <div className={`bg-primary ${styles.paddingx} ${styles.flexStart}`}>
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

export default App;
