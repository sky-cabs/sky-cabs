import Image from "next/image";
//import Image1 from "../public/img23.jpg";
import BookingForm from '../components/BookingForm';

const ContentThere = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-amber-800">WHY CHOOSE US</p>
        <p className="text-4xl font-light text-gray-950">
          Proudly Serving the Stirling  Area Since 2007
        </p>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
      <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-center mb-4"> Book your ride   </h1>
      <BookingForm />
    </div>
    </div>
  );
};
export default ContentThere;
