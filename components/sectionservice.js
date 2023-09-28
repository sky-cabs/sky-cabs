import { FaCarAlt, FaMoneyCheckAlt, FaBusinessTime, FaStreetView } from "react-icons/fa";


const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCarAlt className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-950">Safety First</p>
        <p className="text-gray-950">
        Professionally Experienced staff and  well trained chauffeurs
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaMoneyCheckAlt className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-950">Reasonable Rates</p>
        <p className="text-gray-950">
          Cheap and affordable taxi services Reasonable price to fit your
          budget
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaBusinessTime className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-950"> Business Contracts </p>
        <p className="text-gray-950">
          We offer on time Pick up and Drop off services from office and school point.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaStreetView className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-950"> Local & Long Distance</p>
        <p className="text-gray-950">
          We provide best taxi services for local and long distance.
        </p>
      </div>
    </div>
  );
};
export default Service;
