import { Helmet } from "react-helmet";
import { Hero } from "../components";
import { AboutTC, EventsCenter, OurRooms, ViewGallery } from "../sections";
import styles from "../style";

const Home = () => (
  <div className="w-fulll overflow-hidden">
    <Helmet>
      <title>Home | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutTC />
        <OurRooms />
        <EventsCenter />
        <ViewGallery />
      </div>
    </div>
  </div>
);

export default Home;
