import { Helmet } from "react-helmet";
import RoomSection from "../sections/RoomSection";
import styles from "../style";

const Rooms = () => (
  <div className="w-fulll overflow-hidden">
    <Helmet>
      <title>Rooms | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <RoomSection />
    </div>
  </div>
);

export default Rooms;
