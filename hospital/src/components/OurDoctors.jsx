import React from "react";
import DoctorCard from "./DoctorCard";
import Heroimg3 from "../../public/Heroimg3.png";

export default function OurDoctors() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-[#6285CA] text-xl font-medium mb-3">Our Doctors</h1>
          <h2 className="text-4xl">Meet Our Professional Expert <br /> Doctor</h2>
        </div>
        <div className="flex">
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </section>
  );
}
