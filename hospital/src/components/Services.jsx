import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-24 bg-[#F5F6F9]">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-[#6285CA] font-medium">Services</h1>
          <h2 className="text-3xl mt-2 mb-8">Our Medical Services</h2>
        </div>

        <div className="flex justify-between ">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
