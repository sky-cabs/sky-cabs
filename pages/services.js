import { FaRegChartBar, FaRegRegistered } from "react-icons/fa";
const Services = () => {
  return (
    <div>
      {/* Content */}
      <div>
        {/* <div
          className="bg-no-repeat bg-cover object-cover  bg-center  h-80"
          style={{
            backgroundImage: `url(/service.png)`,
          }}
        > */}
        <div
  className="bg-no-repeat h-96 bg-cover bg-center  md:h-120 sm:h-120 bg-contain sm:bg-auto md:bg-auto"
  style={{
    backgroundImage: `url(/service.png)`,
  }}
>
   </div>
        <div className="container mx-auto lg:grid lg:grid-cols-1 gap-16 py-2 md:py-0 px-16 md:mt-0">
          <div className="col-span-1 space-y-8 text-gray-800">
            <p className="text-xl font-medium">
              On Time Transportation Services
            </p>
            <p className="text-gray-800">
            <b>Book Your Stirling Taxi Today!</b> <br/>

Dont let transportation woes hinder your plans in Stirling. Experience hassle-free travel with Sky Cabs . Book your taxi online now and enjoy the convenience, and affordability that sets us apart as the leading taxi service in Stirling.

For quick reservations and inquiries, call us at Sky-Cabs or use our user-friendly online booking platform. Your journey in Stirling starts with us!
            </p>
          </div>
          <div className="col-span-1 flex flex-row space-x-3 ">
            < FaRegRegistered className="w-24 h-22 text-amber-900" />
            <div className="">
              <p className="text-3xl  font-light text-gray-500">
                I founded this company in 2007 with the vision of offering the
                highest quality luxury transportation service. I invite you to
                try our service and I personally guarantee you will have a fully
                satisfied experience.
              </p>
              <p className="text-xl  font-light text-right text-gray-500">
                AMRAN - AHMAD & CEO
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-4xl font-light text-gray-600">
              The perfect collection of vehicles – whatever your occasion is
              choose our service
            </p>
            <div className="py-16 lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:space-y-0 space-y-2 w-full">
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/arport.png)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    AIRPORT TRANSFER
                  </p>
                </div>
              </div>
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/school.png)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    School & Office Pick UP
                  </p>
                </div>
              </div>
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/corpo.png)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CORPORATE TOURS
                  </p>
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/carter.png)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CHARTER SERVICE
                  </p>
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/limo.png)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    SPECIAL EVENT LIMOUSINE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Services;
