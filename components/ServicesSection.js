import React from "react";
import Image from "next/image";
import { Fragment } from "react";

const ServicesSection = () => {
  const services = [
    {
      name: "Wheelchair-accessible taxis",
      image: "/../public/whel.jpeg",
      description:
        "Our  service is for customers who need a taxi that can accommodate a wheelchair.",
    },
    {
      name: "City Taxis",
      image: "/../public/skycity.png",
      description:
        "We offer a wide range of city taxi services, including point-to-point transfers, hourly bookings, and packages.",
    },
    {
      name: "Outstation Taxis",
      image: "/../public/station.JPG",
      description:
        "We offer outstation taxi services to all major cities in the country.",
    },
    {
      name: "Golf Tours",
      image: "/../public/corporate.png",
      description:
        "Our Golg Tours services  offer reliable and affordable packages  to transfers to and from all city and natural areas point .",
    },
    {
      name: "Employ Transporation",
      image: "/../public/sky cabs.png",
      description:
        "We offer corporate tours and provide transportation for meetings and offices between cities, including point-to-point transfers, hourly bookings, and packages.",
    },
    {
      name: "On Demand Services",
      image: "/../public/school.png",
      description:
        "We offer school university and college pick up and drop of services on time pick up and drop off.",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-3xl font-bold">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {services.map((service) => (
          <Fragment key={service.name}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={service.image}
                alt={service.name}
                width={300}
                height={200}
              />
              <h3 className="text-xl font-bold mt-4">{service.name}</h3>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;
