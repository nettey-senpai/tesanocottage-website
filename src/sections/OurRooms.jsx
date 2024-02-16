import { room1, room2, room3 } from "../assets/images";
import styles, { layout } from "../style";

const OurRooms = () => (
  // section that displays right side on top and left side below on mobile screens
  <section
    className={`${layout.sectionReverse} ${styles.paddingX}  mb-10 bg-pomo-red`}
  >
    {/* left side */}
    <div
      className={`${layout.sectionImgReverse} ${styles.flexStart} md:flex-row flex-col flex-wrap  bg-cyan-400 relative`}
    >
      <div className="relative overflow-hidden  md:left-[-146px] md:top-0 md:z-0 shadow-3xl shadow-gray-400">
        <img
          src={room1}
          alt="room1"
          className="max-w-[300px] object-contain hover:scale-125 transition ease-in-out duration-1000"
        />
      </div>
      <div className="relative overflow-hidden w-[300px] h-[220px] md:left-[80px] md:bottom-[120px] md:z-10 object-scale-down shadow-3xl shadow-gray-400">
        <img
          src={room2}
          alt="room2"
          className="w-[300px] h-[220px] object-contain md:object-cover hover:scale-125 transition ease-in-out duration-1000"
        />
      </div>
      <div className="relative overflow-hidden md:left-[50px] md:bottom-[65px] md:z-20 shadow-3xl shadow-gray-400">
        <img
          src={room3}
          alt="room3"
          className="max-w-[300px] object-contain hover:scale-125 transition ease-in-out duration-1000"
        />
      </div>
    </div>

    {/* right side */}
    <div className={`${layout.sectionInfo} bg-green-400`}>
      <h2 className={`${styles.heading2} text-center`}>Our Rooms</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5 text-center`}>
        Experience comfort and simplicity in our guest house's standard rooms.
        Each room is designed for a cozy and delightful stay. Enjoy modern
        amenities and a warm atmosphere. Book now for a memorable retreat in our
        charming guest house.
      </p>
    </div>
  </section>
);

export default OurRooms;
