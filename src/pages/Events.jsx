import { Helmet } from "react-helmet";
import EventSection from "../sections/EventSection";
import styles from "../style";

const Events = () => (
  <div className="w-fulll overflow-hidden">
    <Helmet>
      <title>Event | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <EventSection />
    </div>
  </div>
);

export default Events;
