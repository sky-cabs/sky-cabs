import React from 'react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Tailwind CSS classes here if needed

SwiperCore.use([Pagination]);

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-8">
          <div className="flex justify-center">
            {/* Image Slider */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="relative overflow-hidden">
                {/* Slider Container */}
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 4, spaceBetween: 40 },
                  }}
                >
                  {/* Service Slide 1 */}
                  <SwiperSlide>
                    {/* <img
                      src="service1.jpg"
                      alt="Service 1"
                      className="w-full h-auto"
                    /> */}
                    style={{
              backgroundImage: `url(/image_05-2.jpg)`,
            }}
                    <p className="text-gray-700 mt-2">
                      Service Description 1
                    </p>
                  </SwiperSlide>
                  {/* Service Slide 2 */}
                  <SwiperSlide>
                    {/* <img
                      src="service2.jpg"
                      alt="Service 2"
                      className="w-full h-auto"
                    /> */}
                    style={{
              backgroundImage: `url(/image_05-2.jpg)`,
            }}
                    <p className="text-gray-700 mt-2">
                      Service Description 2
                    </p>
                  </SwiperSlide>
                  {/* Add more service slides as needed */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
