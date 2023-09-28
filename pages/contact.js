// import MapSection from "../components/map";
import Link from "next/link";
import BookingForm from "../components/BookingForm";
// import BookingScreen from '../screens/BookingScreen';
// import ContactForm from "./api/ContactForm";
import { useForm } from 'react-hook-form';


< button type="submit"
              className="text-gray-700 hover:text-white hover:bg-yellow-600 border-2 border-yellow-500   rounded-3xl  px-5 py-2.5 text-center mr-3 md:mr-0 ">
           <Link href="/Home.js">  For queries </Link>    
               </button> 

const Contact = () => {
  return (
    <div>
      {/* Content */}
      <div
          className="bg-no-repeat bg-cover bg-center h-96 mx-auto max-h-screen"
          style={{
            backgroundImage: `url(/taxic.png)`,
          }}
        >
           
          </div>
         
      <div>
       
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-800">
              Sky Cabs  <br />
              Transportation and Taxi Services
            </p>
            <p className="text-xl font-light text-gray-500">
            97 Randolph Crescent Stirling 
              <br /> FK7 0LY
            </p>
            <p className="text-xl font-light text-gray-500">
              Phone: (0178) 6818284 <br />
              
            </p>
            <p className="text-xl font-light text-gray-500">
              Email: info@sky-cabs.com
            </p>
          </div>
          
          <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">

          {/* <BookingScreen />   */}

          <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-center mb-4"> Book your ride   </h1> 
          <BookingForm />
          </div>

            {/* <p className="text-2xl text-gray-800"> Imran Ahmad</p>
            <p className="text-xl font-light text-gray-500">
            
              <br /> Phone: (780) 9605387 <br />
              Email: info@sky-cabs.com
            </p> */}
            {/* <p className="text-2xl text-gray-600">Director of Development</p>
            <p className="text-xl font-light text-gray-500">
              John Green
              <br /> Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
              Email: mark.peter@autoride.com
            </p> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  space-y-4 py-24">
          <p className="text-3xl text-center font-light text-gray-600">
            We proudely serving in all Stirling and near by area with all convience and comforts  <br />
            Please email or  us for any questions or queries.
          </p>
          
{/* <ContactForm /> */}
          {/* <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your Name 
              </label>
              <input
                type="text"
                id="Name"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="Name"
                required
              />
            </div>
            <div className="col-span-1 row-span-3 p-4  border">
              <label forHtml="message" className="block mb-2  text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-gray-900  "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=" text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label htmlFor="contact" className="block mb-2  text-gray-900 ">
                Contact No 
              </label>
              <input
                type="Numbers"
                id="number"
                className="  text-gray-900 "
                placeholder="contact no"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div> */}
        </div> 
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Contact;
