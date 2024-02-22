import { views } from "../constants";
import styles from "../style";
import ViewsCard from "../components/ViewsCard";

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
  </section>
);

export default ViewGallery;
