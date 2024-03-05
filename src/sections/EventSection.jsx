import { dome5, event3 } from "../assets/images";
import styles, { layout } from "../style";

const EventSection = () => (
  <section className={`${styles.paddingX} pt-[200px] lg:px-2 px-4`}>
    {/* Title */}
    <div className="text-center pb-10">
      <h2 className="font-palanquin font-medium text-pomo-red text-center ss:text-[62px] text-[52px] ss:leading-[100px] leading-[75px]">
        Events Center
      </h2>
    </div>

    <div className={`${layout.section} md:px-2 sm:px-[100px] px-6`}>
      {/* Left side */}
      <div className={`${layout.sectionImg} md:pb-0 pb-[160px]`}>
        <img
          src={event3}
          alt="image"
          className="md:w-[70%] w-full h-full cursor-pointer object-cover shadow-2xl shadow-gray-400"
        />
      </div>

      {/* Right Side */}
      <div className="flex-1 ">
        <p className="font-semibold font-montserrat text-[15px] leading-[30.8px]">
          Event Space
        </p>
        <p className="md:max-w-[470px] font-montserrat">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quae laborum aut sint similique, libero voluptate neque quidem
          consectetur at iste obcaecati accusantium labore placeat corrupti,
          accusamus nisi veritatis totam!
        </p>
        <br />
        <p className="font-semibold font-montserrat text-[15px] leading-[30.8px]">
          Gatherings
        </p>
        <p className="max-w-[470px] font-montserrat">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quae laborum aut sint similique, libero voluptate neque quidem
          consectetur at iste obcaecati accusantium labore placeat corrupti,
          accusamus nisi veritatis totam!
        </p>
      </div>
    </div>

    <div className={`${layout.section} ${styles.paddingX}`}>
      {/* Left Side */}
      <div className="flex-1">
        <p className="font-semibold font-montserrat text-[15px] leading-[30.8px]">
          Product Launches
        </p>
        <p className="max-w-[470px] font-montserrat">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quae laborum aut sint similique, libero voluptate neque quidem
          consectetur at iste obcaecati accusantium labore placeat corrupti,
          accusamus nisi veritatis totam!
        </p>
        <br />
        <p className="font-semibold font-montserrat text-[15px] leading-[30.8px]">
          Private Events
        </p>
        <p className="max-w-[470px] font-montserrat">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quae laborum aut sint similique, libero voluptate neque quidem
          consectetur at iste obcaecati accusantium labore placeat corrupti,
          accusamus nisi veritatis totam!
        </p>
      </div>

      {/* Right side */}
      <div className={`${layout.sectionImg} `}>
        <img
          src={dome5}
          alt="image"
          className="md:w-[80%] w-full h-full cursor-pointer object-cover shadow-2xl shadow-gray-400"
        />
      </div>
    </div>

    {/*  */}
    <div className="text-center py-10 mb-[80px] bg-[#fffcf1]">
      <h2 className="font-palanquin font-normal text-pomo-red text-center ss:text-[62px] text-[52px] ss:leading-[100px] leading-[75px]">
        Planning A Special Event?
      </h2>
      <p className="font-montserrat">
        We are dedicated to creating memorable experiences so you can focus on
        <br />
        what is most important to you.
      </p>
    </div>
  </section>
);

export default EventSection;
