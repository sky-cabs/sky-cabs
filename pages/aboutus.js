import Image from "next/image";

import Image1 from "../public/img001.png";
import Image2 from "../public/professional.jpg";
import Image3 from "../public/office.jpg";
import { FaCheck, FaMale, FaAccessibleIcon } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center h-96 md:w-50"
          style={{
            backgroundImage: `url(/about.png)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8"> Why Choose Us?</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
            Are you looking for a reliable and affordable taxi service in Stirling? Look no further! Sky cabs is your go-to local taxi company, dedicated to providing top-notch transportation solutions for all your needs.</p>
            <p className="text-gray-500">
            we take pride in offering a comprehensive range of taxi services that cater to your diverse requirements. Whether you need a quick ride to the Stirling city center, a reliable airport transfer, or a comfortable cab for exploring the beautiful city, We have got you covered.
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p> <b>Reliability:</b> Our team of experienced and professional cab drivers is committed to ensuring a safe and punctual journey every time you ride with us.</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p><b>Affordability:</b>  We understand the importance of cost-effective transportation. Our competitive taxi fares ensure you get excellent service without breaking the bank.</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p><b>Convenience:</b>  With our easy online taxi reservation system, booking your ride has never been simpler. Whether its day or night, our 24/7 booking service is at your disposal.</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p><b>Local Expertise:</b> Explore Stirling with our knowledgeable drivers who can provide insights into the best routes, attractions, and hidden gems the city has to offer.</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p><b>Comfort:</b>Our fleet of well-maintained vehicles guarantees a comfortable and pleasant journey. Sit back, relax, and enjoy the ride.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-xl font-medium text-amber-600">
              COMMITMENT TO WORK
            </p>
            <p className="text-4xl font-light text-gray-600">Our Competences</p>
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image2} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-900">
                    PROFESSIONALISM
                  </p>
                  <p className="text-gray-500">
                    Our experienced staff and highly professional chauffeurs are
                    committed to providing safe, reliable transportation,
                    exceptional customer service, and consistent pricing. We
                    provide in-house dispatchers who support our clients.
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image3} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-900">
                    COMMITMENT
                  </p>
                  <p className="text-gray-500">
                    Our office is open twenty four hours a day, seven days a
                    week. You name the occasion – we’ll make the ride flawless.
                    Whether you require a chauffeured vehicle for business or
                    pleasure, close to home or in a new city we are always
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-24  space-y-2">
          <p className="text-xl font-medium text-amber-900">OUR FLEET</p>
          <p className="text-4xl font-light text-gray-900">Browse Our Limos</p>
          <div className="lg:grid lg:grid-cols-3 gap-12 px-4 py-24 w-full">
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-80"
                style={{
                  backgroundImage: `url(/ride1.png)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8"> </p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaAccessibleIcon className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">6</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-80"
                style={{
                  backgroundImage: `url(/luxry.png)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8"> </p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaAccessibleIcon className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">8</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-80"
                style={{
                  backgroundImage: `url(/ride3.png)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8"> </p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">8</p>
                <FaAccessibleIcon className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default AboutUs;
