import { dome3, dome5, } from "../assets/images";
import styles, { layout } from "../style";

const EventSection = () => (
  <section className={`pt-[200px] lg:px-2 px-4`}>
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
          src={dome3}
          alt="image"
          className="md:w-[70%] w-full h-full cursor-pointer object-cover shadow-2xl shadow-gray-400"
        />
      </div>

      {/* Right Side */}
      <div className="flex-1 ">
        <p className="md:max-w-[470px] font-montserrat">
          Welcome to Tesano Cottage Event Center, the ultimate event space
          designed to elevate your parties and gatherings to unforgettable
          heights. Nestled in the heart of the city, our contemporary venue
          boasts a versatile and stylish atmosphere that caters to a variety of
          occasions. With its spacious layout, our Event Center provides the
          perfect canvas for creating magical moments.
        </p>
        <p className="max-w-[470px] font-montserrat">
          Whether you’re hosting a birthday bash, corporate event, or any
          special celebration, Tesano Cottage Event Center transforms every occasion into a
          captivating and joyous affair. Your guests will be enchanted by the
          ambiance, leaving them with cherished memories of an exceptional
          event.
        </p>
      </div>
    </div>

    <div className={`${layout.section} ${styles.paddingX} pb-[80px]`}>
      {/* Left Side */}
      <div className="flex-1">
        <p className="font-semibold font-montserrat text-[15px] leading-[30.8px]">
          Special Social Occasions
        </p>
        <p className="max-w-[470px] font-montserrat">
          We offer ideal spaces to plan an occasion as unique as you are,
          whether you’re organizing a family party, wedding, anniversary, or
          anything else.
        </p>
        <br />

        <p className="font-semibold font-montserrat text-[15px] leading-[30.8px]">
          Product Launches
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
        We are dedicated to creating memorable experiences for what is most important to you.
        <br />

      </p>
    </div>
  </section>
);

export default EventSection;
