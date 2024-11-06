import React from "react";
import DoctorCard from "./DoctorCard";
import Heroimg3 from "../../public/Heroimg3.png";
import Leftarrowimg from "../../public/Leftarrowimg.png";
import Whitearrowimg from "../../public/Whitearrowimg.png";
import Leaf from "../../public/Leaf.png";
import Docbgimg from "../../public/Docbgimg.png";

export default function OurDoctors() {
  return (
    <section className="py-24">
      <div className="container mx-auto relative">
        <div className="">
          <h1 className="text-[#6285CA] text-xl font-medium mb-3">Our Doctors</h1>
          <h2 className="text-4xl">
            Meet Our Professional Expert <br /> Doctor
          </h2>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <DoctorCard />
          </div>
          <div className="w-1/2">
            <DoctorCard />
            <h1 className="mb-5 text-center text-3xl text-gray-300">OUR DOCTOR</h1>
            <div className="flex">
              <img src={Leftarrowimg} alt="" />
              <img src={Whitearrowimg} className="ms-3 shadow-xl rounded-full" />
            </div>
          </div>
          <img src={Leaf} className="absolute right-28 bottom-0" />
          <img src={Docbgimg} className="absolute right-0 top-0" />
        </div>
      </div>
    </section>
  );
}
