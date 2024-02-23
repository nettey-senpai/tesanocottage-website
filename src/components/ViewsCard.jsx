const ViewsCard = ({ img, label }) => {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-1 flex-col overflow-hidden object-contain max-w-[400px] max-h-[280px] bg-center bg-cover rounded transition ease-in duration-1000 hover:shadow-3xl hover:shadow-gray-600">
        {/* Image */}
        <div>
          <img
            src={img}
            alt={label}
            className="w-[400px] h-[280px] object-cover hover:scale-125 transition ease-in duration-1000 hover:brightness-50"
          />
        </div>
        {/* Text */}
        <h3 className="absolute py-6 px-4 mx-auto w-[10%] text-center lg:py-14 lg:px-0 z-20 mt-2 font-palanquin font-bold text-3xl text-white">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default ViewsCard;
