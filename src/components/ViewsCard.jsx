import { Link } from "react-router-dom";

const ViewsCard = ({ img, label, link }) => {
  return (
    <Link to={link}>
      <div className="flex justify-evenly">
        <div className="flex flex-1 flex-col relative overflow-hidden object-contain max-w-[400px] max-h-[280px] bg-center bg-cover rounded transition ease-in duration-1000 hover:shadow-3xl hover:shadow-gray-600">
          {/* Image */}
          <div>
            <img
              src={img}
              alt={label}
              className="w-[400px] h-[280px] object-cover hover:scale-125 transition ease-in duration-1000 hover:brightness-75"
            />
          </div>
          {/* Text */}
<<<<<<< HEAD
          <div className="absolute py-6 lg:py-0 px-0 lg:px-[120px] mx-10 sm:mx-0 w-[40%] lg:w-[50%] text-center z-20 mt-14">
=======
          <div className="bg-red-600 absolute py-6 lg:py-0 px-0 lg:px-[120px] mx-10 sm:mx-0 w-[40%] lg:w-[50%] text-center z-20 mt-14">
>>>>>>> e4e3587993e1415b98b224f918bc37a2a1da3436
            <h3 className="font-palanquin font-bold text-4xl text-white">
              {label}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ViewsCard;
