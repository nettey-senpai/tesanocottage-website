import { views } from "../constants";
import ViewsCard from "../components/ViewsCard";
import styles from "../style";

const AllGallery = () => {
  return (
    <section className={`${styles.paddingY} lg:px-2 px-4`}>
      {/* Title */}
      <div className="text-center pb-10">
        <h2 className="font-palanquin font-medium text-pomo-red text-center ss:text-[62px] text-[52px] ss:leading-[100px] leading-[75px]">
          Gallery
        </h2>
      </div>
      
      {/* Cards */}
      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-8">
        {views.map((view) => (
          <ViewsCard key={view.label} {...view} />
        ))}
      </div>
    </section>
  );
};

export default AllGallery;
