import { footerLogo } from "../assets/images";
import styles from "../style";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} flex-col bg-[#1a1a1a]`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* logo */}
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={footerLogo}
          alt="tesano cottage"
          className="object-contain"
          width={350}
        />
        <p className={`${styles.paragraph} max-w-[410px]`}>
          Tesano Cottage is a haven for those who appreciate comfort and
          privacy. Experience service that is professional, friendly, and
          attentive.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
