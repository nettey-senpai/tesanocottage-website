import { about } from "../assets/images";
import Button from "../components/Button";
import styles, { layout } from "../style";

const AboutTC = () => (
  <section
    className={`${layout.section} ${styles.paddingX} ${styles.paddingY}`}
  >
    {/* left side */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About <span className="text-pomo-red"> Tesano Cottage </span>
      </h2>

      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        Tesano Cottage is a guest house, bar & grill, and events center located
        in the heart of Ghana’s capital. Tesano Cottage is located 20 minutes
        from Kotoka International Airport and 15 minutes from the Accra Central
        Business District and Government Ministries. Perfect for a work travel
        or vacation.
      </p>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        Tesano Cottage provides accommodation options ranging from standard
        rooms to serviced rooms, making it ideal for long-stay
        guests.
      </p>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        Banquets, weddings, birthday parties, and other ceremonial gatherings
        are all catered for by our expert personnel.
      </p>

      {/* Button */}
      {/* <div className="flex mt-10 mb-10">
        <Button
          styles="rounded-[10px] relative h-14 w-40 overflow-hidden border border-pomo-red text-pomo-red shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-pomo-red before:duration-300 before:ease-out hover:text-white hover:shadow-pomo-red hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
          label="Read More"
          SpanStyles="relative z-10"
          type="button"
        />
      </div> */}
    </div>
    {/* Right side */}
    <div className={`${layout.sectionImg} overflow-hidden`}>
      <img
        src={about}
        alt="card"
        className="w-[75%] h-[60%] hover:scale-125 transition ease-in-out duration-1000 cursor-pointer object-cover"
      />
    </div>
  </section>
);

export default AboutTC;
