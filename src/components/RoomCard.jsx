import styles from "../style";
import Button from "./Button";

const RoomCard = ({
  img,
  title,
  bath,
  bed,
  people,
  space,
  price,
  tv,
  fridge,
  kettle,
  ac,
  waterHeater,
  desk,
}) => (
  <div>
    <div className="flex flex-1 flex-col mx-auto overflow-hidden object-contain max-w-[600px] max-h-[380px] bg-center bg-cover rounded">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-[600px] h-[380px] object-cover hover:scale-125 transition ease-in duration-500 hover:brightness-75"
      />
    </div>

    {/* Title */}
    <div className="pt-8">
      <h3 className="text-center mt-2 font-palanquin font-bold text-2xl text-slate-gray">
        {title}
      </h3>
    </div>

    {/* Room Info */}
    <div className="pl-20 md:pb-0 pb-20">
      <ul className={`list-disc ${styles.paragraph} pt-6`}>
        <li className={`${space ? "block" : "hidden"}`}>{space}</li>
        <li>{bed}</li>
        <li>{bath}</li>
        <li>Max occupancy: {people}</li>
        <li>{tv}</li>
        <li>{fridge}</li>
        <li>{kettle}</li>
        <li>{ac}</li>
        <li>{waterHeater}</li>
        <li>{desk}</li>
      </ul>

      <div className="flex flex-1 justify-between md:last:pr-20 pt-12">
        <p className="font-montserrat font-semibold text-pomo-red">{price}</p>

        {/* Will implement button to other future pages */}
        {/* <Button
          label="View more"
          styles="rounded-[10px] relative h-14 w-40 overflow-hidden border border-pomo-red text-pomo-red shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-pomo-red before:duration-300 before:ease-out hover:text-white hover:shadow-pomo-red hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
          SpanStyles="relative z-10"
          type="button"
        /> */}
      </div>
    </div>
  </div>
);

export default RoomCard;
