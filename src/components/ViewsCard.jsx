const ViewsCard = ({ img, label }) => {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-1 flex-col overflow-hidden object-contain max-w-[400px] max-h-[280px] bg-center bg-cover rounded">
        {/* Image */}
        <div className="z-0">
          <img
            src={img}
            alt={label}
            className="w-[400px] h-[280px] object-cover hover:scale-125 transition ease-in-out duration-1000"
          />
        </div>
        {/* Background Overlay */}
        <div className="w-[300px] h-[220px] inset-0 bg-center bg-cover bg-gray-900 bg-opacity-50 rounded z-10 "></div>
        <h3 className="absolute py-6 px-4 mx-auto w-[20%] text-center lg:py-16 lg:px-0 z-20 mt-2 font-palanquin font-bold text-3xl text-white">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default ViewsCard;
