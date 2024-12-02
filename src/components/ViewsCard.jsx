import { Link } from "react-router-dom";

const ViewsCard = ({ img, label, link }) => {
  return (
    <Link to={link}>
      <div className="flex justify-evenly">
        <div className="flex flex-1 flex-col overflow-hidden object-contain max-w-[400px] max-h-[280px] bg-center bg-cover rounded transition ease-in duration-1000 hover:shadow-3xl hover:shadow-gray-600">
          {/* Image */}
          <div>
            <img
              src={img}
              alt={label}
              className="w-[400px] h-[280px] object-cover hover:scale-125 transition ease-in duration-1000 hover:brightness-75"
            />
          </div>
          {/* Text */}
          <h3 className="absolute py-6 px-[120px] mx-auto w-[25%] text-center lg:py-14 lg:px-0 z-20 mt-2 font-palanquin font-bold text-4xl text-white shadow-xl">
            {label}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ViewsCard;
