import React from "react";
import DoctorCard from "./DoctorCard";

export default function OurDoctors() {
  return (
    <section>
      <div className="container mx-auto">
        OurDoctors
        <div className="flex">
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </section>
  );
}
