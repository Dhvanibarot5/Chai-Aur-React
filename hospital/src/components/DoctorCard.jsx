import React from "react";
import Heroimg3 from "../../public/Heroimg3.png";
import Buttons from "./Buttons";

export default function DoctorCard() {
  return (
    <div className="w-1/2 p-3 mt-20">
      <div className="bg-[#385182] w-[525px] h-[211px] rounded-xl relative">
        <img src={Heroimg3} className="absolute -top-14 -left-6" />
        <div className="absolute right-16 top-14">
          <h1 className="text-white text-2xl mb-2">Dr.Christopher Nicks</h1>
          <p className="text-[#d1cece] mb-4">MBBS,FCPS - Cardiologist</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
