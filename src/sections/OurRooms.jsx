import { room1, room2, room3 } from "../assets/images";
import Button from "../components/Button";
import styles, { layout } from "../style";

const OurRooms = () => (
  // section that displays right side on top and left side below on mobile screens
  <section className={`${layout.sectionReverse} ${styles.paddingX}  mb-10`}>
    {/* left side */}
    <div
      className={`${layout.sectionImgReverse} ${styles.flexStart} md:flex-row flex-col flex-wrap`}
    >
      <div className="relative overflow-hidden md:left-[-150px] md:top-[90px] right-[90px] md:z-0 shadow-3xl shadow-gray-400">
        <img
          src={room1}
          alt="room1"
          className="max-w-[300px] object-contain hover:scale-125 transition ease-in-out duration-1000"
        />
      </div>
      <div className="relative overflow-hidden w-[300px] h-[220px] md:left-[100px] md:bottom-[70px] left-[90px] bottom-[90px] md:z-10 object-scale-down shadow-3xl shadow-gray-400">
        <img
          src={room2}
          alt="room2"
          className="w-[300px] h-[220px] object-cover hover:scale-125 transition ease-in-out duration-1000"
        />
      </div>
      <div className="relative overflow-hidden md:right-[80px] md:bottom-[130px] right-[90px] bottom-[80px] md:z-20 shadow-3xl shadow-gray-400">
        <img
          src={room3}
          alt="room3"
          className="max-w-[300px] object-contain hover:scale-125 transition ease-in-out duration-1000"
        />
      </div>
    </div>

    {/* right side */}
    <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
      <h2 className={`${styles.heading2} text-center`}>Our Rooms</h2>
      <p
        className={`${styles.paragraph} max-w-[570px] mt-5 md:pl-20 text-center md:text-balance`}
      >
        Experience comfort and simplicity in our guest house's standard rooms.
        Each room is designed for a cozy and delightful stay. Enjoy modern
        amenities and a warm atmosphere. Book now for a memorable retreat in our
        charming guest house.
      </p>
      <Button
        styles="mt-10 bg-pomo-red hover:bg-red-600 rounded-[10px] text-white mb-10"
        label="See more"
      />
    </div>
  </section>
);

export default OurRooms;
