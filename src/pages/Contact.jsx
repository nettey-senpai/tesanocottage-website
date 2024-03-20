import { Helmet } from "react-helmet";
import ContactSection from "../sections/ContactSection";
import styles from "../style";

const Contact = () => (
  <div className="w-fulll overflow-hidden">
    <Helmet>
      <title>Contact | Tesano Cottage</title>
    </Helmet>
    <div className={`${styles.boxWidth}`}>
      <ContactSection />
    </div>
  </div>
);

export default Contact;
