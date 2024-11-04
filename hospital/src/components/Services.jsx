import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section>
      <div className="container mx-auto border-2">
        Services
        <div className="flex justify-between items-center">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
