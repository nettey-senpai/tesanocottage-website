import { Helmet } from "react-helmet";
import styles from "../style";
import GuestHouseSection from "../sections/GuestHouseSection";

const GuestHouse = () => (
  <div className="w-full overflow-hidden">
    <Helmet>
      <title>Guest House Gallery | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <GuestHouseSection />
    </div>
  </div>
);

export default GuestHouse;
