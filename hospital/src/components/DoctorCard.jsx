import React from "react";
import Heroimg3 from "../../public/Heroimg3.png";
import Buttons from "./Buttons";

export default function DoctorCard() {
  return (
    <div className="w-1/2 p-3 mt-20">
      <div className="bg-[#385182] w-[550px] h-[211px] rounded-xl relative">
        <img src={Heroimg3} className="absolute -top-14 -left-7 " />
        <div className="flex-col ">
          <h1 className="text-white">Dr.Christopher Nicks</h1>
          <p className="text-[#d1cece]">MBBS,FCPS - Cardiologist</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
