import { about } from "../assets/images";
import Button from "../components/Button";
import styles, { layout } from "../style";

const AboutTC = () => (
  <section className={`${layout.section} ${styles.paddingX}`}>
    {/* left side */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About <span className="text-pomo-red"> Tesano Cottage </span>
      </h2>

      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        Tesano Cottage is a guest house, bar & grill, and events center located
        in the heart of Ghana's capital. Tesano Cottage is located 20 minutes
        from Kotoka International Airport and 15 minutes from the Central
        Business District and Government Ministries. Perfect for a work travel
        or vacation.
      </p>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        Tesano Cottage provides accommodation options ranging from standard
        rooms to serviced/unserviced rooms, making it ideal for long-stay
        guests.
      </p>
      <p className={`${styles.paragraph} max-w-[570px] mt-5 font`}>
        Banquets, weddings, birthday parties, and other ceremonial gatherings
        are all catered for by our expert personnel.
      </p>
      <Button styles="mt-10 hover:bg-red-600" label="Read More" />
    </div>

    {/* Right side */}
    <div className={`${layout.sectionImg} overflow-hidden`}>
      <img
        src={about}
        alt="card"
        className="w-[100%] h-[100%] hover:scale-125 transition ease-in-out duration-1000 cursor-pointer object-cover"
      />
    </div>
  </section>
);

export default AboutTC;
