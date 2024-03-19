import { room1 } from "../assets/images";
import RoomCard from "../components/RoomCard";
import { rooms } from "../constants";
import styles from "../style";

const RoomSection = () => (
  <section className="flex xl:flex-row flex-col justify-center w-full  group px-4 md:px-0 z-auto">
    {/* Hero */}
    <div
      style={{ backgroundImage: `url(${room1})` }}
      className="w-full md:h-[300px] h-full bg-center bg-cover duration-700 ease-in-out md:rounded-none rounded "
    >
      {/* Background Overlay */}
      <div className="mr-4 inset-0 w-full md:h-[300px] h-screen bg-center bg-cover bg-gray-900 bg-opacity-50 md:rounded-none rounded"></div>

      {/* Section Text */}
      <div className="absolute md:top-[15%] top-[55%] right-[0%] py-8 px-4 mx-auto w-full text-center lg:py-16 lg:px-12 z-10">
        <h1 className="font-palanquin font-bold text-center ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Our Rooms & Rates
        </h1>
      </div>
    </div>

    {/* Room Cards */}
    <div
      className={`${styles.paddingY} grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8`}
    >
      {rooms.map((room) => (
        <RoomCard key={room.title} {...room} />
      ))}
    </div>
  </section>
);

export default RoomSection;
