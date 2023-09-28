import React, { useRef, useState } from "react";
import Image from "next/image";
import ImageTaxi0b from '../public/Taxi0b.gif';
const header = () => {
  return (
    <div className="h-main  w-full  lg:h-auto  bg-contain">
        <Image src={ImageTaxi0b} className="w-7 lg:w-5" alt = "TaxiB-img" width={1500}
      height={550}/> 
    </div>
  );
};
export default header;
