import { views } from "../constants";
import styles from "../style";
import ViewsCard from "../components/ViewsCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ViewGallery = () => (
  <section className={`${styles.paddingY} lg:px-2 px-4`}>
    {/* Title */}
    <div className="text-center">
      <h2 className={`${styles.heading2}`}>Rooms, Restaurant & Events</h2>
    </div>

    {/* Cards */}
    <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-8">
      {views.map((view) => (
        <ViewsCard key={view.label} {...view} />
      ))}
    </div>

    {/* Button */}
    <div className="flex justify-center mt-10 mb-10 ">
      <Link to="/gallery"><Button
        styles="text-red rounded-[10px] font-montserrat font-medium text-[18px] hover:before:bg-redborder-red-500 relative h-[60px] 
        w-50 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 
        before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
        label="View Gallery"
        SpanStyles="relative z-10"
        type="button"
      />
      </Link>
    </div>
  </section>
);

export default ViewGallery;
